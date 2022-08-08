import { useState, useEffect } from "react";
import * as dataApi from "../../../api/DataAPI";

import TitleSection from "./TitleSection";
import ImagesSection from "./ImagesSection";
import DescriptionSection from "./DescriptionSection";
import PriceSection from "./PriceSection";
import PrimaryButton from "../../Buttons/PrimaryButton";

import "./ProductForm.scss";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductForm() {
    const { itemId } = useParams();
    const navigate = useNavigate();

    const [productData, setProductData] = useState({
        title: "",
        category: "",
        images: [],
        description: "",
        price: "",
        delivery: "buyer",
        condition: "new",
    });
    const [errors, setErrors] = useState({
        title: true,
        category: true,
        images: true,
        description: true,
        price: true,
    });

    useEffect(() => {
        if (itemId) {
            const getItem = async () => {
                const product = await dataApi.getById(itemId);

                setProductData({
                    title: product.title,
                    category: product.category,
                    images: product.images,
                    description: product.description,
                    price: product.price,
                    condition: product.condition,
                    delivery: product.delivery,
                });
            };

            getItem();
        }
    }, [itemId]);

    const onFormSubmit = async (e) => {
        e.preventDefault();

        if (!Object.values(errors).includes(true)) {
            if (itemId) {
                await dataApi.editExistingItem(itemId, productData);
                setProductData({
                    title: "",
                    category: "",
                    images: [],
                    description: "",
                    price: "",
                    delivery: "buyer",
                    condition: "new",
                });
                navigate("/myaccount/details/" + itemId);
            } else {
                await dataApi.createNewItem(productData);
                setProductData({
                    title: "",
                    category: "",
                    images: [],
                    description: "",
                    price: "",
                    delivery: "buyer",
                    condition: "new",
                });
                navigate("/");
            }
        } else {
            alert("Please fill in all the highlighted fields!");
        }
    };

    const onCancelClick = (e) => {
        let confirm = window.confirm("Please enter your name");

        if (confirm) {
            setProductData({
                title: "",
                category: "",
                images: [],
                description: "",
                price: "",
                delivery: "buyer",
                condition: "new",
            });
            navigate(itemId ? `/myaccount/details/${itemId}` : "/");
        }
    };

    return (
        <section className="formContainer">
            <form action="#" onSubmit={onFormSubmit} className={"form"}>
                {itemId ? <h1>Edit Item</h1> : <h1>Add Product</h1>}

                <TitleSection
                    title={productData.title}
                    category={productData.category}
                    setProductData={setProductData}
                    errors={errors}
                    setErrors={setErrors}
                />
                <ImagesSection
                    dataImages={productData.images}
                    setProductData={setProductData}
                    errors={errors}
                    setErrors={setErrors}
                />
                <DescriptionSection
                    description={productData.description}
                    setProductData={setProductData}
                    errors={errors}
                    setErrors={setErrors}
                />
                <PriceSection
                    price={productData.price}
                    condition={productData.condition}
                    delivery={productData.delivery}
                    setProductData={setProductData}
                    errors={errors}
                    setErrors={setErrors}
                />
                <div className="section button">
                    <PrimaryButton type={"submit"}>
                        {itemId ? "Edit product" : "Add new product"}
                    </PrimaryButton>
                    <p className="text-16px danger" onClick={onCancelClick}>
                        Cancel
                    </p>
                </div>
            </form>
        </section>
    );
}
