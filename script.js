function generate() {
  const length = parseInt(document.getElementById("length").value);
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("password").innerText = password;
  checkStrength(password);
}

function copyPassword() {
  const password = document.getElementById("password").innerText;
  if (password) {
    navigator.clipboard.writeText(password).then(() => {
      alert("¡Contraseña copiada!");
    });
  }
}

function checkStrength(password) {
  const strength = document.getElementById("strength");
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) {
    strength.innerText = "Seguridad: Débil";
    strength.className = "strength weak";
  } else if (score <= 4) {
    strength.innerText = "Seguridad: Media";
    strength.className = "strength medium";
  } else {
    strength.innerText = "Seguridad: Fuerte";
    strength.className = "strength strong";
  }
}
