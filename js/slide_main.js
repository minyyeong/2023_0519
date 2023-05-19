$(function() {
    let i = 0;
    $(".hotissue > li").eq(i).css({"border-bottom":"2px solid #000"});
    $(".hotissue > li").children("a").eq(i).css({"font-weight":"bold","color":"#000"});

    $(".hotissue > li").mouseenter(function () {
        i = $(this).index()
    })



/* 스라이드,내비 동시동작 */

    function slide() {
        i++;
        if (i > $(".slide > li:last").index()) {
            i = 0;
        }
        
        $(".slide > li").eq(i).stop().fadeIn(1000);
        $(".slide > li").eq(i-1).stop().fadeOut(1000);

        if (i == 1) {
            $(".hotissue > li").eq(i-1).css({"border-bottom":"none","padding-bottom":"-10px"});
            $(".hotissue > li").eq(i-1).children("a").css({"font-weight":"500","color":"#767676"});
            $(".hotissue > li").eq(i).css({"border-bottom":"2px solid #000"});
            $(".hotissue > li").eq(i).children("a").css({"font-weight":"bold","color":"#000"});

        } else if (i == 2) {
            $(".hotissue > li").eq(i-1).css({"border-bottom":"none","padding-bottom":"-10px"});
            $(".hotissue > li").eq(i-1).children("a").css({"font-weight":"500","color":"#767676"});
            $(".hotissue > li").eq(i).css({"border-bottom":"2px solid #000"});
            $(".hotissue > li").eq(i).children("a").css({"font-weight":"bold","color":"#000"});

        } else if (i == 3) {
            $(".hotissue > li").eq(i-1).css({"border-bottom":"none","padding-bottom":"-10px"});
            $(".hotissue > li").eq(i-1).children("a").css({"font-weight":"500","color":"#767676"});
            $(".hotissue > li").eq(i).css({"border-bottom":"2px solid #000"});
            $(".hotissue > li").eq(i).children("a").css({"font-weight":"bold","color":"#000"});

        } else if (i == 4) {
            $(".hotissue > li").eq(i-1).css({"border-bottom":"none","padding-bottom":"-10px"});
            $(".hotissue > li").eq(i-1).children("a").css({"font-weight":"500","color":"#767676"});
            $(".hotissue > li").eq(i).css({"border-bottom":"2px solid #000"});
            $(".hotissue > li").eq(i).children("a").css({"font-weight":"bold","color":"#000"});

        } else if (i == 5) {
            $(".hotissue > li").eq(i-1).css({"border-bottom":"none","padding-bottom":"-10px"});
            $(".hotissue > li").eq(i-1).children("a").css({"font-weight":"500","color":"#767676"});
            $(".hotissue > li").eq(i).css({"border-bottom":"2px solid #000"});
            $(".hotissue > li").eq(i).children("a").css({"font-weight":"bold","color":"#000"});

        } else if (i == 6) {
            $(".hotissue > li").eq(i-1).css({"border-bottom":"none","padding-bottom":"-10px"});
            $(".hotissue > li").eq(i-1).children("a").css({"font-weight":"500","color":"#767676"});
            $(".hotissue > li").eq(i).css({"border-bottom":"2px solid #000"});
            $(".hotissue > li").eq(i).children("a").css({"font-weight":"bold","color":"#000"});

        } else if (i == 7) {
            $(".hotissue > li").eq(i-1).css({"border-bottom":"none","padding-bottom":"-10px"});
            $(".hotissue > li").eq(i-1).children("a").css({"font-weight":"500","color":"#767676"});
            $(".hotissue > li").eq(i).css({"border-bottom":"2px solid #000"});
            $(".hotissue > li").eq(i).children("a").css({"font-weight":"bold","color":"#000"});

        } else if (i == 8) {
            $(".hotissue > li").eq(i-1).css({"border-bottom":"none","padding-bottom":"-10px"});
            $(".hotissue > li").eq(i-1).children("a").css({"font-weight":"500","color":"#767676"});
            $(".hotissue > li").eq(i).css({"border-bottom":"2px solid #000"});
            $(".hotissue > li").eq(i).children("a").css({"font-weight":"bold","color":"#000"});

        } else {
            $(".hotissue > li").eq(i-1).css({"border-bottom":"none","padding-bottom":"-10px"});
            $(".hotissue > li").eq(i-1).children("a").css({"font-weight":"500","color":"#767676"});
            $(".hotissue > li").eq(i).css({"border-bottom":"2px solid #000"});
            $(".hotissue > li").eq(i).children("a").css({"font-weight":"bold","color":"#000"});
        }
    }




/* 마우스오버시 스라이드 변경 */

    $(".hotissue > li").eq(0).mouseenter(function () {
        $(".hotissue > li").css({"borderBottom":"none","padding-bottom":"-10px"});
        $(".hotissue > li").children().css({"font-weight":"500","color":"#767676"});
        $(this).css({"border-bottom":"2px solid #000"});
        $(this).children("a").css({"font-weight":"bold","color":"#000"});

        $(".slide > li").stop().hide();
        $(".slide > li").eq(0).stop().show();
    });


    $(".hotissue > li").eq(1).mouseenter(function () {
        $(".hotissue > li").css({"borderBottom":"none","padding-bottom":"-10px"});
        $(".hotissue > li").children("a").css({"font-weight":"500","color":"#767676"});
        $(this).css({"border-bottom":"2px solid #000"});
        $(this).children("a").css({"font-weight":"bold","color":"#000"});

        $(".slide > li").stop().hide();
        $(".slide > li").eq(1).stop().show();
    });


    $(".hotissue > li").eq(2).mouseenter(function () {
        $(".hotissue > li").css({"borderBottom":"none","padding-bottom":"-10px"});
        $(".hotissue > li").children("a").css({"font-weight":"500","color":"#767676"});
        $(this).css({"border-bottom":"2px solid #000"});
        $(this).children("a").css({"font-weight":"bold","color":"#000"});

        $(".slide > li").stop().hide();
        $(".slide > li").eq(2).stop().show();
    });


    $(".hotissue > li").eq(3).mouseenter(function () {
        $(".hotissue > li").css({"borderBottom":"none","padding-bottom":"-10px"});
        $(".hotissue > li").children("a").css({"font-weight":"500","color":"#767676"});
        $(this).css({"border-bottom":"2px solid #000"});
        $(this).children("a").css({"font-weight":"bold","color":"#000"});

        $(".slide > li").stop().hide();
        $(".slide > li").eq(3).stop().show();
    });


    $(".hotissue > li").eq(4).mouseenter(function () {
        $(".hotissue > li").css({"borderBottom":"none","padding-bottom":"-10px"});
        $(".hotissue > li").children("a").css({"font-weight":"500","color":"#767676"});
        $(this).css({"border-bottom":"2px solid #000"});
        $(this).children("a").css({"font-weight":"bold","color":"#000"});

        $(".slide > li").stop().hide();
        $(".slide > li").eq(4).stop().show();
    });


    $(".hotissue > li").eq(5).mouseenter(function () {
        $(".hotissue > li").css({"borderBottom":"none","padding-bottom":"-10px"});
        $(".hotissue > li").children("a").css({"font-weight":"500","color":"#767676"});
        $(this).css({"border-bottom":"2px solid #000"});
        $(this).children("a").css({"font-weight":"bold","color":"#000"});

        $(".slide > li").stop().hide();
        $(".slide > li").eq(5).stop().show();
    });


    $(".hotissue > li").eq(6).mouseenter(function () {
        $(".hotissue > li").css({"borderBottom":"none","padding-bottom":"-10px"});
        $(".hotissue > li").children("a").css({"font-weight":"500","color":"#767676"});
        $(this).css({"border-bottom":"2px solid #000"});
        $(this).children("a").css({"font-weight":"bold","color":"#000"});

        $(".slide > li").stop().hide();
        $(".slide > li").eq(6).stop().show();
    });


    $(".hotissue > li").eq(7).mouseenter(function () {
        $(".hotissue > li").css({"borderBottom":"none","padding-bottom":"-10px"});
        $(".hotissue > li").children("a").css({"font-weight":"500","color":"#767676"});
        $(this).css({"border-bottom":"2px solid #000"});
        $(this).children("a").css({"font-weight":"bold","color":"#000"});

        $(".slide > li").stop().hide();
        $(".slide > li").eq(7).stop().show();
    });



/* 마우스오버 일시정지/해제 */

    let ani = setInterval(slide, 4000)

    $(".hotissue > li").mouseover(function () {
        clearInterval(ani);
    });

    $(".hotissue > li").mouseout(function () {
        $("this").css({"border-bottom":"2px solid #000"});
        $("this").children("a").css({"font-weight":"bold","color":"#000"});
        ani = setInterval(slide, 4000);
    });
})

