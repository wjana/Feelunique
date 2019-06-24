
window.onload = function(){
	//header 税费补贴下滑
	headslide();

	//吸顶
	suctionTop();	

	//首页大图轮播
	var oPicBtn = document.getElementsByClassName('picBtn');
	var oBigPic = document.getElementsByClassName('bigPic');
	var oBefore = document.getElementById('before');
	var oNext = document.getElementById('next');
	console.log(oPicBtn);
	
	slider();
	function slider(){
		
		inter();
		
		var iNow = 0;
		var timer;
		
		for(var i = 0;i<oPicBtn.length;i++){
			console.log(i);
			bind(i);
		}
		
		function bind(index){
			oPicBtn[index].onclick = function(){
				clearInterval(timer);
				iNow = index;
				console.log('dianji'+index);
				changePic(index);
				inter();	//清掉定时器，所点击的图片停留久一点，然后再调用定时器
			}
		}
		
		function changePic(index){
			for(var j = 0;j<oBigPic.length;j++){
				oBigPic[j].style.opacity = 0;
				oPicBtn[j].style.background = '#C7C7C7';
				if(j==index){
					oBigPic[index].style.opacity = 1;
					oPicBtn[index].style.background = 'black';
				}
			}
		}
		//定时器
		function inter( ){
	//		var iNow = 0;	//显示第0张图
			timer = setInterval(function(){
				iNow++;
				if(iNow>oBigPic.length-1){
					iNow = 0;
				}
				console.log('zidong'+iNow);
				changePic(iNow);
			},2000)
		}
		//向前跳转
		oBefore.onclick = function(){
			clearInterval(timer);
			iNow--;
			if(iNow<0){
				iNow = oBigPic.length-1;
			}
			console.log('前'+iNow);
			changePic(iNow);
			inter();
		}
		//向后跳转
		oNext.onclick = function(){
			clearInterval(timer);
			iNow++;
			if(iNow>oBigPic.length-1){
				iNow = 0;
				
			}
			console.log('后'+iNow);
			changePic(iNow);
			inter();
		}
	}
	
}

$(function(){
	//动态创建品牌标志
	for(var i = 0;i<3;i++){
		$.each(logos,function(index,logo){
			var str = `<li class="i"><a href="#"><img src="${logo.src}"/></a></li>`;
//			console.log( str );
			var oH1 = $(str);
			$('#logoUl').append( oH1 );
		})
	}
	console.log($('.i'))
	
	
	//品牌标志水平轮播
	var iNow = 0;
	$('.logoBefore').attr("disabled","disabled");
	//向前跳转
	$('.logoBefore').click(function(){
		iNow--;	
		if(iNow==0){
			$(".logoBefore").attr("disabled","disabled");
			$(".logoNext").removeAttr("disabled");
		}
		console.log('前'+iNow);
		changePic(iNow);
	})
	//向后跳转
	$('.logoNext').click(function(){
		iNow++;
		$(".logoBefore").removeAttr("disabled");
		if(iNow==1){
			$(".logoNext").attr("disabled","disabled");
		}
		
		console.log('后'+iNow);
		changePic(iNow);		
	})
	function changePic(){
		var nowLeft = -iNow*1085+'px';
		console.log( nowLeft );
		$('#logoUl').css('left',nowLeft);
	}
})	

$(function(){
	//动态创建商品推荐
	for(var i = 0;i<10;i++){
		$.each(goods,function(index,data){
//			console.log( data );
			
			var str = `<li class="product">
							<a class="thumb" href="#">
								<img src="${data.src}" />
							</a>
							<h2 class="productDesc">
								<a href="#">
									${data.inf}
								</a>
								<img src="img/index/productPlace1.png" />
							</h2>
							<span class="originalPrice">${data.oPrice}</span>
							<br />
							<span class="salePrice">
								<span class="currsign">£</span>
								<span class="integers">${data.int}</span>
								<span class="decimals">${data.dec}</span>
							</span>
							<span class="lessDiscount">
								<p class="discount">${data.discount}</p>
							</span>
							<button>BUY</button>
						</li>`;
//			console.log( str );
			var oH = $(str);
			$('#displayBar').append( oH );
		})
	}
	
	//超值推荐水平轮播
	var iNow = 0;
	$('#viewLeft').css('display','none');
	//向前跳转
	$('#viewLeft').click(function(){
		iNow--;	
		if(iNow == 0){
			$('#viewLeft').css('display','none');
		}
		$('#viewRight').css('display','block');
		console.log('前'+iNow);
		changePic(iNow);
	})
	//向后跳转
	$('#viewRight').click(function(){
		iNow++;
		$('#viewLeft').css('display','block');
		if(iNow==2){
			$('#viewRight').css('display','none');
		}
		console.log('后'+iNow);
		changePic(iNow);
	})
	function changePic(){
		var nowLeft = -iNow*1170+'px';
		console.log( nowLeft );
		$('#displayBar').css('left',nowLeft);
	}
	
	
	//侧边栏微信二维码
	$(window).scroll(function(){
		if($(document).scrollTop()>350){
			$('#sideWeixinQR').css('opacity',1);
		}
		else{
			$('#sideWeixinQR').css('opacity',0);
		}
	})
	
	//回到顶部
	$('#comeToTop').click(function(){
		var speed = 500;
		$('body,html').animate({scrollTop:0},speed);
		return false;
	})
	
//	var oH = document.getElementById('h');
//		var oM = document.getElementById('m');
//		var oS = document.getElementById('s');
//		setInterval(function(){
//			var now = new Date();
//			oH.innerHTML = now.getHours();
//			oM.innerHTML = now.getMinutes();
//			oS.innerHTML = now.getSeconds();
//			console.log(now.getHours(),now.getMinutes(),now.getSeconds())
//		},1000)
	
})
