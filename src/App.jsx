import data from "./data/data.json"
import Card from "./components/Card"
import "./assets/sass/index.scss"

function App() {
    return (
        <div className="cards-container">
            {data.cards.map((card, i) => (
                <Card
                    key={i}
                    img={card.image}
                    title={card.title}
                />
            ))}
        </div>
    )
}

export default App
