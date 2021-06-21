$(document).ready(function(){

    $("#about").waypoint(function (t) {
        "down" == t ? $("nav").addClass("fixed-top nav-dark bg-dark shadow d-block") : $("nav").removeClass("fixed-top nav-dark bg-dark shadow d-block")
    });

    /* $(".slideText").slideTextLeft(
        {
            words: ["ideas", "business", "passion"],  // multiple words to tranistion through in a loop
            delay: 1000 // the time to wait before the transistion
        }
    );
     */
    var mixer = mixitup('.mixer');
});