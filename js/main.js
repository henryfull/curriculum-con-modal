
$(document).ready(function () {
    $("img").click(function () {
        
            mostrarCurriculum();
            $(this).addClass("foto-curriculum");
            rellenarDatosColaborador($(this).attr("id"));
        
    });

    // oculta de nuevo el curriculum cuano le haces click a la X, boton de cerrar
    $("#restaurar").click(ocultarCurriculum);

});

function rellenarDatosColaborador(colaborador) {
    var user;
    var temp = "";

// Dependiendo del usuario seleccionado copiara el objeto usuario 

    if (colaborador == "colaborador_1") { var user = $.extend({}, colaborador_1); }
    if (colaborador == "colaborador_2") { var user = $.extend({}, colaborador_2); }
    if (colaborador == "colaborador_3") { var user = $.extend({}, colaborador_3); }
    if (colaborador == "colaborador_4") { var user = $.extend({}, colaborador_4); }
    if (colaborador == "colaborador_5") { var user = $.extend({}, colaborador_5); }

// Rellena los datos personales del colaborador

    $("#nombre").text(user.firstname);
    $("#apellido").text(user.lastname);
    $("#edad").text(user.age);
    $("#nombre").text(user.name);
    $("#empresa").text(user.business);
    $("#cargo").text(user.job);
    $("#localidad").text(user.place);
    $("#email").text(user.email);
    $("#telefono").text(user.phone);
    
    // Rellena los datos de la experiencia laboral y profesional

    for (let i = 0; i < user.curriculum.length; i++) {
        for (let j = 0; j < user.curriculum[1].length; j++) {
            temp += "<div><p>" + user.curriculum[i][j] + "</p></div>";

            //   console.log(curriculum1[i][j]);

        }
    }
    // mete toda la experiencia en el container de experiencia
    $("#experiencia").html(temp);
}





// Muestra el curriculum del colaborador al que se le ha hecho click
function mostrarCurriculum() {
    $("#offside").show();
    $("#curriculum").fadeOut(2000);
    $("#curriculum").css("display", "grid");
    $("#restaurar").show();
    $("#curriculum").fadeIn(2000);

}

// Oculta el curriculum del colaborador al que se le ha hecho click
function ocultarCurriculum() {
    $("#offside").hide();
    $("#curriculum").hide();
    $("#restaurar").hide();
    $("img").removeClass("foto-curriculum");

}



