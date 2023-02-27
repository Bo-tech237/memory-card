import cardInput from './cardInput';

function getCards() {
    const shuffledArray = shuffleArray(cardInput());

    return shuffledArray;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate random number
        let j = Math.floor(Math.random() * (i + 1));

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

export default getCards;
