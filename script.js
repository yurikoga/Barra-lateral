const sidebar = document.querySelector(".sidebar");
const openBtn = document.querySelector("#btn");
const closeBtn = document.querySelector("#close-btn");

// Abre a sidebar
openBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
});

// Fecha a sidebar
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

// Fecha ao clicar fora dela
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !openBtn.contains(e.target)) {
        sidebar.classList.remove("open");
    }
});
