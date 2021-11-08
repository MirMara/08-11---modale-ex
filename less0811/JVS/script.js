//---------modale -------//

const modal = document.querySelector(".modal");
const subBtn = document.querySelector("#btn-sub");
const nosubBtn = document.querySelector("#btn-nosub");


    setTimeout (() => {
      modal.style.zIndex= 1;
      modal.style.opacity= 1;
    }, 10000);
  
    function hideModal() {
        modal.style.opacity = 0;
  
    setTimeout (() => {
    document.body.removeChild(modal);
    }, 350);
    }

  function redirectToGoogle() {
    window.location.href = "http://google.com";
  }

  subBtn.addEventListener("click", hideModal, { once: true });
  nosubBtn.addEventListener("click", redirectToGoogle, { once: true });


//-----------------------//

const photos = document.querySelector(".image");

const myPics = photos.firstElementChild;

const FirstButton = document.querySelector(".First-btn");

const h1Element = document.querySelector("h1");
const h1Rename1stB = document.querySelector(".First-btn");



h1Rename1stB.addEventListener("click", () => {
    h1Element.textContent = testo;
}, {once: true }
); 




function addLi () {
    const lista = document.getElementById("lista");
       listNode = document.getElementById("list");
       liNode = document.createElement("li");
       textNode = document.createTextNode("Hey there!");
       
       liNode.appendChild(textNode);
       listNode.appendChild (liNode);
}

  

  
  