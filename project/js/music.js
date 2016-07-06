// JavaScript Document
$(function(){
	var i=0;
	var flag=true;
	
	var gm=["沙湖情歌","宁夏川","唱开花儿等你来"];
	var na= ["张也","布衣乐队","程尚霖、李晶晶"];
	var imgs=["1","2","3"];
	var myMusic=document.getElementsByClassName("music")[0];
	var m_con=document.getElementsByClassName("m_con")[0];
	var txt=[];
	for(var n=0;n<3;n++)
	{
		txt[n]=document.getElementsByClassName("lrc")[n];
	}
	
	//获取歌词
	var lrcArr=txt[0].value.split("[");//去除歌词前[
	var html='';//存放p标签
	for(var m=0;m<lrcArr.length;m++)
	{
		var arr=lrcArr[m].split("]");//去除右边的]
		var time=arr[0].split(".");//去除.
		var timer=time[0].split(":");
		var text=arr[1];
		var ms=timer[0]*60+timer[1]*1;//将时间转换为秒钟
		if(text)
		{
			html+="<p id="+ms+">"+text+"</p>";
		}
		m_con.innerHTML=html;//将html添加
	}
	
	$(".begin").click(function(){
		
		if(flag)
		{
			$(".music").get(0).play();
			flag=false;
			$(".jd").addClass("zq");
			$(".start").addClass("bq");
			$(this).attr("src","music/pause.png");		
		}
		else
		{
			$(".music").get(0).pause();
			flag=true;
			$(".jd").removeClass("zq");
			$(".start").removeClass("bq");
			$(this).attr("src","music/playmusic.png");
		}		
	});
	
	$(".next").click(function(){
		i++;
		if(i>gm.length-1) i=0;
		$(".music").attr("src","music/"+gm[i]+".mp3");
		$(".music").get(0).play();
		$(".begin").attr("src","music/pause.png");
		flag=false;
		$(".singname").text(gm[i]);
		//document.getElementsByClassName("singname")[0].innerHTML=gm[i];
		$(".name").text(na[i]);
		$(".start").attr("src","music/"+imgs[i]+".png");
		//获取歌词
		var lrc=txt[i].value;
		var lrcArr=lrc.split("[");//去除歌词前[
		
		var html='';//存放p标签
		for(var j=0;j<lrcArr.length;j++)
		{
			var arr=lrcArr[j].split("]");//去除右边的]
			var time=arr[0].split(".");//去除.
			var timer=time[0].split(":");
			var text=arr[1];
			var ms=timer[0]*60+timer[1]*1;//将时间转换为秒钟
			if(text)
			{
				html+="<p id="+ms+">"+text+"</p>";
			}
			m_con.innerHTML=html;//将html添加
		}
	});
	
	
	//歌词同步，需要js监听机制，监听歌曲播放时间进度
	myMusic.addEventListener("timeupdate",function(){//当歌曲播放时间发生改变的时候，触发事件
	var newTime=parseInt(this.currentTime);//获取当前的时间
	//如果当前时间和p标签id相等的时候，就改变对应p标签里面歌词的颜色
	if(document.getElementById(""+newTime))
	{
		document.getElementById(""+newTime).style.color="red";
	}
	});
	//当歌曲播放完成之后  按钮停止转动
	myMusic.addEventListener("ended",function(){
			$(".jd").removeClass("zq");
			$(".start").removeClass("bq");
		});	
});