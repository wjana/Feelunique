window.onload = function(){
	//header 税费补贴下滑
	headslide();
	
	//吸顶
	suctionTop();
}


$(function(){		
	//商品数量的增加减少
	prodNum();
	function prodNum(){
		$('.minusBtn').click(function(){
			var oValue=$('.number').val();
			oValue--;
			$('.addBtn').prop('disabled',false);
			$('.addBtn').css('backgroundPosition','0 0');
			$('.minusBtn').css('backgroundPosition','-52px 0');
			if(oValue==1){
				$('.minusBtn').attr('disabled','disabled');
				$('.minusBtn').css('backgroundPosition','-78px 0');
			}
			$('.number').attr('value',oValue);
		})
		
		$('.addBtn').click(function(){
			var oValue=$('.number').val();
			oValue++;
			$('.minusBtn').prop('disabled',false);
			$('.minusBtn').css('backgroundPosition','-52px 0');
			if(oValue==5){
				$('.addBtn').attr('disabled','disabled');
				$('.addBtn').css('backgroundPosition','-26px 0');
			}
			$('.number').attr('value',oValue);
		})	
	}
	
	//放大镜效果
	magnifier();
	
	function magnifier(){
		$('#productPic').mousemove(function(event){
			$('#bigPPic').css('display','block');
			$('#glass').css('display','block');
			console.log( '鼠标',event.pageX,event.pageY );
			console.log( '偏移',$('#productPic').offset().left,$('#productPic').offset().top );
			var nowleft = Math.floor(event.pageX - $('#productPic').offset().left)-108;
			var nowtop = event.pageY - $('#productPic').offset().top-108;
			console.log( nowleft,nowtop );
			
			if(nowleft<0){
				nowleft = 0;
			}
			if(nowtop<0){
				nowtop = 0;
			}
			if(nowleft>219){
				nowleft = 219;
			}
			if(nowtop>219){
				nowtop = 219;
			}
			
			$('#glass').css({'left':nowleft,'top':nowtop})
	
			$('#bPPic').css({'left':-nowleft*2,'top':-nowtop*2})
		})
		$('#productPic').mouseout(function(){
			$('#bigPPic').css('display','none');
			$('#glass').css('display','none');
		})
		
	}
	
	//商品详情tab切页
	
	
	$('#pD').click(function(){
		$('.proDetailsBar span:not(#pD)').css({'borderColor':'white','fontWeight':'400'});
		$('#pD').css({'borderColor':'black','fontWeight':'bolder'});
		$('#bottomRight #proDetailInfo').css('display','block');
		$('#bottomRight section:not(#proDetailInfo)').css('display','none');
	})
	$('#ev').click(function(){
		$('.proDetailsBar span:not(#ev)').css({'borderColor':'white','fontWeight':'400'});
		$('#ev').css({'borderColor':'black','fontWeight':'bolder'});
		$('#bottomRight #evaluate ').css('display','block');
		$('#bottomRight section:not(#evaluate)').css('display','none');
	})
	$('#qu').click(function(){
		$('.proDetailsBar span:not(#qu)').css({'borderColor':'white','fontWeight':'400'});
		$('#qu').css({'borderColor':'black','fontWeight':'bolder'});
		$('#bottomRight #questions').css('display','block');
		$('#bottomRight section:not(#questions)').css('display','none');
	})
	
	//回到顶部
	$('#comeToTop').click(function(){
		var speed = 500;
		$('body,html').animate({scrollTop:0},speed);
		return false;
	})
	
})
