const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (supportsFinePointer && !prefersReducedMotion) {
  const pixels = Array.from({ length: 12 }, () => {
    const pixel = document.createElement("span");
    pixel.className = "pixel-cursor";
    pixel.setAttribute("aria-hidden", "true");
    document.body.append(pixel);
    return pixel;
  });
  let cursorIndex = 0;
  let lastTimestamp = 0;

  window.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse" || event.timeStamp - lastTimestamp < 34) return;
    lastTimestamp = event.timeStamp;
    const pixel = pixels[cursorIndex % pixels.length];
    cursorIndex += 1;
    pixel.style.left = `${event.clientX}px`;
    pixel.style.top = `${event.clientY}px`;
    pixel.classList.remove("pixel-cursor--visible");
    requestAnimationFrame(() => pixel.classList.add("pixel-cursor--visible"));
    window.setTimeout(() => pixel.classList.remove("pixel-cursor--visible"), 220);
  }, { passive: true });
}
