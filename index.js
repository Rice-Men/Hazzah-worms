function init() {
  document.querySelector("#puzzle1").addEventListener('keydown', submitByEnter1);
  document.querySelector("#puzzle2").addEventListener('keydown', submitByEnter2);
  document.querySelector("#puzzle3").addEventListener('keydown', submitByEnter3);
  document.querySelector("#puzzle4").addEventListener('keydown', submitByEnter4);
}

function submitByEnter1(evt) {

  if(evt.keyCode == 13) {
    submit1();
  }
}

function submitByEnter2(evt) {

  if(evt.keyCode == 13) {
    submit1();
  }
}

function submitByEnter3(evt) {

  if(evt.keyCode == 13) {
    submit1();
  }
}

function submitByEnter4(evt) {

  if(evt.keyCode == 13) {
    submit1();
  }
}

function submit1() {
  let correct = document.querySelector("#correct1");
  let wrong = document.querySelector("#wrong1");
  correct.setAttribute("class", "none");
  wrong.setAttribute("class", "none");
  let typedAnswer = document.querySelector("#puzzle1").value;
  if (typedAnswer == 422) {
    correct.removeAttribute("class");
    correct.setAttribute("class", "correct");
  } else {
    wrong.removeAttribute("class");
  }
}

function submit2() {
  let correct = document.querySelector("#correct2");
  let wrong = document.querySelector("#wrong2");
  correct.setAttribute("class", "none");
  wrong.setAttribute("class", "none");
  let typedAnswer = document.querySelector("#puzzle2").value;
  if (typedAnswer == 123456) {
    correct.removeAttribute("class");
    correct.setAttribute("class", "correct");
  } else {
    wrong.removeAttribute("class");
  }
}

function submit3() {
  let correct = document.querySelector("#correct3");
  let wrong = document.querySelector("#wrong3");
  correct.setAttribute("class", "none");
  wrong.setAttribute("class", "none");
  let typedAnswer = document.querySelector("#puzzle3").value;
  if (typedAnswer == 1373) {
    correct.removeAttribute("class");
    correct.setAttribute("class", "correct");
  } else {
    wrong.removeAttribute("class");
  }
}

function submit4() {
  let correct = document.querySelector("#correct4");
  let wrong = document.querySelector("#wrong4");
  correct.setAttribute("class", "none");
  wrong.setAttribute("class", "none");
  let typedAnswer = document.querySelector("#puzzle4").value;
  if (typedAnswer == "125%") {
    correct.removeAttribute("class");
    correct.setAttribute("class", "correct");
  } else {
    wrong.removeAttribute("class");
  }
}
