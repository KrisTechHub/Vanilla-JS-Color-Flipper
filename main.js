const btn = document.getElementById('btn');
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo","Violet"];
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

let getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
};