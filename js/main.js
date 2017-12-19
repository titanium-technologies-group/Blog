var typed = new Typed('.element', {
    strings: ['' +
    '<span>' +
    '<b>Take </b>' +
    '<span class="animate">challenge<i>.</i> </span>' +
    '<b>Implement </b>' +
    '<span class="animate">ideas<i>.</i></span>' +
    '<b> Be the </b>' +
    '<span class="animate">change<i>.</i></span>' +
    '<b> Enjoy </b>' +
    '<span class="animate">life</span>' +
    '</span>'],
    typeSpeed: 50,
    showCursor:false,
    onComplete: function () {
        $('.element').addClass('test');
        setTimeout(function () {
            $('.titanium-logo').css(
                {
                    'transition': '1s ease',
                    'opacity': '1'
                });
            $('.description-after-logo').empty();
        }, 4000);
    }
});