        $(function(){
            $(".header_top > .fa-regular").click(function(){
                $(".header_top").slideUp();
                $("header").css({height:208});
            });
        });

        $(function(){
            $(".middle_nav_brand > h3 > a").click(function(){
                $(".brand_ex").slideToggle();
            });
        });

        /*nav*/
        $(function(){
            $(".nav_1_cg").click(function(){
                $(".allct").slideToggle(500);
            });
        });

        /* 햄버거바 */
        $(function(){
            $(".ct1_1 > ul > li > a").click(function(){
                $(".ct1_1 > ul > li > a").css({"color":"#595959","font-weight":"500"});
                $(this).css({"color":"#4951A3","font-weight":"700"});
            });

            $(".ct1_1_1").eq(1).hide();
            $(".ct1_1_1").eq(2).hide();
            $(".ct1_1_1").eq(3).hide();

            $(".ct1_1 > ul > li > a").eq(0).click(function(){
                $(".ct1_1_1").stop().hide();
                $(".ct1_1_1").eq(0).show();
            });

            $(".ct1_1 > ul > li > a").eq(1).click(function(){
                $(".ct1_1_1").stop().hide();
                $(".ct1_1_1").eq(1).show();
                $(".ct1_1_1").eq(1).css({"marginTop":"-56px"});
            });

            $(".ct1_1 > ul > li > a").eq(2).click(function(){
                $(".ct1_1_1").stop().hide();
                $(".ct1_1_1").eq(2).show();
                $(".ct1_1_1").eq(2).css({"marginTop":"-98px"});
            });

            $(".ct1_1 > ul > li > a").eq(3).click(function(){
                $(".ct1_1_1").stop().hide();
                $(".ct1_1_1").eq(3).show();
                $(".ct1_1_1").eq(3).css({"marginTop":"-140px"});
            });
        });