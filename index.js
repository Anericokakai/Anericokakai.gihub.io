const nav=document.querySelector('nav')
const ul=nav.querySelector('ul')
const openBars=nav.querySelector('.fa-bars')
const closebars=nav.querySelector('.fa-xmark')


openBars.onclick=()=>{
    ul.classList.toggle('menu')

}
closebars.onclick=()=>{
    ul.classList.toggle('menu')
}

// change the background of the home section
const homesection=document.querySelector('.homesection')


var images=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg']
var counter=0

const slider=()=>{

  if(counter<images.length){

    counter++;
  }else{
    counter=1
  }

  homesection.style.background=`linear-gradient(rgba(0, 0, 0, 0.735), rgba(0, 0, 0, 0.74)),url(./images/bgimages/${images[counter-1]})`
homesection.style.backgroundSize='cover';
homesection.style.backgroundPosition='center';
homesection.style.backgroundRepeat='no-repeat;'
}

setInterval(slider,5000)

// change the navigation to sticky on scroll


var prevoius=window.pageYOffset
window.onscroll=()=>{


  var current=window.pageYOffset

  if(prevoius>current){


    nav.style.top='0'
    document.querySelector('.image').style.backgroundColor='white'
    nav.style.transition='1s'
   
    
  }else{

    nav.style.top='-70px'
    
  }
  prevoius=current
}

// pre;loader
var preloader=document.querySelector('#preloader')

const preloaderfunction=()=>{

  preloader.style.display='none'
}
window.addEventListener('load',preloaderfunction)






// smooth scroll

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
      
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      }else{
        entry.target.classList.remove('show')
      }
    })
  })
  
  
  const hidden=document.querySelectorAll('.hidden')
  hidden.forEach(el =>{
    observer.observe(el)
  })
  

  const page=window.location
  