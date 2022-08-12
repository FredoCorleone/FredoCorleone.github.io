const iconoMenu = document.querySelector('#icono-menu'),
	menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
	
	menu.classList.toggle('active');
	document.body.classList.toggle('opacity');
})
function mostrar() {
	document.getElementById('btn2').style.display = 'block';
	document.getElementById('grid2').style.display = 'block';
	document.getElementById('grid4').style.display = 'block';
}
function mostrar2() {
	document.getElementById('btn3').style.display = 'block';
	document.getElementById('grid2').style.display = 'block';
	document.getElementById('grid4').style.display = 'block';
	document.getElementById('grid1').style.display = 'block';
	document.getElementById('grid5').style.display = 'block';
}
function ocultar() {
	document.getElementById('btn1').style.display = 'block';
	document.getElementById('btn2').style.display = 'none';
	document.getElementById('btn3').style.display = 'none';
	document.getElementById('grid2').style.display = 'none';
	document.getElementById('grid4').style.display = 'none';
	document.getElementById('grid1').style.display = 'none';
	document.getElementById('grid5').style.display = 'none';
}

