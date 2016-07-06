// JavaScript Document
$(function(){
	$(".mainnav-list ul li").click(function(){
		//获取序列号
		var index=$(this).index();
		//获取浏览器高度
		//var _height=$(window).height()-110;
		//animate()动画
		if(index==0)
		{$(".con").animate({top:-300*index+80},500)	}
		else{$(".con").animate({top:-300*index},500)}	
	});
});