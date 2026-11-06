const steps = [...document.querySelectorAll(".step")];
const status = document.querySelector("#flow-status");
const nextButton = document.querySelector("#next-step");
const stageNames = ["feature", "develop", "main"];
let currentStep = 0;

nextButton.addEventListener("click", () => {
  currentStep = (currentStep + 1) % steps.length;

  steps.forEach((step, index) => {
    step.classList.toggle("is-current", index === currentStep);
  });

  status.textContent = `Etapa atual: ${stageNames[currentStep]}`;
});
