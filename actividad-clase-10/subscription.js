// referencias
const form = document.getElementById("subscription-form");

const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const cityInput = document.getElementById("city");
const postalCodeInput = document.getElementById("postal-code");
const dniInput = document.getElementById("dni");

const errorFullName = document.getElementById("error-full-name");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const errorConfirmPassword = document.getElementById("error-confirm-password");
const errorAge = document.getElementById("error-age");
const errorPhone = document.getElementById("error-phone");
const errorAddress = document.getElementById("error-address");
const errorCity = document.getElementById("error-city");
const errorPostalCode = document.getElementById("error-postal-code");
const errorDni = document.getElementById("error-dni");

const formTitle = document.getElementById("form-title");

// funciones de validacion

function validateFullName() {
  const value = fullNameInput.value.trim();
  const palabras = value.split(" ").filter((p) => p.length > 0);
  if (value.length < 6 || palabras.length < 2) {
    return "Debe tener más de 6 caracteres y al menos un espacio.";
  }
  return "";
}

function validateEmail() {
  const value = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) {
    return "Formato de email inválido (p.ej. usuario@dominio.com).";
  }
  return "";
}

function validatePassword() {
  const value = passwordInput.value;
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!regex.test(value)) {
    return "Mínimo 8 caracteres. Debe incluir letras y números.";
  }
  return "";
}

function validateConfirmPassword() {
  const passVal = passwordInput.value;
  const confirmVal = confirmPasswordInput.value;
  if (confirmVal !== passVal) {
    return "Las contraseñas no coinciden.";
  }
  return "";
}

function validateAge() {
  const value = parseInt(ageInput.value, 10);
  if (isNaN(value) || value < 18) {
    return "Debes ser mayor o igual a 18 años.";
  }
  return "";
}

function validatePhone() {
  const value = phoneInput.value.trim();
  const regex = /^\d{7,}$/;
  if (!regex.test(value)) {
    return "Mínimo 7 dígitos, sin espacios ni guiones.";
  }
  return "";
}

function validateAddress() {
  const value = addressInput.value.trim();
  if (value.length < 5 || !value.includes(" ")) {
    return "Mínimo 5 caracteres y debe incluir un espacio.";
  }
  return "";
}

function validateCity() {
  const value = cityInput.value.trim();
  if (value.length < 3) {
    return "La ciudad debe tener al menos 3 caracteres.";
  }
  return "";
}

function validatePostalCode() {
  const value = postalCodeInput.value.trim();
  if (value.length < 3) {
    return "El código postal debe tener mínimo 3 caracteres.";
  }
  return "";
}

function validateDni() {
  const value = dniInput.value.trim();
  const regex = /^\d{7,8}$/;
  if (!regex.test(value)) {
    return "El DNI debe tener 7 u 8 dígitos.";
  }
  return "";
}

// errores

function showError(inputElement, errorElement, message) {
  errorElement.textContent = message;
  inputElement.classList.add("input-error");
}

function hideError(inputElement, errorElement) {
  errorElement.textContent = "";
  inputElement.classList.remove("input-error");
}

// blur y focus para cada campo

fullNameInput.addEventListener("blur", () => {
  const msg = validateFullName();
  if (msg) showError(fullNameInput, errorFullName, msg);
});
fullNameInput.addEventListener("focus", () => {
  hideError(fullNameInput, errorFullName);
});

emailInput.addEventListener("blur", () => {
  const msg = validateEmail();
  if (msg) showError(emailInput, errorEmail, msg);
});
emailInput.addEventListener("focus", () => {
  hideError(emailInput, errorEmail);
});

passwordInput.addEventListener("blur", () => {
  const msg = validatePassword();
  if (msg) showError(passwordInput, errorPassword, msg);
});
passwordInput.addEventListener("focus", () => {
  hideError(passwordInput, errorPassword);
});

confirmPasswordInput.addEventListener("blur", () => {
  const msg = validateConfirmPassword();
  if (msg) showError(confirmPasswordInput, errorConfirmPassword, msg);
});
confirmPasswordInput.addEventListener("focus", () => {
  hideError(confirmPasswordInput, errorConfirmPassword);
});

ageInput.addEventListener("blur", () => {
  const msg = validateAge();
  if (msg) showError(ageInput, errorAge, msg);
});
ageInput.addEventListener("focus", () => {
  hideError(ageInput, errorAge);
});

phoneInput.addEventListener("blur", () => {
  const msg = validatePhone();
  if (msg) showError(phoneInput, errorPhone, msg);
});
phoneInput.addEventListener("focus", () => {
  hideError(phoneInput, errorPhone);
});

addressInput.addEventListener("blur", () => {
  const msg = validateAddress();
  if (msg) showError(addressInput, errorAddress, msg);
});
addressInput.addEventListener("focus", () => {
  hideError(addressInput, errorAddress);
});

cityInput.addEventListener("blur", () => {
  const msg = validateCity();
  if (msg) showError(cityInput, errorCity, msg);
});
cityInput.addEventListener("focus", () => {
  hideError(cityInput, errorCity);
});

