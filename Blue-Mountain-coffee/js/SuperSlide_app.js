 $(document).ready(function(){

	jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true,delayTime:800,effect:"leftLoop"});
	/*首页幻灯片*/
	
	jQuery(".index_case_list").slide({ mainCell:".slide",effect:"leftLoop",autoPlay:true });
	/*首页产品滚动*/
	
	/*card内页线的效果*/ 
	
	$(".card_list ul li").hover(function(){
        $(this).addClass("hover").find(".line-in").stop().animate({left : 0}, 300)
    }, function(){
        var _this = $(this)
        _this.removeClass("hover").find(".line-in").stop().animate({left : 240}, 300, function(){
            _this.find(".line-in").css("left", -240)
        })
    })
	/*案例 线的效果*/ 
	
	jQuery(".page_del_list").hover(function(){ jQuery(this).find(".prev,.next").fadeTo("show",0.2) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
		jQuery(".page_del_list").slide({ mainCell:".bd ul",effect:"fold", autoPlay:true, delayTime:600, trigger:"click"});
	//产品详情页图片切换
	
	
	/*在线客服*/
$(document).ready(function(){
	$(".side ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"124px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#31659c"})	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"54px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#000"})	
	});
	
});

	
	
	
	
	

	});
	
	//回到顶部
function goTop(){
	$('html,body').animate({'scrollTop':0},600); //滚回顶部的时间，越小滚的速度越快~
}
	