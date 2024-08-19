//  const logoArray = 
// [   "/images/CSHS_Logo_square_letters.webp", 
//     "/images/GWCLogo.webp",
//     "/images/image-removebg-preview.png",
//     "/images/nevadaTSALogo.webp"];
//     let logoArrayIndex = 0;
//     const imageEl = document.querySelector('#image-el');
//     const imageContainer = document.querySelector('#img-container');
//     imageContainer.addEventListener('click', function(){
//         if (logoArrayIndex === 3){
//             imageEl.src = logoArray[0];
//             logoArrayIndex = 0;
//         }
//         else {
//             logoArrayIndex++;
//             imageEl.src = logoArray[logoArrayIndex];
//         }
//     })
const left = document.getElementById("left-side");

const handleMove = e => {
  left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);
