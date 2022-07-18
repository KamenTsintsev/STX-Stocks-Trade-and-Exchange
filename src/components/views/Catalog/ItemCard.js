import "./ItemCard.scss";

export default function ItemCard({ item }) {
    return (
        <div className="itemCard">
            <header className="imageHolder">
                <img
                    src="https://i.pinimg.com/originals/0e/90/01/0e9001f90f79ef776647af976f3cade2.jpg"
                    alt=""
                />
            </header>
            <main className="info">
                <p className="text-14px bold title">{item.title}</p>
                <footer className="priceHolder">
                    <p className="text-14px">
                        Price:{" "}
                        <span className="text-16px bold">${item.price}</span>{" "}
                    </p>
                </footer>
            </main>
        </div>
    );
}
