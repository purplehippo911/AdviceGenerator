const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.hero__advice-text');
const button = document.querySelector('.hero__dice');

function fetchAdvice() {
  const URL = "https://api.adviceslip.com/advice";
   fetch(URL)
      .then(response => response.json())
      .then(data =>  {
        const { id, advice } = data.slip;

        adviceId.textContent = `Advice #${id}`;
        adviceText.textContent = `${advice}`;
    }).catch(err => console.error(err))
}

window.addEventListener("load", fetchAdvice);
button.addEventListener("click", fetchAdvice);