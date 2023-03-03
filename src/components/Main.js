import { useState } from 'react';
import Card from './Card';
import getCards from './getCards';
import results from './results';

export default function Main() {
    const [cards, setCards] = useState(() => getCards());
    const [count, setCount] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const [maxScore, setMaxScore] = useState(0);

    function setRandomCards(e) {
        const newCards = getCards();

        setCards(newCards);
        setCount((prevCount) => prevCount + 1);
        setClickedCards((clickedCards) => [...clickedCards, e.target.alt]);
        let countClickedCard = results(clickedCards, e.target.alt);
        if (countClickedCard === 2) {
            count > maxScore ? setMaxScore(count) : setMaxScore(maxScore);
            setCount(0);
            setClickedCards([]);
        }
    }

    return (
        <div className="main">
            <div className="score">
                <div>SCORE: {count}</div>
                <div>MAX SCORE: {maxScore} </div>
            </div>

            <div className="cards">
                {cards
                    ? cards.map((card) => (
                          <Card
                              key={card.id}
                              image={card.img}
                              name={card.name}
                              setRandomCards={setRandomCards}
                          />
                      ))
                    : 'LOADING...'}
            </div>
        </div>
    );
}
