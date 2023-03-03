function cardInput() {
    const cardInputs = [
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/tiger.jpg'),
                alt: 'tiger',
            },
            name: 'tiger',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/chameleon.jpg'),
                alt: 'chameleon',
            },
            name: 'chameleon',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/cheetahs.jpg'),
                alt: 'cheetahs',
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
                alt: 'rhinoceros',
            },
            name: 'rhinoceros',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/giraffe.jpg'),
                alt: 'giraffe',
            },
            name: 'giraffe',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/monkey-mandril.jpg'),
                alt: 'monkey mandril',
            },
            name: 'monkey mandril',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/buffalo.jpg'),
                alt: 'buffalo',
            },
            name: 'buffalo',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/fox.jpg'),
                alt: 'fox',
            },
            name: 'fox',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/elephant.jpg'),
                alt: 'elephant',
            },
            name: 'elephant',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/peacock.jpg'),
                alt: 'peacock',
            },
            name: 'peacock',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/ostrich.jpg'),
                alt: 'ostrich',
            },
            name: 'ostrich',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/zebra.jpg'),
                alt: 'zebra',
            },
            name: 'zebra',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/primate-ape.jpg'),
                alt: 'primate ape',
            },
            name: 'primate ape',
        },
        {
            id: crypto.randomUUID(),
            img: {
                src: require('../assets/penguins.jpg'),
                alt: 'penguins',
            },
            name: 'penguins',
        },
    ];

    return cardInputs;
}

export default cardInput;
