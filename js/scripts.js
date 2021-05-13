var userTextArea = document.getElementById("userText")
var outputTextAre = document.querySelector(".output-text")
var checkBtn = document.querySelector(".check")
// ClipboardEvent
var pasteButton = document.querySelector(".paste-clipboard")

pasteButton.addEventListener("click", function (e) {
  e.preventDefault()
  navigator.clipboard.readText().then(text => userTextArea.value = text);
  userTextArea.focus()
})

function renderSucces(text) {
  var newSpan = document.createElement("SPAN")
  newSpan.textContent = `${text}  `
  newSpan.classList.add('right')
  outputTextAre.appendChild(newSpan)
}

function renderError(text) {
  var newSpan = document.createElement("SPAN")
  newSpan.textContent = `${text} `
  newSpan.classList.add('bg-warning')
  outputTextAre.appendChild(newSpan)
}



function getUserArray() {
  var userText = userTextArea.value
  userText = userText.trim()
  return userText.split(" ")
}


function checkIncludes(word, element) {
  element.includes(word)
}

function wordIncludes(elemen) {
  elemen.includes(word)
}

checkBtn.addEventListener("click", function (e) {
  e.preventDefault()
  outputTextAre.innerHTML = ""

  var userArray = getUserArray()

  for (let i = 0; i < userArray.length; i++) {
    const element = userArray[i];

    if (wordsUz.includes(element)) {
      renderSucces(element)
    } else if (true) {
      for (let i = 0; i < wordsUz.length; i++) {
        const elem = wordsUz[i];
        if (element.includes(elem)) {
          renderSucces(element)
          break
        } else {
          renderError(element)
          break
        }
      }
    }
  }

  // for (let i = 0; i < userArray.length; i++) {
  //   var element = userArray[i].toString();

  //   for (let i = 0; i < wordsUz.length; i++) {
  //     var word = wordsUz[i];
  //   }
  // }
})




