$(document).ready(function() {

    var page_h = $("html").height();
    var page_w = $("html").width();
    //
    function window_resize(){
        page_h = $("html").height();
        page_w = $("html").width();
    }
    $(window).resize(function(event) {
        window_resize();
    });

    var setSnow = setInterval(function () {
        var randomRight = Math.floor(Math.random() * (page_w)) - Math.floor(Math.random() * 600);;
        $('body').append('<div class="snowflake" style="right:'+randomRight+'px"><div>');
    }, 3000);

    var moveFlake = setInterval(function () {
        var snow = $(document).find('.snowflake');
        //var snow = $('.snowflake');
        $.each(snow, function(index, el) {
            var top = $(this).css('top');
            var right = $(this).css('right');
            //console.log(top);
            top = parseInt(top) + 1 + "px";
            right = parseInt(right) + 1 + "px";
            //console.log(top);
            $(this).css('top', top);
            $(this).css('right', right);
            //
            if (parseInt(right) > (page_w - 100) || parseInt(top) > (page_h - 100)) {
                $(this).addClass('hidden');
            }
            if (parseInt(right) > (page_w - 20) || parseInt(top) > (page_h - 20)) {
                $(this).remove();
            }
        });
        //console.log(snow);
        // for (var i = 0; i < snow.length; i++) {
        //     var top = snow[i].css('top');
        //     top = top + 1;
        //     snow[i].css('top', top);
        // }
    }, 20);

});
