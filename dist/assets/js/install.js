$(document).ready(function() {

    nextStep('', '.step-1', '2000');

    $(document).on('click', '.to-step-2', function(event) {
        nextStep('.step-1', '.step-2', '500');
        $('.greeting__title').addClass('mini');
    })

    $(document).on('click', '.to-step-test', function(event) {
        event.preventDefault();
        var parentForm = $(this).parents('form');
        if (validateFormInputs(parentForm)) {
            testConnection();
        }
    });
    $("#connect-test").on("submit", function(){
        event.preventDefault();
        $(document).find('.to-step-test').click();
    })

    $(document).on('click', '.to-step-3', function(event) {
        nextStep('.step-test-success', '.step-3', '500');
    })

    $(document).on('click', '.back-to-step-2', function(event) {
        nextStep('.step-test-denied', '.step-2', '500');
    })

    $(document).on('click', '.end-install', function(event) {
        var parentForm = $(this).parents('form');
        if (validateFormInputs(parentForm)) {
            installingBlog();
        }
    })
    $("#end-install").on("submit", function(){
        event.preventDefault();
        $(document).find('.end-install').click();
    })

    $(document).on('click', '.to-admin-panel', function(event) {
        $(document).html("");
    })

    $(document).on('click', '.back-to-step-3', function(event) {
        nextStep('.step-finish-denied', '.step-3', '500');
    })

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
                if (data == 'access') {
                    nextStep('.step-2', '.step-test-success', '500');
                } else {
                    nextStep('.step-2', '.step-test-denied', '500');
                }
            }
        });
    }

    function installingBlog() {
        $.ajax({
            url: 'assets/php/init.php',
            type: "POST",
            data: {
                adminName: $('input[name="adminName"]').val(),
                adminPassword: $('input[name="adminPassword"]').val()
            },
            success: function(data) {
                if (data == 'success') {
                    nextStep('.step-3', '.step-finish-success', '500');
                } else {
                    nextStep('.step-3', '.step-finish-denied', '500');
                }
            }
        });
    }

    function nextStep(prevStep, nextStep, speed) {
        $(prevStep).addClass('opasity-zero');
        setTimeout(function () {
            $(prevStep).hide(speed);
            $(nextStep).show(speed);
            //
            setTimeout(function () {
                $(nextStep).removeClass('opasity-zero');
            }, speed);
        }, speed);
    }

    /* == validation == */

    function validateFormInputs(parentForm) {
        var validateElements = parentForm.find('[data-validate-option]');
        $.each(validateElements, function(index, value){
            switch ($(this).data('validate-option')) {
                case 0: // if input empty
                    if ($(this).val() == "") {
                        $(this).addClass('alert');
                    }
                    break;
            }
        });
        if (parentForm.find('input').hasClass('alert')) {
            console.log('Пожалуйста, заполните обязательные поля...')
        } else {
            console.log('Все обязательные поля заполнены...')
            return true;
        }
    }

    $(document).on('focus keyup', 'input', function(event) {
        var item = $(this);
        clearValidateMark(item);
    })

    function clearValidateMark(item) {
        item.removeClass('alert');
    }

    /* == validation == */

});
