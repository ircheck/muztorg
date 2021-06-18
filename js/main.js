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



})
