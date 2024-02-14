function cambiarEstilo() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var button = document.getElementById("toggleButton");
    var isDarkMode = body.classList.contains("dark-mode");

    if (isDarkMode) {
        button.innerHTML = "🌞";
    } else {
        button.innerHTML = "🌜";
    }
}



//Comments

// La función cambiarEstilo() alterna la presencia de la clase "dark-mode" en el elemento <body>. Cuando la clase está presente, el CSS asociado en el archivo styles.css ajusta el color de fondo y el color del texto para crear un tema oscuro. Al quitar la clase, se revierten esos cambios, volviendo al tema claro.

// classList es una propiedad de los elementos DOM en JavaScript que proporciona acceso a la lista de clases asociadas a ese elemento. La propiedad classList tiene varios métodos útiles para manipular las clases de un elemento, y uno de esos métodos es toggle().

// toggle(className): Este método agrega la clase especificada si no está presente en el elemento y la quita si ya está presente. Es una forma conveniente de alternar entre clases.


// https://www.w3schools.com/howto/howto_js_toggle_class.asp