import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import "./ItemsArea.scss";

export default function ItemsArea({ items }) {
    let allItems = items.map((x, i) => {
        const id = x._id;
        return (
            <Link to={"details/" + id} key={id}>
                <ItemCard item={x} />
            </Link>
        );
    });

    return (
        <div className="itemsAreaContainer">
            <h3 className="resultsText bold">Results</h3>
            <main className="itemsContainer">{allItems}</main>
        </div>
    );
}
