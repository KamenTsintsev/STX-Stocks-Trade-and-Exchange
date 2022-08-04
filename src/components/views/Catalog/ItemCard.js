import "./ItemCard.scss";

export default function ItemCard({ item }) {
    const [alt, src] = item.images ? item.images[0] : ["", ""];

    return (
        <div className="itemCard">
            <header className="imageHolder">
                <img src={src || ""} alt={alt} />
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
