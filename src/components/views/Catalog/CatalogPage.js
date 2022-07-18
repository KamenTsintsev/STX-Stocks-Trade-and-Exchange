import FilterMenu from "../../utils/FilterMenu";
import ProductsToolbar from "../../utils/ProductsToolbar";
import "./CatalogPage.scss";
import ItemsArea from "./ItemsArea";

export default function Catalog() {
    return (
        <>
            <div className={"catalogPageContainer "}>
                <ProductsToolbar />
                <FilterMenu />
                <ItemsArea />
            </div>
        </>
    );
}
