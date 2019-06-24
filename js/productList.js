window.onload = function(){
	//header 税费补贴下滑
	headslide();
	
	//吸顶
	suctionTop();
}

$(function(){	
	
	//动态创建商品列表
	for(var i = 0;i<10;i++){
		$.each(list,function(index,data){
//			console.log( data );
			
			var str = `<a href="commodityDetails.html" target="_blank">
							<li class="sflist1">
								<div class="sflist2">
									<img src="${data.src}" />
									<div id="price">
										<p>
											<span>£</span>
											<span>${data.pri}</span>
										</p>
										<p id="refPrice">${data.rePri}</p>
									</div>
									<p>${data.name}</p>
									<p id="cang">${data.cangku}</p>
									<div id="addCar">
										<div id="addCarBtn">加入购物车</div>
									</div>
								</div>
							</li>
						</a>`;
//			console.log( str );
			var oP = $(str);
			$('#sflist').append( oP );
		})
	}
	
	//回到顶部
	$('#comeToTop').click(function(){
		var speed = 500;
		$('body,html').animate({scrollTop:0},speed);
		return false;
	})
	
})