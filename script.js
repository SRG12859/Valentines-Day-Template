const giftBox = document.getElementById("giftBox");
const pageOne = document.getElementById("pg-one");
const pageTwo = document.getElementById("pg-two");
const pageThree = document.getElementById("pg-three");
const pageFour = document.getElementById("pg-four");
const giftClick = () => {
  console.log("Hello");
  giftBox?.classList.add("opened");
  setTimeout(() => {
    pageOne?.classList.add("out");
    setTimeout(() => {
      pageTwo?.classList.add("popIn");
      console.log(pageTwo);
    }, 5 * 1000);
    console.log(pageOne);
  }, 5 * 1000);
};
const pgTwoNextBtn = () => {
  setTimeout(() => {
    pageTwo?.classList.add("outPgRight");
    setTimeout(() => {
      pageThree?.classList.add("onscreen");
      console.log(pageThree);
    }, 5 * 1000);
  }, 1.5 * 1000);
};
const pgThreeNextBtn = () => {
  console.log("pg three next btn clicked");
  setTimeout(() => {
    pageThree?.classList.add("remPg");
    setTimeout(() => {
      pageThree?.classList.remove("onscreen");
      pageThree?.classList.remove("remPg");
      setTimeout(() => {
        pageFour?.classList.add("slideInUp");
        setTimeout(() => {
          pageFour?.classList.add("fadeOut");
        }, 30 * 1000);
      }, 1.5 * 1000);
    }, 3 * 1000);
  }, 1.5 * 1000);
};

const audio = document.createElement("audio");
audio.src = "assets/audio.mp3";
audio.autoplay = true;
audio.loop = true;
audio.style.display = "none";
document.body.appendChild(audio);
document.addEventListener("click", () => {
  audio.play().catch((err) => console.log("Autoplay blocked:", err));
});

// Get the document element you want to fullscreen
var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}
