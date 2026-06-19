const updateViewportHeight = () => {
  document.documentElement.style.setProperty(
    "--viewport-height",
    `${window.innerHeight}px`,
  );
};

updateViewportHeight();
window.addEventListener("resize", updateViewportHeight, { passive: true });
