$( document ).ready(function() {
    var video = document.getElementById("js-video-bg");

    $('.js-play-video').click(function() {
        $('.b-hero__inner').addClass('b-hero__inner--no-bg');
        video.play();
        $('.b-hero__btn, .b-hero__heading').addClass('is-hidden');
    });

    $('.js-pause-video').click(function() {
        $('.b-hero__inner').removeClass('b-hero__inner--no-bg');
        video.pause();
        $('.b-hero__btn, .b-hero__heading').removeClass('is-hidden');
    });

    $('.js-show-more').click(function(event) {
        event.preventDefault();

        var $this = $(this),
            $items = $('.b-partners__item');

        $items.toggleClass('is-visible');

        if ( $items.filter('.is-visible').length ) {
            $this.text( $this.data('open') );
        }
        else {
            $this.text( $this.data('close') );
        }
    });
});
