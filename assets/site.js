// Photizo Studio — shared front-end behavior for the static prototype.
// This file has NO real backend wired up yet. Every "TODO(supabase)" comment
// marks a spot that needs to be connected to Supabase before this goes live.

(function () {
  "use strict";

  // ---- 1. Active nav highlighting -----------------------------------
  // Any link with data-path whose target matches the current file gets a
  // visual "active" treatment, matching the Stitch design's active-tab style.
  const currentFile = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll("[data-path]").forEach((el) => {
    const href = el.getAttribute("href") || "";
    const targetFile = href.split("#")[0] || "index.html";
    if (targetFile === currentFile) {
      el.classList.add("bg-primary-container", "text-on-primary-container", "font-bold");
      el.setAttribute("aria-current", "page");
    }
  });

  // ---- 2. data-navigate buttons ---------------------------------------
  // Some CTA <button> elements (not <a> tags) were tagged with
  // data-navigate="somepage.html" during the build. Wire real navigation.
  document.querySelectorAll("[data-navigate]").forEach((el) => {
    el.addEventListener("click", () => {
      window.location.href = el.getAttribute("data-navigate");
    });
  });

  // ---- 3. Mobile menu toggle (if a hamburger button exists) -----------
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // ---- 4. Login form (DEMO ONLY — replace with Supabase auth) --------
  const loginForm = document.querySelector("form[data-form='login']");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // TODO(supabase): call supabase.auth.signInWithPassword({ email, password })
      window.location.href = "dashboard.html";
    });
  }

  // ---- 5. Sign-up form (DEMO ONLY — replace with Supabase auth) ------
  const signupForm = document.querySelector("form[data-form='signup']");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // TODO(supabase): call supabase.auth.signUp({ email, password })
      window.location.href = "dashboard.html";
    });
  }

  // ---- 6. Admin invite acceptance ------------------------------------
  // admin-invite.html ships its own inline countdown + accept/decline
  // script (see the bottom of that file) — nothing to wire here.
  // TODO(supabase): that inline script currently just simulates success;
  // point it at a Supabase Edge Function that verifies the token
  // server-side, marks the invite accepted, and grants the Admin role.

  // ---- 7. Super Admin — "Send Admin Invite" demo stub ------------------
  const sendInviteBtn = document.querySelector("[data-send-admin-invite]");
  if (sendInviteBtn) {
    sendInviteBtn.addEventListener("click", () => {
      // TODO(supabase): insert a row into admin_invites via a Supabase Edge
      // Function (never issue invites purely from client-side code).
      alert("Demo only: this will call a Supabase Edge Function to create a 12-hour invite once the backend is connected.");
    });
  }
})();
