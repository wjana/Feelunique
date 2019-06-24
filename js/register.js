$(function(){

	$("#registerBtn").css({'background':'black','color':'white'});
	$("#registerBtn").mouseover(function(){
		$("#registerBtn").css('background','#1bbc9b')
	})
	$("#registerBtn").mouseout(function(){
		$("#registerBtn").css('background','black')
	})	
	$('#checkBox').click(function(){
		if($(this).prop("checked")){
			$("#registerBtn").removeAttr("disabled");	
			$("#registerBtn").css({'background':'black','color':'white'});
			$("#registerBtn").mouseover(function(){
				$("#registerBtn").css('background','#1bbc9b')
			})
			$("#registerBtn").mouseout(function(){
				$("#registerBtn").css('background','black')
			})
		}else{
			$("#registerBtn").attr("disabled","disabled");
			$("#registerBtn").css('background','lightgrey');
			$("#registerBtn").css('color','grey');
		}
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
			  reg=/^\d{4}$/;
			  break;
			case 2:
			  reg=/^\d{6}$/;
			  break;	
			case 3:
			  reg=/^[\x21-\x7E]{6,20}$/;
			  break;
			case 4:
			  reg=/^[\x21-\x7E]{6,20}$/;
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
