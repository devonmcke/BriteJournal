// every 100 lines will change the color or tone of the background. It should start out dark and as you write, the lighter the background.

//add event listener, where counting characters.

// make popup invisible upon loading
document.getElementById("emailPopup").style.display = "none";
document.getElementsByClassName("button")[1].style.display = "none";

//I need a save option

//random image generator

var briteNote;
var opacityChange = 1;
var charCount = 0;
var fontColorChange = 255;
var randomImage = Math.floor(Math.random() * 14);
var imageArr = [
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
  if (charCount % 2 !== 0) {
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

    $("#black-background").css({
      "background-color": "rgba(0,0,0," + opacityChange + ")"
    });

    // document.getElementById("black-background").style.backgroundColor =
    //   "rgba(0,0,0," + opacityChange + ")";

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

    // document.getElementsByTagName("textarea")[0].style.borderColor =
    //   "rgba(" +
    //   fontColorChange +
    //   "," +
    //   fontColorChange +
    //   "," +
    //   fontColorChange +
    //   "," +
    //   1 +
    //   ")";

    // document.body.style.backgroundColor = "rgba(0,0,0," + opacityChange + ")";
  }

  //every 100 words will drop the opacity by .1
}

function sendEmail() {
  briteNote = document.getElementsByTagName("textarea")[0].value;
  if (document.getElementById("emailPopup").style.display == "none") {
    // display the popup and change button value to 'close'
    document.getElementById("emailPopup").style.display = "block";
    document.getElementsByTagName("textarea")[0].style.display = "none";
    document.getElementsByClassName("button")[0].value = "Close";
    document.getElementsByClassName("button")[1].style.display = "inline-block";
  } else if (document.getElementById("emailPopup").style.display == "block") {
    // hide the popup and change button value to 'Send Email'
    document.getElementById("emailPopup").style.display = "none";
    document.getElementsByTagName("textarea")[0].style.display = "block";
    document.getElementsByClassName("button")[0].value = "Send Email";
    document.getElementsByClassName("button")[1].style.display = "none";
  }

  // window.open(
  //   "mailto:"devonmcke.f231f99@m.evernote.com"?subject=Brite Journal&body=" +
  //     briteNote
  // );
}

function inputEmail() {
  var date = new Date();
  var userEmail = document.getElementsByClassName("input-element")[0].value;
  window.open(
    "mailto:" +
      userEmail +
      "?subject=Brite Journal " +
      date.getDate() +
      "/" +
      date.getMonth() +
      "/" +
      (date.getYear() + 1900) +
      "&body=" +
      briteNote
  );
}

//date.getDate() + "/" + date.getMonth() + "/" + (date.getYear()+1900);

// resize based on  mobile view

// window.onresize = function() {
//   if (window.innerWidth < 550) {
//     console.log("> 550");
//     document.getElementsByTagName("textarea")[0].style.top = "10px";
//     document.getElementById("emailPopup").style.top = "10px";
//   } else {
//     document.getElementsByTagName("textarea")[0].style.top = "145px";
//     document.getElementById("emailPopup").style.top = "135px";
//   }

//   $("textarea")[0].css({
//     top: "10px"
//   });
// };
