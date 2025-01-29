document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");
    var btn = document.getElementById("ofertaspan");
    var close = document.getElementsByClassName("close")[0];

    // Otwórz modal po kliknięciu
    btn.onclick = function () {
        modal.style.display = "flex";
    };

    // Zamknij modal po kliknięciu "X"
    close.onclick = function () {
        modal.style.display = "none";
    };

    // Zamknij modal po kliknięciu poza jego obszarem
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});