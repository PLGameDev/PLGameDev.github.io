/* -------------------- HIDDEN NAV BUTTONS ------------------------- */
class HiddenNavButtons{
  constructor(){
    this.navButton = document.getElementById("js-nav-button");
    this.hiddenButtons = document.getElementById("hidden-nav-buttons");
  }

  DisplayOrHideButtons(){
    if(this.hiddenButtons.style.display == "flex"){
      this.hiddenButtons.style = "display: none";
    }
    else{
      this.hiddenButtons.style = "display: flex";
    }
  }
}

const navbarButton = new HiddenNavButtons();
navbarButton.navButton.addEventListener('click', function(){
  navbarButton.DisplayOrHideButtons();
});


/* -------------------- MODAL/POP-UP ------------------------- */
class Modal{
  constructor(){
    this.modal = document.getElementById("contactme-popup-container");
    this.popupBackground = document.getElementById("popup-background");
    this.popupButtons = document.querySelectorAll(".js-popup-buttons");
  }

  Popup(){
    if(this.modal.style.display == "none"){
      this.modal.style = "display: flex;";
      this.popupBackground.style = "display: block;";
    }
    else{
      this.modal.style = "display: none;";
      this.popupBackground.style = "display: none;";
    }
  }
}

const modal = new Modal();

for(var i = 0; i < modal.popupButtons.length; i++){
  modal.popupButtons[i].addEventListener('click', function(){
    modal.Popup();
  })
}
/* -------------------- END OF MODAL/POP-UP ------------------------- */