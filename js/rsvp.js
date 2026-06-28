const form = document.getElementById("rsvp-form");

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzaBtvg0wwZ8tuGBEj3m3rIadDw_NTdCO3J4PwT-21MbtC3OxIOK5Vm7WsvR2ZG4wEK/exec";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const guestName = document.getElementById("guest-name").value;

  const companionName = document.getElementById("companion-name").value;

  const attending = document.querySelector(
    'input[name="attendance"]:checked',
  ).value;

  const formData = new FormData();

  formData.append("guestName", guestName);
  formData.append("companionName", companionName);
  formData.append("attending", attending);

  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = "Enviando...";

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    form.reset();
  } catch (error) {
    console.error(error);

    alert("Não foi possível enviar sua confirmação. Tente novamente.");
  } finally {
    button.disabled = false;
    button.textContent = "Enviar";
  }

  document.getElementById("form-message").textContent =
    "Presença confirmada com sucesso!";
});
