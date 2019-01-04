/*slider */
let slides = document.getElementsByClassName('slide');
let left = document.getElementById('left');
let right = document.getElementById('right');
let currentIndex = 0;

function slideChanger(index) {

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
    slides[currentIndex].classList.add('comingSlide')
}
slideChanger(currentIndex);
/*arrows*/
right.onclick = function () {
    if(currentIndex == slides.length - 1){
        currentIndex = 0
    }else{
        currentIndex++;
    }
    
    slideChanger(currentIndex);
}

left.onclick = function () {
    if(currentIndex == 0){
        currentIndex = slides.length -1;
    }else{
        currentIndex--;
    }
  
    slideChanger(currentIndex)
}


 
 
 

