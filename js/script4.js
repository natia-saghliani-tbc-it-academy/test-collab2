const thumbnails = document.querySelectorAll(".thumbnail");

function createModal(src) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modal = document.createElement("img");
  modal.src = src;

  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.textContent = "X";

  overlay.append(modal, closeBtn);
  document.body.appendChild(overlay);

  function closeModal() {
    overlay.remove();
    document.removeEventListener("keydown", onKeyDown);
  }

  function onKeyDown(e) {
    if (e.key === "Escape") closeModal();
  }

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", onKeyDown);
}

thumbnails.forEach((img) => {
  img.addEventListener("click", () => createModal(img.dataset.view));
});
