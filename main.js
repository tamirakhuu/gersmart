const items = document.querySelectorAll('.reveal');

function animate(){
  items.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 80){
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', animate);
animate();

function scrollToLead(){
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}
