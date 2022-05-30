var cards = document.querySelectorAll(".card");
var start = document.querySelector(".btn-success");
var sec = 10;
var time;
var counter = 0;
var score = 1;
var hearts = 4;
var first
var second

function flip() {
  this.classList.toggle('is-flipped');
  counter++;

  if (counter % 2 != 0) first = this;
  else {
      second = this;
      if (first.title == second.title) {
        document.querySelector('.text-dark').textContent='score : '+score++;
        if(score == 4)
        {
            document.querySelector('#timer').textContent="you won the game ...";

        }
          first.removeEventListener('click', flip);
          second.removeEventListener('click', flip);

      }
      else{
          setTimeout(function (){
            document.querySelector('.text-danger').textContent='Hearts : '+ --hearts;
            if(hearts < 1)
            {
              document.querySelector('#timer').textContent="you Lost the game ...";
              
              document.querySelector('.text-danger').textContent='Hearts : '+ 0;
              [...cards].forEach((card) => {
                card.classList.toggle("is-flipped");
              });
        }
              first.classList.toggle('is-flipped')
              second.classList.toggle('is-flipped')
            
            }, 2000);
         
      }
      console.log(first, second)
  }
  

}

function flip2() {
  if(sec <1)
  {
      document.querySelector('#timer').textContent="game started now ..."
    }
    [...cards].forEach((card) => {
      card.classList.toggle("is-flipped");
    });
  }

  start.addEventListener("click", shuffle());
  start.addEventListener("click", shuffle2());
  //  for show all the card
  start.addEventListener("click", function () {
    // shuffleArray(array);
    time = setInterval(myTimer, 1000);
    cards.forEach((card) => card.addEventListener("click", flip));
    
    [...cards].forEach((card) => {
      card.classList.toggle("is-flipped");
    });
    
  start.style.display='none';
});


function myTimer() {
  document.getElementById("timer").innerHTML = sec + " sec";
  sec--;
  if (sec == -1) {
    clearInterval(time);
    flip2();
  }

}


function shuffle() {
  var container = document.getElementById("container1");
  var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('shuffleMe'));
    elementsArray.forEach(function(element){
    container.removeChild(element);
  })
  shuffleArray(elementsArray);
  elementsArray.forEach(function(element){
  container.appendChild(element);
})
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function shuffle2() {
  var container = document.getElementById("container2");
  var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('shuffleMe'));
    elementsArray.forEach(function(element){
    container.removeChild(element);
  })
  shuffleArray(elementsArray);
  elementsArray.forEach(function(element){
  container.appendChild(element);
})
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}



// (B) TOGGLE DIALOG BOX
function dbox (msg) {
  // (B1) GET ELEMENTS
  var box = document.getElementById("dbox"),
      boxm = document.getElementById("dboxm");
 
  // (B2) SHOW/HIDE
  boxm.innerHTML = (msg === undefined) ? "" : msg ;
  box.style.display = (msg === undefined) ? "none" : "block";
}