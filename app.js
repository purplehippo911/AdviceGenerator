const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.hero__advice-text');
const button = document.querySelector('.hero__dice');

function fetchAdvice() {
   fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((response) => {
      const data = response.slip;
      const id = data.id;
      const advice = data.advice;

      adviceId.textContent = `#${id}`;
      adviceText.textContent = `${advice}`;
      console.log(id, advice);
    });
}

function timeRefresh() {
  window.location.reload(true)
}
  


window.addEventListener("DOMContentLoaded", fetchAdvice);
button.addEventListener('click', timeRefresh);