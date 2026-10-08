const formulario = document.getElementById("login");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email !== "" && senha !== "") {

        window.location.href = "home.html";

    }

});
window.location.href = "home.html";                                                                                                                                                                                                                                             