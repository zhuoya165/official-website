$(document).ready(function(){
	
	jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true,delayTime:500,effect:"fold"});
	jQuery(".slideBox").hover(function(){ jQuery(this).find(".prev,.next").fadeTo("show",0.7) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
	/*首页幻灯片*/
	
	
		jQuery(".campaign").hover(function(){ jQuery(this).find(".prev,.next").fadeTo("show",0.2) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
		jQuery(".campaign").slide({ mainCell:".bd ul",effect:"fold", autoPlay:true, delayTime:300, trigger:"click"});
	//campaign首页形象图片切换
	   
	
	jQuery(".sideMen").slide({titCell:"h3 i",targetCell:".sideMen_cont",trigger:"click"});
	/*常见问题*/
	
	jQuery(".products_select").slide({type:"menu",titCell:".products_cot_2",targetCell:".hide",effect:"slideDown",delayTime:300,triggerTime:0,defaultPlay:false,returnDefault:true});
	/*产品筛选*/
	
	jQuery(".products_list").slide({type:"menu",titCell:".pic",targetCell:".pic_b",delayTime:300,triggerTime:0,defaultPlay:false,returnDefault:true});
	/*产品大图*/
	
	jQuery(".classify").slide({titCell:"ul li span",targetCell:".child",defaultPlay:false,effect:"slideDown",trigger:"click"});
	/*侧导航*/
	
	jQuery(".pic_list").slide({mainCell:".pic_list_content ul",autoPage:true,effect:"leftLoop",scroll:4,vis:4});
	/*产品详细小图切换*/
	
	jQuery(".products_detail_right").add(".detail").add(".history").add(".honor").slide();
	/*产品信息*//*产品详细*//*发展历程*//*资质荣誉*/
	
	jQuery(".index_case_list").slide({ titCell:".tab-hd li", mainCell:".tab-bd",delayTime:0 });
	/*首页产品切换*/
	
	
	 jQuery(".focusBox222").slide({ mainCell:".pic",effect:"left", autoPlay:true, delayTime:300});
	 /*终端形象内页切换*/




/*在线客服*/
$(document).ready(function(){
	$(".side ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"124px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#ae1c1c"})	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"54px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#000"})	
	});
	
});

/*在线客服*/


<!--内页导航栏滑动顶部固定-->
 $.fn.fixedDiv = function (actCls) {
        var pos = 0,
            that = $(this),
            topVal;

        if (that.length > 0) {
            topVal = that.offset().top;
        }

        function fix() {
            pos = $(document).scrollTop();

            if (pos > topVal) {
                that.addClass(actCls);
                if (!window.XMLHttpRequest) {
                    that.css({
                        position: 'absolute',
                        top: pos
                    });
                }
            } else {
                that.removeClass(actCls);
                if (!window.XMLHttpRequest) {
                    that.css({
                        position: 'static',
                        top: 'auto'
                    });
                }

            }
        }
        fix();

        $(window).scroll(fix);
    }

    $('#ny_nav').fixedDiv('fix-div');
<!--内页导航栏滑动顶部固定-->	
									
						
	$(function() {
    var num = 0;
    function goLeft() {
        //676是根据你给的尺寸，可变的num=img宽度*个数/2 - 一个img宽度
        if (num == -676) {
            num = 0;
        }
        num -= 1;
        $(".scroll").css({
            left: num
        })
    }
    //设置滚动速度
    var timer = setInterval(goLeft, 20);
    //设置鼠标经过时滚动停止
    $(".pro_b").hover(function() {
        clearInterval(timer);
    },
    function() {
        timer = setInterval(goLeft, 20);
    })
});
   /*首页新闻*/

	});
	
	
	//回到顶部
function goTop(){
	$('html,body').animate({'scrollTop':0},600); //滚回顶部的时间，越小滚的速度越快~
}
