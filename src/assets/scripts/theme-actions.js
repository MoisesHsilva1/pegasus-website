const copyButtons = document.querySelectorAll("[data-copy-palette]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const originalLabel = button.textContent;
    try {
      await navigator.clipboard.writeText(button.dataset.copyPalette);
      button.textContent = "Copied";
    } catch {
      button.textContent = "Copy unavailable";
    }
    window.setTimeout(() => { button.textContent = originalLabel; }, 1400);
  });
});
