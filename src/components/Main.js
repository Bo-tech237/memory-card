import { useState } from 'react';
import Card from './Card';
import getCards from './getCards';

export default function Main() {
    const [cards, setCards] = useState(() => getCards());

    function setRandomCards() {
        const newCards = getCards();
        setCards(newCards);
    }

    return (
        <div className="main">
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
