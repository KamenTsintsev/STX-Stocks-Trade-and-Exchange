import { useState, useEffect } from "react";
import * as dataApi from "../../../api/DataAPI";

import TitleSection from "./TitleSection";
import ImagesSection from "./ImagesSection";
import DescriptionSection from "./DescriptionSection";
import PriceSection from "./PriceSection";
import PrimaryButton from "../../Buttons/PrimaryButton";

import "./ProductForm.scss";
import { useNavigate } from "react-router-dom";

export default function ProductForm({ product }) {
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        title: "",
        category: "default",
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
    // const galleryRef = useRef();

    useEffect(() => {
        // const propsProductKeysLength = Object.keys(product).length || "";
        if (-1 > 0) {
            setProductData({
                _id: product._id,
                title: product.title,
                category: product.category,
                images: product.images,
                description: product.description,
                price: product.price,
                quality: product.quality,
                featuredProduct: product.featuredProduct,
            });
        }
    }, [product]);

    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (!Object.values(errors).includes(true)) {
            await dataApi.createNewItem(productData);
            setProductData({
                title: "",
                category: "default",
                images: [],
                description: "",
                price: "",
                delivery: "buyer",
                condition: "new",
            });
            navigate("/");
        } else {
            alert("please fill in all the highlighted fields");
        }
    };

    const onCancelClick = (e) => {
        let confirm = window.confirm("Please enter your name");
        // console.log("Not working properly for now. Building in process.");
        if (confirm) {
            setProductData({
                title: "",
                category: "default",
                images: [],
                description: "",
                price: "",
                delivery: "buyer",
                condition: "new",
            });
            navigate("/");
        }
    };

    return (
        <section className="formContainer">
            <form action="#" onSubmit={onFormSubmit} className={"form"}>
                <h1>Add Product</h1>
                <TitleSection
                    productData={productData}
                    setProductData={setProductData}
                    errors={errors}
                    setErrors={setErrors}
                />
                <ImagesSection
                    productData={productData}
                    setProductData={setProductData}
                    errors={errors}
                    setErrors={setErrors}
                />
                <DescriptionSection
                    productData={productData}
                    setProductData={setProductData}
                    errors={errors}
                    setErrors={setErrors}
                />
                <PriceSection
                    productData={productData}
                    setProductData={setProductData}
                    errors={errors}
                    setErrors={setErrors}
                />
                <div className="section button">
                    <PrimaryButton type={"submit"}>
                        {"Add new product"}
                    </PrimaryButton>
                    <p className="text-16px danger" onClick={onCancelClick}>
                        Cancel
                    </p>
                </div>
            </form>
        </section>
    );
}
