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


// smooth scroll

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
      console.log(entry)
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
  console.log(page)