import { useEffect, useState } from "react";
import FilterMenu from "../../utils/FilterMenu";
import ProductsToolbar from "../../utils/ProductsToolbar";
import ItemsArea from "./ItemsArea";
import * as dataApi from "../../../api/DataAPI";

import "./CatalogPage.scss";

export default function Catalog() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const itemsRes = await dataApi.getAllItems();
            setItems(itemsRes);
        };

        getItems();
    }, []);

    return (
        <>
            <div className={"catalogPageContainer "}>
                <ProductsToolbar />
                <FilterMenu />
                <ItemsArea items={items} />
            </div>
        </>
    );
}
