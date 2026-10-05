const Buttons = document.getElementById("buttons-container");
const QuizContainer = document.getElementById("quiz-container");
const quizOption = document.getElementById("quiz-options");
const quizTitle = document.getElementById("question-title");
const ButtonContainer = document.getElementById("buttons-container");
const MapDiv = document.getElementById('map');
const questions = [
  {
    type: "choice",
    title: "1.Where should we go on the next date",
    options: ["Coffee & Walk", "Dinner Date", "Picnic"],
  },
  {
    type: "map",
    title: "Whats the exact place we first met?",
    CorrectLat: 42.65586,
    CorrectLong: 21.15955,
  },
];

let currentQuestion = 0;

function showQuestion(){

const Q = questions[currentQuestion];
if(Q.type === "choice"){
    quizTitle.textContent = Q.title;
    Q.options.forEach(function(option){
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('quiz-btn');
        ButtonContainer.appendChild(button);

        
    })
}




}



quizOption.classList.remove("hidden");


let map = L.map("map").setView([42.61891, 21.23319], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

map.on("click", function (e) {
  console.log("click detected");
  const playerLat = e.latlng.lat;
  const playerLong = e.latlng.lng;
  const targetPoint = L.latLng(42.65586, 21.15955);
  const playerGuess = L.latLng(playerLat, playerLong);
  const distanceMeter = targetPoint.distanceTo(playerGuess);

  const marker = L.marker([playerLat, playerLong]).addTo(map);
  if (distanceMeter <= 10) {
    marker.bindPopup("<b>You remembered! ❤️</b>").openPopup();
    confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
  } else {
    marker.bindPopup("<b>Qysh bre syn im so dissapointed in you 😔<b>").openPopup();
  }
});
