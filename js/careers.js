// =========================================================
// Careers page — availability grid + application form
// =========================================================

const form = document.getElementById("apply-form");
const cells = document.querySelectorAll(".avail-cell");
const availHelper = document.getElementById("avail-helper");
const success = document.getElementById("form-success");

// Click a box to mark a time you CAN work
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const on = cell.getAttribute("aria-pressed") === "true";
    cell.setAttribute("aria-pressed", String(!on));
    availHelper.classList.remove("error");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;

  // Required text fields
  form.querySelectorAll("[required]").forEach((input) => {
    const ok = input.value.trim() !== "" && input.checkValidity();
    input.setAttribute("aria-invalid", String(!ok));
    if (!ok) valid = false;
  });

  // At least one availability box must be selected
  const picked = [...cells].filter((c) => c.getAttribute("aria-pressed") === "true");
  if (picked.length === 0) {
    availHelper.classList.add("error");
    valid = false;
  }

  if (!valid) {
    form.querySelector('[aria-invalid="true"], .helper.error')?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  // Collect everything into one object
  const f = form.elements;
  const application = {
    name: f["name"].value.trim(),
    phone: f["phone"].value.trim(),
    email: f["email"].value.trim(),
    location: f["location"].value,
    available: picked.map((c) => c.dataset.slot),
    notAvailable: f["unavailable"].value.trim(),
    experience: f["experience"].value.trim()
  };

  // TODO: send `application` to a form service (e.g. Formspree) so the client receives it.
  console.log("Application ready to send:", application);

  form.reset();
  cells.forEach((c) => c.setAttribute("aria-pressed", "false"));
  success.classList.add("show");
  success.scrollIntoView({ behavior: "smooth", block: "center" });
});
