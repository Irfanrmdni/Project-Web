
// smoth scroll
$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    });

    e.preventDefault();
});

// parallax
$(window).scroll(function () {

    // header
    let wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 4.5 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 3 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });
    $('.jumbotron a').css({
        'transform': 'translate(0px,' + wScroll / -4.5 + '%)'
    });

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 450) {

        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul')
            }, 250 * (i + 1));
        })
    }
    else if (wScroll < $('.portfolio').offset().top - 400) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).removeClass('muncul')
            }, 200 * (i + 1));
        })
    }

});

// about
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});