// h1
$('.strip').each(function(){
    var $t = $(this),
         rows = $.trim($t.html()).split('<br>');

        $t.html('');

        $.each(rows, function(i, val){
            $('<span class="row"></span>').appendTo($t);

            var letters = $.trim(val).split('');

    $.each(letters, function(j, v){
        v = (v == ' ') ? '&nbsp;' : v;
        $('<span>' + $.trim(v) + '</span>').appendTo($('.row:last', $t));
    });

    });
});

    $('h1').click(function(){
    for (i = 0; i < $('.strip span').length; i++) {
        (function(ind) {
        setTimeout(function(){
    $('.strip span:not(".row")').eq(ind).toggleClass('animate');
    }, ind * 15);
    })(i);
}
}).click();
// h1

$('h2').click(function(){
    for (i = 0; i < $('.strip span').length; i++) {
        (function(ind) {
        setTimeout(function(){
    $('.strip span:not(".row")').eq(ind).toggleClass('animate');
    }, ind * 15);
    })(i);
}
}).click();