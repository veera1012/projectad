$(document).ready(function() {
    $('#learn-more').click(function() {
        $('html, body').animate({
            scrollTop: $('#features').offset().top
        }, 1000);
    });

    $('#contact-form').submit(function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        $('#contact-form')[0].reset();
    });
});
