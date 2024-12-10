document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll(".menu-section");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetSection = tab.dataset.section;

            sections.forEach(section => {
                section.classList.remove("active");
                section.classList.add("hidden");
            });

            document.getElementById(targetSection).classList.remove("hidden");
            document.getElementById(targetSection).classList.add("active");
        });
    });
});
