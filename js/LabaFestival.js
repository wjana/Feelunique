$(function(){
	//动态创建香港包税仓商品
	for(var i = 0;i<4;i++){
		$.each(hongkong1,function(index,data){
			
			var str = `<li>
							<a class="tCPic" href="#">
								<img src="${data.src}" />
							</a>
							<div class="goodsInfo">
								<p class="gName">${data.name}</p>
								<section>
									<p class="pound">
										<span class="new">
											<i>£</i>
											<i>${data.newP}</i>
										</span>
										<span class="old">
											<i>£</i>
											<i>${data.oldP}</i>
										</span>
									</p>
									<p class="RMB">
										<span>参考价：￥</span>
										<span>${data.RMB}</span>
									</p>
								</section>
								<a href="#">立即购买</a>		
							</div>
							<div class="discount">${data.disC}</div>
						</li>`;
			var oH = $(str);
			$('#HKArea1').append( oH );
		})
	}
	for(var i = 0;i<4;i++){
		$.each(hongkong2,function(index,data){
			
			var str = `<li>
							<a class="tCPic" href="#">
								<img src="${data.src}" />
							</a>
							<div class="goodsInfo">
								<p class="gName">${data.name}</p>
								<section>
									<p class="pound">
										<span class="new">
											<i>£</i>
											<i>${data.newP}</i>
										</span>
										<span class="old">
											<i>£</i>
											<i>${data.oldP}</i>
										</span>
									</p>
									<p class="RMB">
										<span>参考价：￥</span>
										<span>${data.RMB}</span>
									</p>
								</section>
								<a href="#">立即购买</a>		
							</div>
							<div class="discount">${data.disC}</div>
						</li>`;
			var oH = $(str);
			$('#HKArea2').append( oH );
		})
	}
	
	for(var i = 0;i<4;i++){
		$.each(hongkong3,function(index,data){
			
			var str = `<li>
							<a class="tCPic" href="#">
								<img src="${data.src}" />
							</a>
							<div class="goodsInfo">
								<p class="gName">${data.name}</p>
								<section>
									<p class="pound">
										<span class="new">
											<i>£</i>
											<i>${data.newP}</i>
										</span>
										<span class="old">
											<i>£</i>
											<i>${data.oldP}</i>
										</span>
									</p>
									<p class="RMB">
										<span>参考价：￥</span>
										<span>${data.RMB}</span>
									</p>
								</section>
								<a href="#">立即购买</a>		
							</div>
							<div class="discount">${data.disC}</div>
						</li>`;
			var oH = $(str);
			$('#HKArea3').append( oH );
		})
	}
	
	for(var i = 0;i<4;i++){
		$.each(hongkong4,function(index,data){
			
			var str = `<li>
							<a class="tCPic" href="#">
								<img src="${data.src}" />
							</a>
							<div class="goodsInfo">
								<p class="gName">${data.name}</p>
								<section>
									<p class="pound">
										<span class="new">
											<i>£</i>
											<i>${data.newP}</i>
										</span>
										<span class="old">
											<i>£</i>
											<i>${data.oldP}</i>
										</span>
									</p>
									<p class="RMB">
										<span>参考价：￥</span>
										<span>${data.RMB}</span>
									</p>
								</section>
								<a href="#">立即购买</a>		
							</div>
							<div class="discount">${data.disC}</div>
						</li>`;
			var oH = $(str);
			$('#HKArea4').append( oH );
		})
	}
	
	$('#HKtab1').click(function(){
		$('#HKtab1').css('backgroundColor','#dcc295');
		$('.tabs1 li:not(#HKtab1)').css('backgroundColor','#e9d6b5');
		$('#HKArea1').css('display','block');
		$('.tabContentHK ul:not(#HKArea1)').css('display','none');
	})
	$('#HKtab2').click(function(){
		$('#HKtab2').css('backgroundColor','#dcc295');
		$('.tabs1 li:not(#HKtab2)').css('backgroundColor','#e9d6b5');
		$('#HKArea2').css('display','block');
		$('.tabContentHK ul:not(#HKArea2)').css('display','none');
	})
	$('#HKtab3').click(function(){
		$('#HKtab3').css('backgroundColor','#dcc295');
		$('.tabs1 li:not(#HKtab3)').css('backgroundColor','#e9d6b5');
		$('#HKArea3').css('display','block');
		$('.tabContentHK ul:not(#HKArea3)').css('display','none');
	})
	$('#HKtab4').click(function(){
		$('#HKtab2').css('backgroundColor','#dcc295');
		$('.tabs1 li:not(#HKtab4)').css('backgroundColor','#e9d6b5');
		$('#HKArea4').css('display','block');
		$('.tabContentHK ul:not(#HKArea4)').css('display','none');
	})
	
	//动态创建用码（FULB20）专区商品
	for(var i = 0;i<4;i++){
		$.each(fulb20,function(index,data){
			
			var str = `<li>
							<a class="tCPic" href="#">
								<img src="${data.src}" />
							</a>
							<div class="goodsInfo">
								<p class="gName">${data.name}</p>
								<section>
									<p class="pound">
										<span class="new">
											<i>£</i>
											<i>${data.pound}</i>
										</span>
									</p>
									<p class="RMB">
										<span>参考价：￥</span>
										<span>${data.RMB}</span>
									</p>
								</section>
								<a href="#">立即购买</a>		
							</div>
						</li>`;
			var oH = $(str);
			$('#FULB20').append( oH );
		})
	}
	
	//动态创建用码（FULB20）专区商品
	for(var i = 0;i<4;i++){
		$.each(fulb15,function(index,data){
			
			var str = `<li>
							<a class="tCPic" href="#">
								<img src="${data.src}" />
							</a>
							<div class="goodsInfo">
								<p class="gName">${data.name}</p>
								<section>
									<p class="pound">
										<span class="new">
											<i>£</i>
											<i>${data.pound}</i>
										</span>
									</p>
									<p class="RMB">
										<span>参考价：￥</span>
										<span>${data.RMB}</span>
									</p>
								</section>
								<a href="#">立即购买</a>		
							</div>
						</li>`;
			var oH = $(str);
			$('#FULB15').append( oH );
		})
	}
	
	//动态创建买三免一专区商品
	for(var i = 0;i<4;i++){
		$.each(buyT,function(index,data){
			
			var str = `<li>
							<a class="tCPic" href="#">
								<img src="${data.src}" />
							</a>
							<div class="goodsInfo">
								<div class="tag">
									<span>买三免一</span>
								</div>
								<p class="gName">${data.name}</p>
								<section>
									<p class="pound">
										<span class="new">
											<i>£</i>
											<i>${data.pound}</i>
										</span>
									</p>
									<p class="RMB">
										<span>参考价：￥</span>
										<span>${data.RMB}</span>
									</p>
								</section>
								<a href="#">立即购买</a>		
							</div>
						</li>`;
			var oH = $(str);
			$('#buyThree').append( oH );
		})
	}
	
	//动态创建买二75折专区商品
	for(var i = 0;i<4;i++){
		$.each(buyTwo,function(index,data){
			
			var str = `<li>
							<a class="tCPic" href="#">
								<img src="${data.src}" />
							</a>
							<div class="goodsInfo">
								<div class="tag">
									<span>2件75折</span>
								</div>
								<p class="gName">${data.name}</p>
								<section>
									<p class="pound">
										<span class="new">
											<i>£</i>
											<i>${data.pound}</i>
										</span>
									</p>
									<p class="RMB">
										<span>参考价：￥</span>
										<span>${data.RMB}</span>
									</p>
								</section>
								<a href="#">立即购买</a>		
							</div>
						</li>`;
			var oH = $(str);
			$('#buyTwo').append( oH );
		})
	}
	
	//动态创建Winter Sale专区商品
	for(var i = 0;i<4;i++){
		$.each(winter,function(index,data){
			
			var str = `<li>
							<a class="tCPic" href="#">
								<img src="${data.src}" />
							</a>
							<div class="goodsInfo">
								<p class="gName">${data.name}</p>
								<section>
									<p class="pound">
										<span class="new">
											<i>£</i>
											<i>${data.newP}</i>
										</span>
										<span class="old">
											<i>£</i>
											<i>${data.oldP}</i>
										</span>
									</p>
									<p class="RMB">
										<span>参考价：￥</span>
										<span>${data.RMB}</span>
									</p>
								</section>
								<a href="#">立即购买</a>		
							</div>
							<div class="discount">${data.disC}</div>
						</li>`;
			var oH = $(str);
			$('#WinterSale').append( oH );
		})
	}
	
	//侧边栏
	$(window).scroll(function(){
		if($(document).scrollTop()>600){
			$('#sideBar').css('display','block');
		}
		else{
			$('#sideBar').css('display','none');
		}
	})
	
	
	
	//回到顶部
	$('#comeToTop').click(function(){
		var speed = 500;
		$('body,html').animate({scrollTop:0},speed);
		return false;
	})
	
	$(window).scroll(function(){
		if($(document).scrollTop()<=700){
			$('#xinrenBtn').css('background','#dcc295');
			$('#sideBtns a:not(#xinrenBtn)').css('background','#E9D6B5');
		}
		if($(document).scrollTop()>700 && $(document).scrollTop()<=1100){
			$('#jingxuanBtn').css('background','#dcc295');
			$('#sideBtns a:not(#jingxuanBtn)').css('background','#E9D6B5');
		}
		if($(document).scrollTop()>1100 && $(document).scrollTop()<=2100){
			$('#HKBtn').css('background','#dcc295');
			$('#sideBtns a:not(#HKBtn)').css('background','#E9D6B5');
		}
		if($(document).scrollTop()>2100 && $(document).scrollTop()<=3100){
			$('#d8Btn').css('background','#dcc295');
			$('#sideBtns a:not(#d8Btn)').css('background','#E9D6B5');
		}
		if($(document).scrollTop()>3100 && $(document).scrollTop()<=4000){
			$('#d85Btn').css('background','#dcc295');
			$('#sideBtns a:not(#d85Btn)').css('background','#E9D6B5');
		}
		if($(document).scrollTop()>4000 && $(document).scrollTop()<=4900){
			$('#bTBtn').css('background','#dcc295');
			$('#sideBtns a:not(#bTBtn)').css('background','#E9D6B5');
		}
		if($(document).scrollTop()>4900 && $(document).scrollTop()<=5900){
			$('#bTwoBtn').css('background','#dcc295');
			$('#sideBtns a:not(#bTwoBtn)').css('background','#E9D6B5');
		}
		if($(document).scrollTop()>5900){
			$('#WSBtn').css('background','#dcc295');
			$('#sideBtns a:not(#WSBtn)').css('background','#E9D6B5');
		}
		
	})
		console.log($(document).scrollTop())
})


