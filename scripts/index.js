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
    console.log("fired")
    switch (event.target.id) {
      case "cshs":
        aboutUsSection.style.background = "linear-gradient(45deg in lch, #62C6FE, #1666A8)";
        break;
      case "gwc":
        aboutUsSection.style.background = "linear-gradient(-45deg in lch, #0ca096, #FF69B4)";
        break;
      case "skillsusa":
        // #DF0B13
        aboutUsSection.style.background = "linear-gradient(-45deg in lch, #DF0B13, #104481)";
        break;
      case "tsa":
        // #F12F23
        aboutUsSection.style.background = "linear-gradient(45deg in lch, #F12F23, #005FAC, #FEFEFF)";
        break;
    }
  }
  else {
    aboutUsSection.style.background = '#CAF0F8';
  }
})
