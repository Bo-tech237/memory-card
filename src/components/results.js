export default function results(array, currentCard) {
    const elementCounts = array.filter((str) => str === currentCard).length + 1;

    return elementCounts;
}
