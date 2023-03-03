export default function Card(props) {
    const { image, name, setRandomCards } = props;

    return (
        <div className="card">
            <button onClick={setRandomCards}>
                <img src={image.src} alt={image.alt} />
            </button>
            <span className="card-name">{name}</span>
        </div>
    );
}
