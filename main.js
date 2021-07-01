// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


 const handleClick = (e) => {
  let heartNode = e.target
  console.log(heartNode.textContent)
  mimicServerCall()
 .then(() => {
   if(heartNode.textContent === "♡") {
 heartNode.textContent = '♥';
 heartNode.classList.add('activated-heart')
   } else {
     heartNode.textContent= '♡';
     heartNode.classList.remove('activated-heart')
   }
 }
 )
.catch(error => {
  let errorMes = error.message;
  let errorDiv = document.querySelector('div#modal');
  errorDiv.classList.remove('hidden')
  let errorMessage = document.querySelector('div p#modal-message');
  let nodeText = document.createTextNode(errorMes);
  errorMessage.appendChild(nodeText);
  setTimeout(function() {
    errorDiv.classList.add('hidden')
  }, 3000)
})
}

//heartNode.classList.add('like-glyph-red')
const heart = document.querySelectorAll('footer ul li span.like-glyph');
for (let item of heart) {
 item.addEventListener('click', handleClick )
}

//id="modal-message"

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