postalCodeInput.addEventListener("blur", () => {
  const msg = validatePostalCode();
  if (msg) showError(postalCodeInput, errorPostalCode, msg);
});
postalCodeInput.addEventListener("focus", () => {
  hideError(postalCodeInput, errorPostalCode);
});

dniInput.addEventListener("blur", () => {
  const msg = validateDni();
  if (msg) showError(dniInput, errorDni, msg);
});
dniInput.addEventListener("focus", () => {
  hideError(dniInput, errorDni);
});

// bonus (copiar nombre del input en el formtitle)

fullNameInput.addEventListener("input", () => {
  const nombreActual = fullNameInput.value.trim();
  formTitle.textContent = nombreActual
    ? `HOLA ${nombreActual.toUpperCase()}`
    : "HOLA";
});

// submit

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const errores = [];

  const fullNameErrorMsg = validateFullName();
  if (fullNameErrorMsg) {
    showError(fullNameInput, errorFullName, fullNameErrorMsg);
    errores.push(`Nombre completo: ${fullNameErrorMsg}`);
  }

  const emailErrorMsg = validateEmail();
  if (emailErrorMsg) {
    showError(emailInput, errorEmail, emailErrorMsg);
    errores.push(`Email: ${emailErrorMsg}`);
  }

  const passwordErrorMsg = validatePassword();
  if (passwordErrorMsg) {
    showError(passwordInput, errorPassword, passwordErrorMsg);
    errores.push(`Contraseña: ${passwordErrorMsg}`);
  }

  const confirmPasswordErrorMsg = validateConfirmPassword();
  if (confirmPasswordErrorMsg) {
    showError(confirmPasswordInput, errorConfirmPassword, confirmPasswordErrorMsg);
    errores.push(`Repetir contraseña: ${confirmPasswordErrorMsg}`);
  }

  const ageErrorMsg = validateAge();
  if (ageErrorMsg) {
    showError(ageInput, errorAge, ageErrorMsg);
    errores.push(`Edad: ${ageErrorMsg}`);
  }

  const phoneErrorMsg = validatePhone();
  if (phoneErrorMsg) {
    showError(phoneInput, errorPhone, phoneErrorMsg);
    errores.push(`Teléfono: ${phoneErrorMsg}`);
  }

  const addressErrorMsg = validateAddress();
  if (addressErrorMsg) {
    showError(addressInput, errorAddress, addressErrorMsg);
    errores.push(`Dirección: ${addressErrorMsg}`);
  }

  const cityErrorMsg = validateCity();
  if (cityErrorMsg) {
    showError(cityInput, errorCity, cityErrorMsg);
    errores.push(`Ciudad: ${cityErrorMsg}`);
  }

  const postalCodeErrorMsg = validatePostalCode();
  if (postalCodeErrorMsg) {
    showError(postalCodeInput, errorPostalCode, postalCodeErrorMsg);
    errores.push(`Código postal: ${postalCodeErrorMsg}`);
  }

  const dniErrorMsg = validateDni();
  if (dniErrorMsg) {
    showError(dniInput, errorDni, dniErrorMsg);
    errores.push(`DNI: ${dniErrorMsg}`);
  }

  if (errores.length > 0) {
    alert("Se encontraron errores:\n\n" + errores.join("\n"));
    return;
  }

  const data = {
    name: fullNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value,
    age: ageInput.value.trim(),
    telephone: phoneInput.value.trim(),
    address: addressInput.value.trim(),
    city: cityInput.value.trim(),
    postalcode: postalCodeInput.value.trim(),
    dni: dniInput.value.trim()
  };

  sendData(data);
});

// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

modalClose.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.classList.add("hidden");
});

function openModal(title, content) {
  modalTitle.textContent = title;
  modalBody.textContent = content;
  modal.classList.remove("hidden");
}

async function sendData(data) {
  const url = `https://jsonplaceholder.typicode.com/posts`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(`Error ${res.status}`);

    const responseData = await res.json();

    localStorage.setItem("subscriptionData", JSON.stringify(responseData));
    openModal("¡Suscripción exitosa!", JSON.stringify(responseData, null, 2));
    form.reset();
    formTitle.textContent = "HOLA";
  } catch (err) {
    openModal("Error al enviar datos", err.message);
  }
}


// cargar datos desde LocalStorage
window.addEventListener("load", () => {
  const saved = localStorage.getItem("subscriptionData");
  if (!saved) return;

  try {
    const data = JSON.parse(saved);
    fullNameInput.value = data.name || "";
    emailInput.value = data.email || "";
    passwordInput.value = data.password || "";
    confirmPasswordInput.value = data.password || "";
    ageInput.value = data.age || "";
    phoneInput.value = data.telephone || "";
    addressInput.value = data.address || "";
    cityInput.value = data.city || "";
    postalCodeInput.value = data.postalcode || "";
    dniInput.value = data.dni || "";
    formTitle.textContent = data.name ? `HOLA ${data.name.toUpperCase()}` : "HOLA";
  } catch (err) {
    console.error("Error leyendo localStorage:", err);
  }
});

