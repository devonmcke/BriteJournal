// every 100 lines will change the color or tone of the background. It should start out dark and as you write, the lighter the background.

//add event listener, where counting characters.

//I need a save option

//random image generator
let briteNote;
let opacityChange = 1;
let charCount = 0;
let fontColorChange = 255;
let randomImage = Math.floor(Math.random() * 14);
let imageArr = [
  "https://images.pexels.com/photos/1126384/pexels-photo-1126384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/585759/pexels-photo-585759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/434551/pexels-photo-434551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/414578/pexels-photo-414578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/447329/pexels-photo-447329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/350772/pexels-photo-350772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1408199/pexels-photo-1408199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/57627/pexels-photo-57627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1452717/pexels-photo-1452717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];
document.body.style.backgroundImage = "url(" + imageArr[randomImage] + ")";

function textEval(t) {
  console.log(t.value.length);
  charCount++;
  if (charCount % 2 == !0) {
    if (opacityChange > 0.75) {
      opacityChange -= 0.008;
      //When you start typing, the opacity changes faster during the first 25%
    }
    if (opacityChange > 0.25 && opacityChange < 0.75) {
      opacityChange -= 0.005;
      // When you type during the next 50%, the opacity change goes slower
    }
    if (opacityChange > 0 && opacityChange < 0.25) {
      opacityChange -= 0.002;
      // When you type during the last 25%, the opacity change goes slower
    }
    document.getElementById("black-background").style.backgroundColor =
      "rgba(0,0,0," + opacityChange + ")";

    if (fontColorChange > 180) {
      fontColorChange -= 4;
      //
    }
    if (fontColorChange > 165 && fontColorChange < 180) {
      fontColorChange -= 118;
    }
    if (fontColorChange < 70 && fontColorChange > 0) {
      fontColorChange -= 2;
    }

    document.getElementsByTagName("textarea")[0].style.color =
      "rgba(" +
      fontColorChange +
      "," +
      fontColorChange +
      "," +
      fontColorChange +
      "," +
      1 +
      ")";

    document.getElementsByTagName("textarea")[0].style.borderColor =
      "rgba(" +
      fontColorChange +
      "," +
      fontColorChange +
      "," +
      fontColorChange +
      "," +
      1 +
      ")";

    // document.body.style.backgroundColor = "rgba(0,0,0," + opacityChange + ")";
  }

  //every 100 words will drop the opacity by .1
}

function sendEmail() {
  briteNote = document.getElementsByTagName("textarea")[0].value;

  window.open(
    "mailto:devonmcke.f231f99@m.evernote.com?subject=Brite Journal&body=" +
      briteNote
  );
}
