$(document).ready(() => {
    $('.star_1').mouseenter(() => {
        $('.star_1').attr('src', 'img/StarHover.svg');
    });
    $('.star_2').mouseenter(() => {
        $('.star_1').attr('src', 'img/StarHover.svg');
        $('.star_2').attr('src', 'img/StarHover.svg');
    });
    $('.star_3').mouseenter(() => {
        $('.star_1').attr('src', 'img/StarHover.svg');
        $('.star_2').attr('src', 'img/StarHover.svg');
        $('.star_3').attr('src', 'img/StarHover.svg');
    });
    $('.star_4').mouseenter(() => {
        $('.star_1').attr('src', 'img/StarHover.svg');
        $('.star_2').attr('src', 'img/StarHover.svg');
        $('.star_3').attr('src', 'img/StarHover.svg');
        $('.star_4').attr('src', 'img/StarHover.svg');
    });
    $('.star_5').mouseenter(() => {
        $('.star_1').attr('src', 'img/StarHover.svg');
        $('.star_2').attr('src', 'img/StarHover.svg');
        $('.star_3').attr('src', 'img/StarHover.svg');
        $('.star_4').attr('src', 'img/StarHover.svg');
        $('.star_5').attr('src', 'img/StarHover.svg');
    });
    $('.star_1').mouseout(() => {
        $('.star_1').attr('src', 'img/Star.svg');
    });
    $('.star_2').mouseout(() => {
        $('.star_1').attr('src', 'img/Star.svg');
        $('.star_2').attr('src', 'img/Star.svg');
    });
    $('.star_3').mouseout(() => {
        $('.star_1').attr('src', 'img/Star.svg');
        $('.star_2').attr('src', 'img/Star.svg');
        $('.star_3').attr('src', 'img/Star.svg');
    });
    $('.star_4').mouseout(() => {
        $('.star_1').attr('src', 'img/Star.svg');
        $('.star_2').attr('src', 'img/Star.svg');
        $('.star_3').attr('src', 'img/Star.svg');
        $('.star_4').attr('src', 'img/Star.svg');
    });
    $('.star_5').mouseout(() => {
        $('.star_1').attr('src', 'img/Star.svg');
        $('.star_2').attr('src', 'img/Star.svg');
        $('.star_3').attr('src', 'img/Star.svg');
        $('.star_4').attr('src', 'img/Star.svg');
        $('.star_5').attr('src', 'img/Star.svg');
    });


    $('.left_arrow').mouseenter(() => {
        $('.left_arrow').attr('src', 'img/a-lHover.svg');
    });
    $('.right_arrow').mouseenter(() => {
        $('.right_arrow').attr('src', 'img/a-rHover.svg');
    });

    $('.right_arrow').mouseout(() => {
        $('.right_arrow').attr('src', 'img/a-r.svg');
    });
    $('.left_arrow').mouseout(() => {
        $('.left_arrow').attr('src', 'img/a-l.svg');
    });
});