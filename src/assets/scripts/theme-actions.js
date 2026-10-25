const copyButtons = document.querySelectorAll("[data-copy-palette], [data-copy-target]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const originalLabel = button.textContent;
    const value = button.dataset.copyPalette || document.getElementById(button.dataset.copyTarget)?.textContent;
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value.trim());
      button.textContent = "Copied";
    } catch {
      button.textContent = "Copy unavailable";
    }
    window.setTimeout(() => { button.textContent = originalLabel; }, 1400);
  });
});
