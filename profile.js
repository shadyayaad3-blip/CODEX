(() => {
"use strict";
const U = window.CODEX_USER, A = window.CodexAuth; if (!U || !A) return;
const $ = id => document.getElementById(id), P = window.CODEX_PREFIX;
const rd = (k, d) => { try { const v = localStorage.getItem(P + k); return v === null ? d : v; } catch { return d; } };
const msg = (t, ok) => { $("pmsg").textContent = t; $("pmsg").className = "msg" + (ok ? " ok" : ""); };
const names = { html: "HTML", css: "CSS", javascript: "JavaScript", python: "Python" };
function draw() {
  $("hello").textContent = "أهلاً، " + U.name; $("mail").textContent = U.id; $("pXP").textContent = Number(rd("codex-xp", 0)) || 0;
  let total = 0; $("courses").innerHTML = "";
  for (const k in names) {
    let n = 0; try { n = JSON.parse(rd("codex-progress-" + k, "[]")).length; } catch {} total += n; const L = ((window.CODEX_COURSES || {})[k] || []).length || 5;
    const r = document.createElement("div"); r.className = "crs";
    r.innerHTML = `<span>${names[k]}</span><i><b style="width:${n / L * 100}%"></b></i><span>${n}/${L}</span>`; $("courses").appendChild(r);
  }
  $("pDone").textContent = total;
  try { const s = JSON.parse(rd("codex-streak", "null")); const d = x => x.toLocaleDateString("en-CA"), t = new Date();
    $("pStreak").textContent = s && (s.last === d(t) || s.last === d(new Date(t - 864e5))) ? s.n : 0; } catch {}
}
$("saveName").onclick = async () => { const n = $("newName").value.trim(); if (n.length < 2) return msg("اكتب اسمًا من حرفين على الأقل.");
  await A.changeName(n); msg("تم تحديث الاسم ✓", true); setTimeout(() => location.reload(), 600); };
$("savePw").onclick = async () => { try { if ($("newPw").value.length < 8) throw "كلمة المرور الجديدة 8 حروف على الأقل.";
  await A.changePassword($("oldPw").value, $("newPw").value); $("oldPw").value = $("newPw").value = ""; msg("تم تغيير كلمة المرور ✓", true);
  } catch (e) { msg(typeof e === "string" ? e : "حصل خطأ، حاول تاني."); } };
$("exp").onclick = () => {
  const out = {}; try { Object.keys(localStorage).filter(k => k.startsWith(P)).forEach(k => out[k.slice(P.length)] = localStorage.getItem(k)); } catch {}
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(out)], { type: "application/json" }));
  a.download = "codex-progress.json"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
};
$("imp").onchange = async e => { try {
  const data = JSON.parse(await e.target.files[0].text()); let n = 0;
  for (const k in data) if (/^codex-/.test(k) && typeof data[k] === "string") { localStorage.setItem(P + k, data[k]); n++; }
  msg(`تم استيراد ${n} عنصر ✓`, true); draw();
} catch { msg("الملف غير صالح."); } };
$("out").onclick = () => A.logout();
$("del").onclick = () => { if (confirm("هيتم حذف حسابك وتقدمك نهائيًا. متأكد؟")) A.deleteAccount(); };
draw();
})();
