let currentImageIndex = 0;
let images = document.querySelectorAll(".gallery-img");
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");

function openModal(imgElement) {
    modal.style.display = "flex"; // Show modal
    modalImg.src = imgElement.src;
    modalImg.style.width = "100%"; // Full size
    modalImg.style.height = "100vh"; // Fit the screen height
    currentImageIndex = Array.from(images).indexOf(imgElement);
}

function closeModal() {
    modal.style.display = "none"; // Hide modal
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentImageIndex].src;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImg.src = images[currentImageIndex].src;
}

// Close modal when clicking outside the image
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
