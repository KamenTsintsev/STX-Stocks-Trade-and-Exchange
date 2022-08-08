import { useContext, useEffect, useState } from "react";
import FilterMenu from "../../utils/FilterMenu";
import ProductsToolbar from "../../utils/ProductsToolbar";
import ItemsArea from "./ItemsArea";
import * as dataApi from "../../../api/DataAPI";
import AuthContext from "../../../contexts/authenticationContext";

import "./CatalogPage.scss";

export default function Catalog({ isMyAccount }) {
    const [items, setItems] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        const getItems = async () => {
            if (isMyAccount) {
                const itemsRes = await dataApi.getMyItems(userId);
                setItems(itemsRes);
            } else {
                const itemsRes = await dataApi.getAllItems();
                setItems(itemsRes);
            }
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
