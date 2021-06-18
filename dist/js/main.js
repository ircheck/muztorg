$(document).ready(function(){

    $(document).on("click",'.add-to-fav',function(){
        if ($(this).hasClass('active'))
        {
            $(this).removeClass('active');
            $(this).attr('title', 'Добавить в избранное');
        }
        else
        {
            $(this).addClass('active');
            $(this).attr('title', 'Убрать из избранного');
        }
    });

    $(document).on("click",'.product-buy',function(){
        if ($(this).hasClass('btn-orange'))
        {
            $(this).removeClass('btn-orange');
            $(this).addClass('btn-navy');
            $(this).find('span').text('В корзине');
        }
        else
        {
            $(this).removeClass('btn-navy');
            $(this).addClass('btn-orange');
            $(this).find('span').text('В корзину');
        }
        return false;
    });


    $(document).on("click",'.product-add-bonus-place .fa',function(){
        var popup_id = $('.popup-add-bonus-place');
        $(popup_id).show();
        $('.overlay_popup').show();
    })
    $(document).on("click",'.overlay_popup',function(){
        $('.overlay_popup, .popup').hide();
    })

    $(document).on("click",'.product-existence .fa',function(){
        var popup_id = $('.popup-add-bonus-place');
        $(popup_id).show();
        $('.overlay_popup').show();
    })
    $(document).on("click",'.overlay_popup',function(){
        $('.overlay_popup, .popup').hide();
    })



})