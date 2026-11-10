function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}


document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("appointment-date").value;
    const message = document.getElementById("booking-message").value;

    const whatsappMessage =
        "Hello Slay & Feel Good! I would like to book an appointment.\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Service: " + service + "\n" +
        "Preferred Date: " + date + "\n" +
        "Additional Message: " + message;

    const whatsappURL =
        "https://wa.me/254759195138?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
});


const servicePrices = {
    "Wispy Set": "KSh 600",
    "Wet-Wispy Set": "KSh 800",
    "Anime Set": "KSh 1,000",
    "Hybrid Set": "KSh 1,200",
    "Cat-Eye Set": "KSh 700",
    "Classic Set": "KSh 500",
    "Natural Look": "KSh 400",
    "Strip Lashes (From Our Shop)": "KSh 200",
"Strip Lashes (Customer's Own)": "KSh 100",
    "Wig Installation": "KSh 800 (Free when you buy a wig from us)",
    "Wig Styling & Installation": "KSh 1,200",
    "Wig Cleaning": "KSh 600",
    "Wig Cleaning & Styling": "KSh 800"
};

document.getElementById("service").addEventListener("change", function() {
    const selectedService = this.value;
    const priceDisplay = document.getElementById("price-display");

    if (selectedService && servicePrices[selectedService]) {
        priceDisplay.textContent = "Price: " + servicePrices[selectedService];
    } else {
        priceDisplay.textContent = "Select a service to see its price.";
    }

});


/* GALLERY IMAGE VIEWER */

const galleryImages = document.querySelectorAll("#gallery .service-card img");

galleryImages.forEach(function(image) {
    image.style.cursor = "pointer";

    image.addEventListener("click", function() {
        const viewer = document.createElement("div");
        viewer.className = "image-viewer";

        const largeImage = document.createElement("img");
        largeImage.src = image.src;
        largeImage.alt = image.alt;

        const closeButton = document.createElement("button");
        closeButton.textContent = "×";
        closeButton.className = "close-viewer";
        closeButton.setAttribute("aria-label", "Close image");

        viewer.appendChild(closeButton);
        viewer.appendChild(largeImage);
        document.body.appendChild(viewer);

        closeButton.addEventListener("click", function() {
            viewer.remove();
        });

        viewer.addEventListener("click", function(event) {
            if (event.target === viewer) {
                viewer.remove();
            }
        });

        document.addEventListener("keydown", function closeOnEscape(event) {
            if (event.key === "Escape") {
                viewer.remove();
                document.removeEventListener("keydown", closeOnEscape);
            }
        });
    });
});

// BACK TO TOP BUTTON
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
