import "./ProductsToolbar.scss";

export default function ProductsToolbar() {
    return (
        <header className="toolBarContainer">
            <p className="slim text-14px">
                <span className="text-14px bold">1-12</span> of over{" "}
                <span className="text-14px bold">150</span> products in{" "}
                <span className="text-14px bold">"CATEGORY"</span> category
            </p>

            <div className="sort">
                <label htmlFor="sortBy" className="sortLabel text-14px">
                    Sort By:
                </label>
                <select
                    id="sortBy"
                    className="sortSelect text-14px"
                    placeholder="SortBy:"
                >
                    <option value="dateASC">Newest</option>
                    <option value="dateDESC">Oldest</option>
                    <option value="priceASC">Price: Low to High</option>
                    <option value="priceDESC">Price: High to Low</option>
                </select>
            </div>
        </header>
    );
}
