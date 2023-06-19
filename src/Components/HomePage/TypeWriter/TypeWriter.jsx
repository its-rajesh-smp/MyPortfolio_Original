import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <div className="typewriter_div">
      <div className="typewriter_Container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .start()
              .typeString(textToSpan("I am a Frontend Developer"))
              .pauseFor(2000)
              .callFunction(boomTextFunc())
              .callFunction(hideCursor())
              .pauseFor(2000)

              .pauseFor(3000)

              .callFunction(clearBoomTextFunc())
              .pauseFor(1000)
              .callFunction(showCursor())

              .deleteChars(9)
              .typeString(textToSpan("Desiginer"))
              .pauseFor(2000)

              .deleteChars(24)
              .typeString(textToSpan("Love React , JS , CSS"))
              .callFunction(morphText())
              .pauseFor(5000);
          }}
          options={{ autoStart: true, loop: true, delay: 10, deleteSpeed: 10 }}
        />
      </div>
    </div>
  );
}

export default TypeWriter;

// Function To Convert Text To Span
function textToSpan(str) {
  let newStrArray = str.split(" ");
  let newStrSpan = "";

  for (let i = 0; i < newStrArray.length; i++) {
    let wordArr = newStrArray[i].split("");
    let wordSpan = "";

    for (let j = 0; j < wordArr.length; j++) {
      let span = `<span data-attribute=${wordArr[j]} class="span">${wordArr[j]}</span>`;
      wordSpan += span;
    }
    newStrSpan += wordSpan;

    if (i !== newStrArray.length - 1) {
      newStrSpan += " ";
    }
  }

  return newStrSpan;
}

// Generate Random Integer
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function For Booming The Text
function boomTextFunc() {
  return () => {
    const span = document.querySelectorAll(".span");
    for (let i = 0; i < span.length; i++) {
      span[i].style.display = "inline-block";
      if (i % 2 === 0) {
        const randomTop = getRndInteger(10, 15);
        const randomLeft = getRndInteger(10, 15);
        const rotate = getRndInteger(0, 360);
        const fontSize = getRndInteger(12, 30);
        const textShadow1 = getRndInteger(2, 10);
        const textShadow2 = getRndInteger(2, 10);
        const textShadow3 = getRndInteger(2, 10);
        span[i].style.top = `${randomTop}px`;
        span[i].style.left = `${randomLeft}px`;
        span[i].style.fontSize = `${fontSize}px`;
        span[i].style.transform = `rotate(${rotate}deg)`;
        span[
          i
        ].style.textShadow = `${textShadow1}px ${textShadow2}px ${textShadow3}px black`;
      } else {
        const randomTop = getRndInteger(10, 15);
        const randomLeft = getRndInteger(10, 15);
        const rotate = getRndInteger(0, 360);
        const fontSize = getRndInteger(12, 30);
        const textShadow1 = getRndInteger(2, 10);
        const textShadow2 = getRndInteger(2, 10);
        const textShadow3 = getRndInteger(2, 10);
        span[i].style.fontSize = `${fontSize}px`;
        span[i].style.top = `${-randomTop}px`;
        span[i].style.left = `${-randomLeft}px`;
        span[i].style.transform = `rotate(${-rotate}deg)`;
        span[
          i
        ].style.textShadow = `${textShadow1}px ${textShadow2}px ${textShadow3}px black`;
      }
    }
  };
}

// Clear Bomb
function clearBoomTextFunc() {
  return () => {
    const span = document.querySelectorAll(".span");
    for (let i = 0; i < span.length; i++) {
      span[i].style.top = "0px";
      span[i].style.fontSize = `${16}px`;
      span[i].style.left = "0px";
      span[i].style.transform = `rotate(${0}deg)`;
      span[i].style.color = `black`;
      span[i].style.textShadow = `none`;
    }
  };
}

// Hide Cursor
function hideCursor() {
  return () => {
    document.querySelector(".Typewriter__cursor").style.display = "none";
  };
}

// Show Cursor
function showCursor() {
  return () => {
    document.querySelector(".Typewriter__cursor").style.display = "initial";
  };
}

// Morph Text
function morphText() {
  return () => {
    const span = document.querySelectorAll(".span");

    for (let i = 0; i < span.length; i++) {
      let colorRed = getRndInteger(0, 255);
      let colorGreen = getRndInteger(0, 255);
      let colorBlue = getRndInteger(0, 255);
      span[i].style.color = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
    }
  };
}
