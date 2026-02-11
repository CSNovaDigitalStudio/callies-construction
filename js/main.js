// Loader
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Mobile Menu
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

toggle.onclick = () => nav.classList.toggle("show");

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(r => {
        const top = r.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            r.classList.add("active");
        }
    });
});

// WhatsApp Quote Form Submission
const quoteForm = document.querySelector(".quote-form");

if (quoteForm) {
    quoteForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = this.querySelector("input[placeholder='Full Name']").value;
        const email = this.querySelector("input[type='email']").value;
        const phone = this.querySelector("input[type='tel']").value;
        const location = this.querySelector("input[placeholder='Project Location']").value;
        const projectType = this.querySelector("select").value;
        const message = this.querySelector("textarea").value;

        const text = `
📌 *New Quote Request*

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
📍 Location: ${location}
🛠 Project Type: ${projectType}

📝 Project Details:
${message}
        `;

        const whatsappNumber = "27738102472"; // Your number without +
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
    });
}

toggle.onclick = () => {
    nav.classList.toggle("show");
    toggle.classList.toggle("active");
};

