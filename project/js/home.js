// JavaScript Document
/*标题栏鼠标移动显示子导航*/
$(function(){
	var imge=document.getElementsByClassName("t");
$(".logbox ul li").hover(function(){//添加hover事件
	//当然对象（移动到谁的上面就是谁） find()查找对象
	$(this).find("div").show();
	$(this).find(".t").attr("src","images/tt.png");
},function(){
	$(this).find("div").hide();
	$(".t").attr("src","images/t.png");
})

/*轮播图*/
var i=0;
var timer;

	$(".ig").eq(0).show().siblings().hide();	
	ShowTime()
	$(".tab").hover(function(){
		i=$(this).index();
		Show();
		clearInterval(timer);//清除轮播
	},function(){
		ShowTime();
	});	
	//前一个
	$(".btn-l").click(function(){
		clearInterval(timer);//清除轮播
		if(i==0) i=4;	
		i--;	
		Show();	
		ShowTime();
	});
	//下一个
	$(".btn-r").click(function(){
		clearInterval(timer);//清除轮播
		i++;
		if(i==4) i=0;		
		Show();	
		ShowTime();
		//先显示图片在轮播
	});
	
	$(".banner").hover(function(){$(".btn").show()},function(){
		$(".btn").hide();
	});
	
	function Show()
	{
		$(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
		$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
	}

	function ShowTime(){
		timer=setInterval(function(){
			i++;
			if(i==4) i=0;
			Show();
	    },4000);	
	}
/*专题-博览会*/
	$(".b1").click(function(){//添加点击事件
	$(".bolan").hide();
	$(".gk").show();
	});
	$(".b2").click(function(){
	$(".bolan").hide();
	$(".zz").show();
	});
	$(".b3").click(function(){
	$(".bolan").hide();
	$(".fc").show();
	});
});