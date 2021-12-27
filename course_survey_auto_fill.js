(()=>{
	//the value correspond to likert scale input radios' value
	let generalLikertScaleValues=[undefined, '1,5', '2,4', '3,3', '4,2', '5,1'];
	let coreLikertScaleValues=[undefined, '1,0', '2,0', '3,0', '4,0', '5,0'];
	
	function showInputError(){
		alert('輸入有誤!!');
	}
	
	//https://www.w3schools.com/howto/howto_js_element_iframe.asp  mother fucker.
	let mainDocument=document.getElementsByTagName('iframe')[0];
	// i don't know why, but sometime the web's document will change to the document in iframe.
	if(mainDocument !== undefined) mainDocument=mainDocument.contentWindow.document;
	else mainDocument=document;
	
	let inputs=mainDocument.getElementsByTagName('input');
	inputs=Array.from(inputs); //change to array, then can use array's function
	
	let radios=inputs.filter((arg)=>{ //get all radio type input
		if(arg.type === 'radio') return true;
		else return false;
	});

	let userInput=prompt('請輸入 1~5\n\n1:非常同意\n2:同意\n3:普通\n4:不同意\n5:非常不同意');
	userInput=parseInt(userInput);

	if(isNaN(userInput)){
		showInputError();
		return;
	}
	
	if(!(1 <= userInput && userInput <= 5)){
		showInputError();
		return;
	}

	//if no input error, we can proceed to do
	radios.forEach((arg)=>{
		if(arg.value === generalLikertScaleValues[userInput])
			arg.checked=true;
		
		if(arg.value === coreLikertScaleValues[userInput])
			arg.checked=true;
	});
	
	radios.forEach((arg)=>{
		//other radios' first selection value is 1,-1
		if(arg.value === '1,-1')
			arg.checked=true;
	});
	
	//a filed about sex equality is also likert scale, but we want it to be strongly agree defaultly.
	let sexEqualityRadio=mainDocument.getElementById('ctl00_ContentPlaceHolder1_RBAns13_0');
	sexEqualityRadio.checked=true;
	
	//the last, other comments or feedback, default is nope.
	let text=mainDocument.getElementsByTagName('textarea')[0];
	text.value='沒有。';
})();