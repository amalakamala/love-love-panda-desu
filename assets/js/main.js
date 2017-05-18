var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var lugar = document.getElementsByClassName('imagenes-varias')[0];


pictures.forEach(function(f){
	var img = document.createElement('img') // <img/>
	img.setAttribute("src",f);
	img.setAttribute("class","los-pandas");
	lugar.appendChild(img);	
})


