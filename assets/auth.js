// Photizo Studio — real authentication, replacing the earlier demo redirects.
// Requires supabase-client.js to be loaded first.

(function () {
  "use strict";

  function showError(message) {
    let box = document.getElementById("auth-error-box");
    if (!box) {
      box = document.createElement("div");
      box.id = "auth-error-box";
      box.className = "mt-space-md p-space-md rounded-xl bg-error-container text-on-error-container font-body-sm text-body-sm";
      const anchor = document.querySelector("form") || document.querySelector("main") || document.body;
      anchor.prepend(box);
    }
    box.textContent = message;
    box.classList.remove("hidden");
  }

  // ---- LOGIN ------------------------------------------------------------
  const loginBtn = Array.from(document.querySelectorAll("button")).find(
    (b) => b.textContent.includes("Sign In to Studio")
  );
  if (loginBtn) {
    // Remove the earlier demo data-navigate handling — we now navigate only
    // after a real, successful sign-in.
    loginBtn.removeAttribute("data-navigate");
    loginBtn.addEventListener("click", async () => {
      const email = document.getElementById("email-input")?.value?.trim();
      const password = document.getElementById("password-input")?.value;
      if (!email || !password) {
        showError("Enter your email and password to continue.");
        return;
      }
      loginBtn.disabled = true;
      const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
      loginBtn.disabled = false;
      if (error) {
        showError(error.message);
        return;
      }
      window.location.href = "dashboard.html";
    });
  }

  // ---- SIGN UP ------------------------------------------------------------
  const sparkBtn = Array.from(document.querySelectorAll("button")).find(
    (b) => b.textContent.includes("Keep Spark Free")
  );
  const radiantBtn = Array.from(document.querySelectorAll("button")).find(
    (b) => b.textContent.includes("Activate Radiant Plan")
  );

  async function signUpAndContinue(afterUrl) {
    const email = document.getElementById("signup-email-input")?.value?.trim();
    const password = document.getElementById("pwd-input")?.value;
    const displayName = document.getElementById("signup-name-input")?.value?.trim();
    if (!email || !password) {
      showError("Go back and enter an email and password before continuing.");
      return;
    }
    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName || undefined } },
    });
    if (error) {
      showError(error.message);
      return;
    }
    window.location.href = afterUrl;
  }

  if (sparkBtn) {
    sparkBtn.removeAttribute("data-navigate");
    sparkBtn.addEventListener("click", () => signUpAndContinue("dashboard.html"));
  }
  if (radiantBtn) {
    radiantBtn.removeAttribute("data-navigate");
    radiantBtn.addEventListener("click", () => signUpAndContinue("payment.html"));
  }
})();
