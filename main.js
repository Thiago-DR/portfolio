$(document).ready(function () {

    $('.project-links, .project-tools').hide();

    $(".project-item").on("click", function () {
        $(this).toggleClass('purple-bg');
        $(this).find(".project-links").toggle();
        $(this).find(".project-tools").toggle();
    });

}); 