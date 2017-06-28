$(document).ready(function() {
    $('a.hamburger').on("click", function (e){
        e.preventDefault();
        $('.header_menu').css("display", "block");
        $('.header_menu').css("transition", "0.5s");
    });
    $('a.arrowed').on("click", function (e){
        e.preventDefault();
        $(this).parent().find("ul.header_submenu").slideToggle();
        $(this).parent().find(".header_menu__link").toggleClass("on_slide");
    });
    $('a.close_btn').on("click", function (e){
        e.preventDefault();
        $(this).parent().hide();
    });
})