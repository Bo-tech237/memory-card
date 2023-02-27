import { useState } from 'react';
import Card from './Card';
import getCards from './getCards';

export default function Main() {
    const [cards, setCards] = useState(() => getCards());
    const [count, setCount] = useState(0);

    function setRandomCards(e) {
        const newCards = getCards();
        console.log(e.target.src);
        setCards(newCards);
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div className="main">
            <div>score: {count}</div>
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
