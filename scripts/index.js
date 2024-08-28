const aboutUsSection = document.getElementById('about-clubs');
const clubCards = document.getElementsByClassName('club-card');
// slider logic
const left = document.getElementById("left-side");

const handleMove = e => {
  left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);

aboutUsSection.addEventListener('mouseover', function(event){
  if (event.target.classList.contains('club-card') || event.target.classList.contains('club-content')){
    aboutUsSection.style.backgroundColor = 'red';
  }
})
aboutUsSection.addEventListener('mouseout', function(event){
  if (event.target.classList.contains('club-card')){
    aboutUsSection.style.backgroundColor = '#CAF0F8'
  }
})
