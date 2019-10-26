
var  btNum = document.querySelectorAll(".drum").length;

for (var i = 0; i < btNum; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    playSound(this.innerHTML);

    buttonAnimation(this.innerHTML);

  });
}

// Detection Keybord Press
document.addEventListener("keydown", function (event) {

  playSound(event.key);

  buttonAnimation(event.key);

})

function playSound(key) {

  switch (key) {
    case "w":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default: console.log(keyPressed);

  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

//background drum images

// document.querySelector(".w").style.backgroundImage = "url('images/kick.png')";
// document.querySelector(".a").style.backgroundImage = "url('images/snare.png')";
// document.querySelector(".s").style.backgroundImage = "url('images/tom1.png')";
// document.querySelector(".d").style.backgroundImage = "url('images/tom2.png')";
// document.querySelector(".j").style.backgroundImage = "url('images/tom3.png')";
// document.querySelector(".k").style.backgroundImage = "url('images/tom4.png')";
// document.querySelector(".l").style.backgroundImage = "url('images/crash.png')";


// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!");
// });
