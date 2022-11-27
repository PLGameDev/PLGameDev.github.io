/* -------------------- CONTACT ME BUTTON ------------------------- */
class Modal{
  constructor(){
    this.popup = document.querySelector(".js-popup");
    this.popupBackground = document.getElementById("popup-background");
    this.contactMeButton = document.querySelectorAll(".js-open-popup");
    this.closeButton = document.querySelector(".js-close-popup");
  }

  openPopup(){
    this.popup.style = "display: flex";
    this.popupBackground.style = "display: block; opacity: 90%;";
    alert("This Pop-Up is still in development. No message will be sent to me. Use the About Me page and copy the email from there.");
  }
  
  closePopup(){
    this.popup.style = "display: none";
    this.popupBackground.style = "display: none";
  }
}

const modal = new Modal();

for(var i = 0; i < modal.contactMeButton.length; i++){
  modal.contactMeButton[i].addEventListener('click', function(){
    modal.openPopup();
  })
}

modal.closeButton.addEventListener("click", function(event){
  modal.closePopup();
});
/* -------------------- END OF CONTACT ME BUTTON ------------------------- */


/* -------------------- MOBILE MENU BUTTON ------------------------- */
function mobileButtons(){
  var buttons = document.getElementById("buttons-list");
  
  if(buttons.style.display == "flex"){
    buttons.style="display: none;";
  }
  else{
    buttons.style="display: flex;";
  }
}
/* -------------------- END OF MOBILE MENU BUTTON ------------------------- */

/* -------------------- SAVE CONTACT DATA  ------------------------- */
class InputSaver{
  constructor(){
    this.userName = document.getElementById("js-name-input").value;
    this.userEmail = document.getElementById("js-email-input").value;
    this.userMessage = document.getElementById("js-message-input").value;
  }

  SavedInput(){
    console.log(`Username: ${this.userName}`);
    console.log(`Email: ${this.userEmail}`);
    console.log(`Message: ${this.userMessage}`);
  }
}

const sendMessageButton = document.querySelector(".js-send-message-button");
sendMessageButton.addEventListener("click", function(event){
  let inputSaver = new InputSaver();
  inputSaver.SavedInput();
  modal.closePopup();
});
/* -------------------- END OF SAVE CONTACT DATA  ------------------------- */

/* -------------------- ANIMATED JOB TITLE ------------------------- */
const title = document.querySelector(".job-title"); // Get the title node
let titleHtml = "";
let letters = "";

if(title !== null){
  letters = title.innerText.split(""); // Array of the title letters

  letters.forEach(letter => {
    let className = "";
  
    if(letter == "G" || letter == "D"){
      className = "js-letter custom-letters";
      titleHtml = titleHtml + `<span class="${className}">${letter}</span>`;
    }
    else{
      className = "js-letter";
      titleHtml = titleHtml + `<span class="${className}">${letter}</span>`;
    }
  })

  title.innerHTML = titleHtml;
}
/* -------------------- END OF ANIMATED JOB TITLE ------------------------- */


/* -------------------- SWAP AMONG GAMES ------------------------- */
class SwapGames{
  constructor(){
    this.nextGameButtons = document.querySelectorAll(".js-next-game-button");
    this.previousGameButtons = document.querySelectorAll(".js-previous-game-button");
    this.fatebringerGame = document.getElementById("fatebringer");
    this.saviorGame = document.getElementById("savior");
    this.grumpyGame = document.getElementById("grumpy");
  }

  NextGame(){
    if(this.fatebringerGame.style.display != "none"){
      this.saviorGame.style = "display: flex";
      this.fatebringerGame.style = "display: none";
    }
    else if(this.saviorGame.style.display != "none"){
      this.saviorGame.style = "display: none";
      this.grumpyGame.style = "display: flex";
    }
    else if(this.grumpyGame.style.display != "none"){
      this.grumpyGame.style = "display: none";
      this.fatebringerGame.style = "display: flex";
    }
  }

  PreviousGame(){
    if(this.saviorGame.style.display != "none"){
      this.saviorGame.style = "display: none";
      this.fatebringerGame.style = "display: flex";
    }
    else if(this.grumpyGame.style.display != "none"){
      this.grumpyGame.style = "display: none";
      this.saviorGame.style = "display: flex";
    }
  }
}

const swapGame = new SwapGames();

if(swapGame.nextGameButtons !== null){ // This will check for these specific buttons in all pages
  swapGame.nextGameButtons.forEach(button => {
    button.addEventListener("click", function(event){
      swapGame.NextGame();
    });
  });
}

if(swapGame.previousGameButtons !== null){
  swapGame.previousGameButtons.forEach(button => { // This will check for these specific buttons in all pages
    button.addEventListener("click", function(event){
      swapGame.PreviousGame();
    });
  });
}
/* -------------------- END OF SWAP AMONG GAMES ------------------------- */


/* -------------------- SHOWCASE PAGES ------------------------- */
class ShowcasePages{
  constructor(){
    this.pageOne = document.querySelectorAll(".showcase-page-1");
    this.pageTwo = document.querySelectorAll(".showcase-page-2");
    this.pageThree = document.querySelectorAll(".showcase-page-3");
  }

  NextPage(){
    if(this.pageOne[0].style.display != "none"){ // Page 1 elements currently active
      this.pageOne.forEach(pOne => {
        pOne.style = "display: none";
  
        this.pageTwo.forEach(pTwo => { // Turn on page 2 elements
          pTwo.style = "display: flex";
          nextPageButton.innerText = "Next (2/3)"; // Update the button text
          previousPageButton.style = "display: initial"; // Make the previous button visible
        }) 
      })
    }
    else if(this.pageTwo[0].style.display != "none"){ // Page 2 elements currently active
      this.pageTwo.forEach(pTwo => {
        pTwo.style = "display: none"
  
        this.pageThree.forEach(pThree => { // Turn on page 3 elements
          pThree.style = "display: flex";
          nextPageButton.style = "display: none"; // Turn off button, there are no more pages
        })
      })
    }
  }

  PreviousPage(){
    if(this.pageTwo[0].style.display != "none"){ // Page 2 elements currently active
      this.pageTwo.forEach(pTwo => {
        pTwo.style = "display: none"
        nextPageButton.innerText = "Next (1/3)"; // Update the button text
        previousPageButton.style = "display: none"; // Make the previous button visible
      })

      this.pageOne.forEach(pOne => { // Activate page 1 elements
        pOne.style = "display: flex";
      })
    }
    else if(this.pageThree[0].style.display != "none"){ // Page 3 elements currently active
      this.pageThree.forEach(pThree => {
        pThree.style = "display: none";

        this.pageTwo.forEach(pTwo => { // Activate page 2 elements
          pTwo.style = "display: flex";
          nextPageButton.style = "display: initial";
        })
      })
    }
  }
}

let showcase = new ShowcasePages();

let nextPageButton = document.querySelector(".js-showcase-next-button");
let previousPageButton = document.querySelector(".js-showcase-previous-button");

if(nextPageButton !== null & previousPageButton !== null){
  nextPageButton.addEventListener("click", function(event){
    showcase.NextPage();
  });
  
  previousPageButton.addEventListener("click", function(event){
    showcase.PreviousPage();
  });
}
/* -------------------- END OF SHOWCASE PAGES ------------------------- */