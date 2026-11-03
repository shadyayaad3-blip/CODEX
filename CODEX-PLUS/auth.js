(() => {
"use strict";
const S = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} }
};
const allUsers = () => { try { return JSON.parse(S.get("codex-users") || "{}") || {}; } catch { return {}; } };
const sessionId = () => { let v = null; try { v = sessionStorage.getItem("codex-session"); } catch {} return v || S.get("codex-session"); };
const onLogin = /login\.html$/i.test(location.pathname);
const id = sessionId();
const rec = id && allUsers()[id];
const user = rec ? { id, name: rec.name } : null;

if (!user && !onLogin) location.replace("login.html");
if (user && onLogin) location.replace("index.html");
window.CODEX_USER = user;
window.CODEX_PREFIX = user ? "u:" + user.id + ":" : "";

const enc = new TextEncoder();
const hex = b => [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
async function hash(pw, salt) {
  if (!window.crypto || !crypto.subtle) throw "المتصفح مش بيدعم التشفير هنا. افتح الموقع عبر Live Server أو https.";
  const key = await crypto.subtle.importKey("raw", enc.encode(pw), "PBKDF2", false, ["deriveBits"]);
  return hex(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: enc.encode(salt), iterations: 120000 }, key, 256));
}
function startSession(email, remember) {
  try { sessionStorage.setItem("codex-session", email); } catch {}
  if (remember) S.set("codex-session", email);
}
window.CodexAuth = {
  async register(name, email, pw, remember) {
    const users = allUsers();
    if (users[email]) throw "الإيميل ده مسجل قبل كده. جرّب تسجيل الدخول.";
    const salt = hex(crypto.getRandomValues(new Uint8Array(16)));
    users[email] = { name, salt, hash: await hash(pw, salt), created: Date.now() };
    S.set("codex-users", JSON.stringify(users));
    startSession(email, remember);
  },
  async login(email, pw, remember) {
    const u = allUsers()[email];
    if (!u || (await hash(pw, u.salt)) !== u.hash) throw "الإيميل أو كلمة المرور غير صحيحة.";
    startSession(email, remember);
  },
  async changeName(name) { const u = allUsers(); u[id].name = name; S.set("codex-users", JSON.stringify(u)); },
  async changePassword(oldPw, newPw) {
    const u = allUsers(), r = u[id];
    if ((await hash(oldPw, r.salt)) !== r.hash) throw "كلمة المرور الحالية غير صحيحة.";
    r.salt = hex(crypto.getRandomValues(new Uint8Array(16))); r.hash = await hash(newPw, r.salt);
    S.set("codex-users", JSON.stringify(u));
  },
  deleteAccount() {
    const u = allUsers(); delete u[id]; S.set("codex-users", JSON.stringify(u));
    const p = "u:" + id + ":";
    try { Object.keys(localStorage).filter(k => k.startsWith(p)).forEach(k => localStorage.removeItem(k)); } catch {}
    window.CodexAuth.logout();
  },
  logout() {
    try { sessionStorage.removeItem("codex-session"); } catch {}
    try { localStorage.removeItem("codex-session"); } catch {}
    location.replace("login.html");
  }
};

if (user && !onLogin) document.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector(".topbar, header");
  if (!bar) return;
  const st = document.createElement("style");
  st.textContent = ".codex-user{display:flex;align-items:center;gap:10px;font-size:13px;color:#e7d9ff}.codex-user button{background:#292837;border:1px solid #444256;color:#e6e0f5;border-radius:8px;padding:6px 12px;font:inherit;font-size:12px;cursor:pointer}.codex-user button:hover{border-color:#a78bfa}@media(max-width:650px){.codex-user a{display:none}}";
  document.head.appendChild(st);
  const box = document.createElement("div");
  box.className = "codex-user";
  const n = document.createElement("a"); n.href = "profile.html"; n.style.cssText = "color:inherit;text-decoration:none"; n.textContent = "👤 " + user.name; n.title = "حسابي";
  const b = document.createElement("button"); b.type = "button"; b.textContent = "تسجيل الخروج";
  b.addEventListener("click", () => window.CodexAuth.logout());
  box.append(n, b); bar.appendChild(box);
});
})();
