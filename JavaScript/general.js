/* -------------------- LIGHT/DARK MODE ------------------------- */
class LightMode{
  constructor(){
    this.icon = document.getElementById("light-mode"); // This is for the click event
    this.lightIconText = document.querySelector(".js-light-mode-text");
    this.body = document.querySelector("body");
    // NAVIGATION BAR
    this.navBar = document.getElementById("nav-bar");
    this.navBarButtons = document.querySelectorAll(".nobg-nav-buttons"); // Array
    this.mobileMenuList = document.getElementById("buttons-list");
    this.mobileMenuIcon = document.getElementById("hidden-buttons-icon");
    // MAIN ELEMENTS
    this.blocksParent = document.querySelectorAll(".js-block-parent"); // Array
    // FOOTER
    this.footer = document.getElementById("footer");
    this.footerTitles = document.querySelectorAll(".footer-titles"); // Array
    // GAMES & SHOWCASE
    this.titleBox = document.querySelectorAll(".js-title-box"); // Array
    this.gamesDescriptionBox = document.querySelectorAll(".js-game-description"); // Array
  }

  ChangeStyle(){
    this.body.style = "background: linear-gradient(to right, #edf0f1, white, #edf0f1); color: #16161a;";
    this.navBar.style = "background-color: white; border-bottom: 0px solid white; box-shadow: 0 0 5px grey";
    this.mobileMenuList.style = "background: linear-gradient(to right, #00cfff, #005ead);";
    this.mobileMenuIcon.style = "background: linear-gradient(to bottom, #00cfff, #005ead); border-radius: 200px;"
    this.footer.style = "background-color: white; box-shadow: 0 0 5px grey";

    // GAMES
    if(this.titleBox != null & this.gamesDescriptionBox != null){ // THIS WILL STOP CONSOLE ERRORS IN OTHER PAGES
      this.titleBox.forEach(titleBox => {
        titleBox.style = "background: linear-gradient(to bottom, #edf0f1, #edf0f1); text-shadow: none; border-top: 1px solid #00cfff; border-bottom: 1px solid #00cfff;";
      })
      this.gamesDescriptionBox.forEach(descriptionBox => {
        descriptionBox.style = "background: linear-gradient(to bottom, white, #edf0f1); border: 1px solid #00cfff;";
      })
    }

    this.navBarButtons.forEach(buttons => {
      buttons.style = "color: #16161a;";
    });

    this.blocksParent.forEach(blockParent => { // THESE ARE THE MAIN ELEMENT BLOCKS OF ALL PAGES
      blockParent.style = "background-color: white; box-shadow: 0 0 10px grey;";
    });

    this.footerTitles.forEach(footerTitles => {
      footerTitles.style = "color: grey"
    });
  }
}

class DarkMode{
  constructor(){
    this.icon = document.getElementById("dark-mode"); // This is for the click event
    this.darkIconText = document.querySelector(".js-dark-mode-text");
    this.body = document.querySelector("body");
    // NAVIGATION BAR
    this.navBar = document.getElementById("nav-bar");
    this.navBarButtons = document.querySelectorAll(".nobg-nav-buttons"); // Array
    this.mobileMenuList = document.getElementById("buttons-list");
    this.mobileMenuIcon = document.getElementById("hidden-buttons-icon");
    // MAIN ELEMENTS
    this.blocksParent = document.querySelectorAll(".js-block-parent"); // Array
    // FOOTER
    this.footer = document.getElementById("footer");
    this.footerTitles = document.querySelectorAll(".footer-titles"); // Array
    // GAMES & SHOWCASE
    this.titleBox = document.querySelectorAll(".js-title-box"); // Array
    this.gamesDescriptionBox = document.querySelectorAll(".js-game-description"); // Array
  }

  ChangeStyle(){
    this.body.style = "background: ; color: ;";
    this.navBar.style = "background-color: ; box-shadow: ;";
    this.mobileMenuList.style = "background-color: ;";
    this.mobileMenuIcon.style = "background: ; border-radius: ;"
    this.footer.style = "background-color: ; box-shadow: ;";

    // GAMES
    if(this.titleBox != null & this.gamesDescriptionBox != null){ // THIS WILL STOP CONSOLE ERRORS IN OTHER PAGES
      this.titleBox.forEach(titleBox => {
        titleBox.style = "background: ; text-shadow: ; border-top: ; border-bottom: ;";
      })
      this.gamesDescriptionBox.forEach(descriptionBox => {
        descriptionBox.style = "background: ; border: ;";
      })
    }

    this.navBarButtons.forEach(buttons => {
      buttons.style = "color: ;";
    });

    this.blocksParent.forEach(blockParent => { // THESE ARE THE MAIN ELEMENT BLOCKS OF ALL PAGES
      blockParent.style = "background-color: ; box-shadow: ;";
    });

    this.footerTitles.forEach(footerTitles => {
      footerTitles.style = "color: ;";
    });
  }
}

const lightMode = new LightMode();
const darkMode = new DarkMode();

let LightModeActive = false;
let DarkModeActive = true;

if(DarkModeActive){
  darkMode.ChangeStyle();
}
else{
  lightMode.ChangeStyle();
}

// LIGHT MODE
lightMode.icon.addEventListener("click", function(event){ // Change style of the page
  lightMode.ChangeStyle();
  LightModeActive = true;
});
lightMode.icon.addEventListener("mouseover", function(event){ // Enable text
  lightMode.lightIconText.style = "display: inline-flex;"
});
lightMode.icon.addEventListener("mouseout", function(event){ // Disable text
  lightMode.lightIconText.style = "display: none;"
});

// DARK MODE
darkMode.icon.addEventListener("click", function(event){ // Enable text
  darkMode.ChangeStyle();
  DarkModeActive = true;
});
darkMode.icon.addEventListener("mouseover", function(event){ // Enable text
  darkMode.darkIconText.style = "display: inline-flex;"
});
darkMode.icon.addEventListener("mouseout", function(event){ // Disable text
  darkMode.darkIconText.style = "display: none;"
});
/* -------------------- END OF LIGHT/DARK MODE ------------------------- */


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