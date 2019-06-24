$(function(){

	$("button").css({'background':'black','color':'white'});
	$("button").mouseover(function(){
		$("button").css('background','#1bbc9b')
	})
	$("button").mouseout(function(){
		$("button").css('background','black')
	})	
	
	
	$('.regInfo').blur(function(){
		var index = $('.regInfo').index(this);
		var value = $('.regInfo').eq(index).val();
		var reg;
		switch(index){
			case 0:
			  reg=/^\d{11}$/;
			  break;
			case 1:
			  reg=/^[\x21-\x7E]{6,20}$/;
			  break;
			case 2:
			  reg=/^\d{4}$/;
			  break;	
							  
		}
		checked( reg,value,index )
	})
	
	function checked( reg,value,index ){
		var resulet = reg.test( value );
		console.log(value,resulet,reg);
		if(resulet==false){
			$('.inpError').eq(index).css('display','block');
		}else{
			$('.inpError').eq(index).css('display','none');
		}
	}
	
})
