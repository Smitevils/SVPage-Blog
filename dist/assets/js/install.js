$(document).ready(function() {
    $('.step-1').show();

    $(document).on('click', '.start-install', function(event) {
        event.preventDefault();
        $('.greeting__title').addClass('mini');
        $('.step-1').hide();
        setTimeout(function () {
            $('.step-2').show('slow', function() {
                setTimeout(function () {
                    $('.step-2').css('opacity', '1');
                }, 800);
            });
        }, 400);
    });

    $(document).on('click', '.perform-install', function(event) {
        testConnection();
    });

    function testConnection() {
        $.ajax({
            url: 'assets/php/connection-test.php',
            type: "POST",
            data: {
                host: $('input[name="host"]').val(),
                user: $('input[name="user"]').val(),
                password: $('input[name="password"]').val(),
                base: $('input[name="base"]').val()
            },
            success: function(data) {
                //alert(data)
                if (data == "access") {
                    $('.step-2').css('opacity', '0');
                    setTimeout(function () {
                        $('.step-2').hide('slow');
                        //
                        $('.step-test-success').show('slow', function() {
                            setTimeout(function () {
                                $('.step-test-success').css('opacity', '1');
                            }, 800);
                        });
                    }, 800);
                    //$('.step-test-success').css('opacity', '1');
                } else {
                    $('.step-2').css('opacity', '0');
                    setTimeout(function () {
                        $('.step-2').hide('slow');
                        $('.step-test-denied').show('slow', function() {
                            setTimeout(function () {
                                $('.step-test-denied').css('opacity', '1');
                            }, 800);
                        });
                    }, 800);
                    $('.step-2').css('opacity', '0');
                }
            }
        });
    }

    $(document).on('click', '.back', function(event) {
        event.preventDefault();
        $('.step-test-denied').css('opacity', '1');
        setTimeout(function () {
            $('.step-test-denied').hide();
        }, 800);
        $('.step-2').show('slow', function() {
            setTimeout(function () {
                $('.step-2').css('opacity', '1');
            }, 800);
        });
    });

});
