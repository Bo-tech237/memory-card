import { useState } from 'react';
import Card from './Card';
import getCards from './getCards';

export default function Main() {
    const [cards, setCards] = useState(() => getCards());
    const [count, setCount] = useState(0);

    function setRandomCards() {
        const newCards = getCards();
        setCards(newCards);
        setCount((prevCount) => prevCount.count + 1);
    }

    return (
        <div className="main">
            <div className="cards">
                <>{count}</>
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
