// JavaScript Document
$(function(){
	var j=0;
$(".food-left ul li").click(function(){
	j=$(this).index();	
	
	$(".food-img ul li").eq(j).addClass("food-first").siblings().removeClass("food-first");
	$(".food-jie ul li").eq(j).addClass("food-first1").siblings().removeClass("food-first1");
});
        	
	
	
/*视频轮播*/	
var i=0;//存放menu菜单中的li下标
var timer;
var flag=true;	
	$(".menu ul li").hover(function(){
		$(this).addClass("sp-first").siblings().removeClass("sp-first");
		clearInterval(timer);
	i=$(this).index();	
	$(".con ul li").eq(i).fadeIn(300).stop(true,true).siblings().stop(true,true).fadeOut(300);
	},function(){	ShowTime();
});	

function ShowTime(){
	 timer=setInterval(function(){
		i++;
		if(i>6)
		i=0;
		$(".con ul li").eq(i).stop(true,true).fadeIn(300).siblings().stop(true,true).fadeOut(300);
		$(".menu ul li").eq(i).addClass("sp-first").siblings().removeClass("sp-first");
		
		},3000);
  }
  ShowTime();
});
