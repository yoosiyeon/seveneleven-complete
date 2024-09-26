$(function(){
    /* $(".pager a:eq(0)").click(function(){
        $(".mask ul").animate({left: 0})
    })

    $(".pager a:eq(1)").click(function(){
        $(".mask ul").animate({left: -800})
    })

    $(".pager a:eq(2)").click(function(){
        $(".mask ul").animate({left: -1600})
    }) */



    const img_width = $(".mask img").width();
    const cont_let = $(".mask li").length;

    $(".mask ul").width(img_width * cont_let);
    $(".mask").width(img_width);
    // console.log(img_width)



    /* $(".pager a:eq(0)").click(function(){
        $(".mask ul").animate({left: img_width * 0})
    })

    $(".pager a:eq(1)").click(function(){
        $(".mask ul").animate({left: -img_width * 1})
    })

    $(".pager a:eq(2)").click(function(){
        $(".mask ul").animate({left: -img_width * 2})
    }) */

    $(".pager a").click(function(){
        const idx = $(this).index();
        // console.log(idx);
        $(".mask ul").animate({left: -img_width * idx})
    })

})