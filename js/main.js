(function(){

    var count = 0;
    var sec = $('.box-time span').text();

    function increase_scrore() {
        var scrore = count+=5;
        $(".scrore").html("<span>" + scrore + "</span>")
        if(scrore == 100){
            $('.main-img').fadeOut(100);
            // $('.box-time span').text(0);
            clearInterval(timer);
            setTimeout(function(){
                alert('100 điểm, bạn đã thắng!!');
            },500)
        }
    }

    var timer = setInterval(function() { 
    $('.box-time span').text(--sec);
        if (sec == 0) {
            $('.main-img').fadeOut(100);
            clearInterval(timer);
            setTimeout(function(){
                alert('hết thời gian, rất tiếc bạn đã thua !!');
            },500)
        } 
    }, 210);

    $('.acne-small').on('click',function(e){
        var offset = $(this).offset();
        var curX = e.pageX;
        var curY = e.pageY;
        if( curX > offset.left && curY > offset.top){
            $(this).hide();
            increase_scrore();
        }   
    })
   
    $('.acne-big').on('click',function(){

        var life = $(this).attr('data-life');
        var max_life = $(this).attr('data-max');
        var _radio  = 1/max_life;

        $(this).attr('data-life', life - 1); 
        

        //  Ti le scale 
        var _scale = (life - 1)*_radio;
        $(this).css({'transform':'scale(' + _scale + ')'});
        increase_scrore();
        // console.log(_radio);
        // console.log(_life);

        // if(_life == 1 ){
        //     console.log('abcd');
        //     $(this).addClass('asjdhkjasdhk');
        // }
       
         
        // if($(this).attr('data-life')){
        //     $(this).css({'transform':'scale(0.5)'})
        //     $(this).attr('data-life', '1');
        //     console.log($(this).attr('data-life'));
        // } else if($(this).attr('data-life') === '1' ){
        //     console.log('abcd');
        //     $(this).addClass('asjdhkjasdhk');
        // }
       
    })
    

})()