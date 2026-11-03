(() => {
"use strict";
const $ = id => document.getElementById(id), A = window.CodexAuth;
if (!A || window.CODEX_USER) return;
let mode = "login";
const msg = (t, ok) => { $("msg").textContent = t; $("msg").className = "msg" + (ok ? " ok" : ""); };

function setMode(m) {
  mode = m;
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("on", t.dataset.m === m));
  document.querySelectorAll(".reg-only").forEach(e => e.hidden = m !== "register");
  $("title").textContent = m === "login" ? "أهلاً بعودتك 👋" : "أنشئ حسابك المجاني";
  $("submit").textContent = m === "login" ? "تسجيل الدخول" : "إنشاء الحساب";
  $("pw").autocomplete = m === "login" ? "current-password" : "new-password";
  msg("");
}
document.querySelectorAll(".tab").forEach(t => t.addEventListener("click", () => setMode(t.dataset.m)));
$("eye").addEventListener("click", () => {
  const show = $("pw").type === "password";
  $("pw").type = show ? "text" : "password"; $("pw2").type = $("pw").type;
});

$("pw").addEventListener("input", () => {
  const p = $("pw").value;
  const s = (p.length >= 8) + (p.length >= 12) + /[A-Za-z]/.test(p) * /\d/.test(p) + /[^A-Za-z0-9]/.test(p);
  const lv = p ? Math.max(1, Math.min(4, s)) : 0;
  $("bar").style.setProperty("--w", lv * 25 + "%");
  $("bar").style.setProperty("--c", ["#fb7185", "#fb7185", "#facc15", "#4ade80", "#22c55e"][lv]);
  $("barText").textContent = p ? ["", "ضعيفة", "مقبولة", "قوية", "قوية جدًا"][lv] : "8 حروف على الأقل";
});

$("form").addEventListener("submit", async e => {
  e.preventDefault();
  const email = $("email").value.trim().toLowerCase(), pw = $("pw").value, remember = $("remember").checked;
  $("submit").disabled = true;
  try {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw "اكتب بريد إلكتروني صحيح.";
    if (mode === "register") {
      const name = $("name").value.trim();
      if (name.length < 2) throw "اكتب اسمك (حرفين على الأقل).";
      if (pw.length < 8) throw "كلمة المرور لازم تكون 8 حروف على الأقل.";
      if (pw !== $("pw2").value) throw "كلمتا المرور مش متطابقتين.";
      await A.register(name, email, pw, remember);
    } else {
      if (!pw) throw "اكتب كلمة المرور.";
      await A.login(email, pw, remember);
    }
    msg("تم بنجاح! جاري التحويل…", true);
    location.replace("index.html");
  } catch (err) {
    msg(typeof err === "string" ? err : "حصل خطأ غير متوقع، حاول تاني.");
    $("submit").disabled = false;
  }
});
})();
