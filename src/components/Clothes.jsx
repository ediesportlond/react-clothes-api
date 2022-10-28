import { useState } from "react";

export default function Clothes() {
    const [clothingList, setClothingList] = useState();
    const [homeScreen, setHomeScreen] = useState(true);

    const getClothing = () => {
        fetch("http://localhost:3030/clothes")
            .then(d => d.json())
            .then(d => {
                setClothingList(d.message);
                setHomeScreen(false);
            })
            .catch(console.error)
    }
    const welcomeMessage = () => {
        return (
            <section>
                <h1>Welcome to our shop!</h1>
                <h2>Click below to enter :&#41;</h2>
                <button onClick={getClothing}>Explore</button>
            </section>
        )
    }

    const showClothes = () => {
        return (
            <div className="card-container">
                {clothingList.map(item => (
                    <div key={item.id} className="clothes-card">
                        <h3>{item.brand}</h3>
                        <p>{item.type}</p>
                        <p>{item.size}</p>
                        <p><strong>${item.price}</strong></p>

                    </div>
                ))
                }
            </div>
        )
    }
    return (
        <>
            {
                homeScreen
                    ? welcomeMessage()
                    : null
            }
            <main>
                {
                    !clothingList
                        ? <div></div>
                        : showClothes()
                }
            </main>

        </>
    )
}