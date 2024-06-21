$(document).ready(function () {
    function fadeLoop(){
        $('#fadeout').fadeOut(3000, function(){
            $('#fadein').fadeIn(3000, function(){
                $('#fadein').fadeOut(1000,function(){
                    $('#fadeout').fadeIn(500, fadeLoop)
                })
            })
        })
    }
    fadeLoop()
    $('.menu-toggle').click(function (){
        $('.menu').slideToggle();
          $('.more').toggleClass('active');
        //   $(this).toggleClass('cross');
        
    });
    
    $('#img1').click(function (){
        $('#detail').slideToggle();
          $('#detail').toggleClass('active');
        //   $(this).toggleClass('cross');
        
    });
});