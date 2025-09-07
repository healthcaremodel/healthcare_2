/* ------------------------------------------------
   UI Enhancements
------------------------------------------------ */

// Ripple effect fix for dynamically added buttons
document.addEventListener("click", function(e) {
  const target = e.target.closest(".ripple");
  if (!target) return;

  let ripple = document.createElement("span");
  ripple.className = "ripple-effect";
  ripple.style.left = `${e.clientX - target.getBoundingClientRect().left}px`;
  ripple.style.top = `${e.clientY - target.getBoundingClientRect().top}px`;

  target.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// Floating Notifications
function showNotification(message, type="info") {
  const note = document.createElement("div");
  note.className = `fixed top-5 right-5 px-4 py-2 rounded-lg shadow-lg text-white animate-fadeInDown z-50`;
  note.style.background = type === "error" ? "#dc2626" : "#2563eb";
  note.innerText = message;

  document.body.appendChild(note);
  setTimeout(() => {
    note.style.opacity = "0";
    note.style.transform = "translateY(-10px)";
    setTimeout(() => note.remove(), 500);
  }, 3000);
}

// Welcome notification on load
window.addEventListener("DOMContentLoaded", () => {
  showNotification("Welcome back, Doctor!", "info");
});

// Smooth scroll for in-page anchors
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
