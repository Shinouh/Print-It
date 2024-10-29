const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0
showSlides()
showDots()

function showDots (){

	const dots = document.querySelector (".dots")
	dots.innerHTML=""
	for (let i = 0;i<=3;i++){
		const dot = document.createElement ("div")
		dot.classList.add ("dot")
		if (i===index)
		{
			dot.classList.add ("dot_selected")
		}
		dots.append (dot)
	}
}

const arrowLeft = document.querySelector ("#arrow_left")
arrowLeft.addEventListener ("click", function(){
	if (index===0){
		index=3
	} else {
		index--
	}
	
	showSlides()
	showDots()
})

const arrowRight = document.querySelector ("#arrow_right")
arrowRight.addEventListener ("click", function(){
	if (index===3){
		index=0
	} else {
		index++
	}
	showSlides()
	showDots()
})

function showSlides (){
	const currentSlides = slides[index]
	const bannerImg = document.querySelector (".banner-img")
	bannerImg.src = "./assets/images/slideshow/"+currentSlides.image
	const bannerText = document.querySelector ("#banner p")
	bannerText.innerHTML = currentSlides.tagLine
}