import { useState, useEffect } from "react";

const PriceSection = ({ productData, setProductData, errors, setErrors }) => {
    const [isPriceErrorFired, setIsPriceErrorFired] = useState(false);
    const [priceError, setPriceError] = useState(null);

    useEffect(() => {
        if (isPriceErrorFired) {
            if (productData.price.length == 0) {
                setPriceError("This field is recomended!");
                setErrors((err) => {
                    return { ...err, price: true };
                });
            }
            if (productData.price.length > 0) {
                setPriceError("");
                setErrors((err) => {
                    return { ...err, price: false };
                });
            }
        }
    }, [isPriceErrorFired, priceError, productData.price]);

    const onInputChangeHandler = (e) => {
        if (e.target.type == "radio") {
            setProductData((prevState) => {
                return {
                    ...prevState,
                    [e.target.name]: e.target.value,
                };
            });
        } else {
            setProductData((prevState) => {
                return {
                    ...prevState,
                    [e.target.name]: e.target.value,
                };
            });
        }
    };

    return (
        <section className="priceSectionContainer section">
            <h4>Price</h4>
            <div className="priceContainer inputContainer">
                <label htmlFor="price">Price*</label>
                <div className="priceInput">
                    <input
                        type="number"
                        name="price"
                        id="price"
                        placeholder="ex: 799.99"
                        className={priceError ? "inputError" : ""}
                        value={productData.price}
                        onChange={onInputChangeHandler}
                        onBlur={() =>
                            !isPriceErrorFired &&
                            setIsPriceErrorFired((state) => !state)
                        }
                        required
                    />
                    <label htmlFor="price">$</label>
                </div>
                {priceError && (
                    <p className="text-12px bold danger">{priceError}</p>
                )}
            </div>
            <div className="additionalInformation">
                <h5>Additional information</h5>
                <div className="conditionContainer">
                    <label
                        htmlFor={
                            productData.condition == "new" ? "used" : "new"
                        }
                    >
                        Condition*
                    </label>
                    <div className="radioContainer">
                        <div className="radio">
                            <input
                                type="radio"
                                name="condition"
                                id="new"
                                value={"new"}
                                checked={productData.condition == "new"}
                                onChange={onInputChangeHandler}
                            />
                            <label htmlFor="new">New</label>
                        </div>
                        <div className="radio">
                            <input
                                type="radio"
                                name="condition"
                                id="used"
                                value={"used"}
                                checked={productData.condition == "used"}
                                onChange={onInputChangeHandler}
                            />
                            <label htmlFor="used">Used</label>
                        </div>
                    </div>
                </div>
                <div className="deliveryContainer">
                    <label
                        htmlFor={
                            productData.delivery == "buyer" ? "seller" : "buyer"
                        }
                    >
                        Delivery is covered by*
                    </label>
                    <div className="radioContainer">
                        <div className="radio">
                            <input
                                type="radio"
                                name="delivery"
                                id="buyer"
                                value={"buyer"}
                                checked={productData.delivery == "buyer"}
                                onChange={onInputChangeHandler}
                            />
                            <label htmlFor="buyer">Buyer</label>
                        </div>
                        <div className="radio">
                            <input
                                type="radio"
                                name="delivery"
                                id="seller"
                                value={"seller"}
                                checked={productData.delivery == "seller"}
                                onChange={onInputChangeHandler}
                            />
                            <label htmlFor="seller">Seller</label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceSection;
