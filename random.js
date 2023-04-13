
let word = document.getElementById(wordGen);

word.addEventListener('click', () => {
    let words = [];
    for (let i = 0; i < 100; i++) {
        let word = '';
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const length = Math.floor(Math.random() * 6) + 5;
        for (let j = 0; j < length; j++) {
            word += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        words.push(`"${word}"`);
    }
    // console.log(words.join(', '));

    document.write(words.join(', '))
})

