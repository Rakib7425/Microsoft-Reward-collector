
let getReward = document.getElementById('getReward');
let word = document.getElementById('wordGen');
let div = document.getElementById('doc');


let array = [];

let index = 0;

word.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        let word = '';
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const length = Math.floor(Math.random() * 5) + 5;
        for (let j = 0; j < length; j++) {
            word += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        array.push(`"${word}"`);
    }

    div.innerText = array.join(', ')
})


// TODO 
if (array.length <= 1) {
    getReward.style.pointerEvents="none";
    getReward.style.backgroundColor = "green";
} else {
    getReward.style.cursor="default";
    getReward.style.background = rgb(6, 171, 146);
}


getReward.addEventListener('click', () => {

    var intervalId = setInterval(function () {
        console.log(array[index]);
        // window.open("https://www.google.com/search?q=" + array[index]); // Google Chrome
        // window.open("https://www.bing.com/search?q=" + array[index]); // Microsoft Edge
        index++;
        if (index >= array.length) {
            clearInterval(intervalId);
        }
    }, 1000);

})