
	//	税费补贴下滑
	function headslide(){
	
		var oTaxation = document.getElementsByClassName('taxation')[0];
		oTaxation.onclick = function(){
			var oFold = document.getElementsByClassName('fold')[0];
			console.log(oFold.style.height);
			if(oFold.style.height != '179px'){
	//			console.log('1')
				oFold.style.height = '179px';
				oFold.style.transition = 'height .5s linear 0s';
			}
			else{
	//			console.log('2')
				oFold.style.height = '0px';
				oFold.style.transition = 'height .5s linear 0s';
			}
		}
	}


	//吸顶效果
function suctionTop(){
	document.onscroll = function(){
		var oNav = document.getElementById('ceilingHead');
//		var navTop = oNav.offsetTop;
//		console.log(navTop)
		
		var scrollTop = document.documentElement.scrollTop;
		if(scrollTop>=260){
			oNav.style.top = 0;
			oNav.style.zIndex = 100;
		}
		else{
				oNav.style.top = '-60px';
				oNav.style.left = 0;
				oNav.style.zIndex = 1;
		}
	}
}