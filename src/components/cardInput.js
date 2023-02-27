function cardInput() {
    const cardInputs = [
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/tiger.jpg'),
                alt: 'card',
            },
            name: 'tiger',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/chameleon.jpg'),
                alt: 'card',
            },
            name: 'chameleon',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/cheetahs.jpg'),
                alt: 'card',
            },
            name: 'cheetahs',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/wolf.jpg'),
                alt: 'wolf',
            },
            name: 'wolf',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/rhinoceros.jpg'),
                alt: 'card',
            },
            name: 'rhinoceros',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/giraffe.jpg'),
                alt: 'card',
            },
            name: 'giraffe',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/monkey-mandril.jpg'),
                alt: 'card',
            },
            name: 'monkey mandril',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/buffalo.jpg'),
                alt: 'card',
            },
            name: 'buffalo',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/fox.jpg'),
                alt: 'card',
            },
            name: 'fox',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/elephant.jpg'),
                alt: 'card',
            },
            name: 'elephant',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/peacock.jpg'),
                alt: 'card',
            },
            name: 'peacock',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/ostrich.jpg'),
                alt: 'card',
            },
            name: 'ostrich',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/zebra.jpg'),
                alt: 'card',
            },
            name: 'zebra',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/primate-ape.jpg'),
                alt: 'card',
            },
            name: 'primate ape',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/penguins.jpg'),
                alt: 'card',
            },
            name: 'penguins',
        },
    ];

    return cardInputs;
}

export default cardInput;
