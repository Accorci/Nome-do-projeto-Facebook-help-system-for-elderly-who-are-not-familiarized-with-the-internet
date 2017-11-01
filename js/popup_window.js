document.getElementById("botao1").addEventListener("click", abrePopup1);

function abrePopup1(){
	window.close('../index.html')
    window.open ('../html/glossario.html', '_blank', 'location=yes,height=1000,width=410,scrollbars=no,status=yes,screenX=1000');
}

document.getElementById("botao").addEventListener("click", abrePopup);

function abrePopup(){
	window.close('../index.html')
    window.open ('../html/tutorial.html', '_blank', 'location=yes,height=1000,width=410,scrollbars=no,status=yes,screenX=1000');
}