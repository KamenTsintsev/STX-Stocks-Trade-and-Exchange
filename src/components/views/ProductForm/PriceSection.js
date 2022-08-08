import { useState, useEffect } from "react";

const PriceSection = ({
    price,
    condition,
    delivery,
    setProductData,
    setErrors,
}) => {
    const [isPriceErrorFired, setIsPriceErrorFired] = useState(false);
    const [priceError, setPriceError] = useState(null);

    useEffect(() => {
        if (isPriceErrorFired) {
            if (price.length == 0) {
                setPriceError("This field is recomended!");
                setErrors((err) => {
                    return { ...err, price: true };
                });
            }
            if (price.length > 0) {
                setPriceError("");
                setErrors((err) => {
                    return { ...err, price: false };
                });
            }
        }

        // edit functionality
        if (price != "") {
            setErrors((err) => {
                return { ...err, price: false };
            });
        }
    }, [isPriceErrorFired, priceError, price]);

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

    const onPriceInputBlur = (e) => {
        setProductData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: Number(e.target.value).toFixed(2),
            };
        });
    };
    // FIND A WAY TO DISABLE input[type=number] scroll effect
    // or change it with type=text and add Regex
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
                        step={0.01}
                        placeholder="ex: 799.99"
                        className={priceError ? "inputError" : ""}
                        value={price}
                        onChange={onInputChangeHandler}
                        onBlur={(e) => {
                            onPriceInputBlur(e);
                            !isPriceErrorFired &&
                                setIsPriceErrorFired((state) => !state);
                        }}
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
                    <label htmlFor={condition == "new" ? "used" : "new"}>
                        Condition*
                    </label>
                    <div className="radioContainer">
                        <div className="radio">
                            <input
                                type="radio"
                                name="condition"
                                id="new"
                                value={"new"}
                                checked={condition == "new"}
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
                                checked={condition == "used"}
                                onChange={onInputChangeHandler}
                            />
                            <label htmlFor="used">Used</label>
                        </div>
                    </div>
                </div>
                <div className="deliveryContainer">
                    <label htmlFor={delivery == "buyer" ? "seller" : "buyer"}>
                        Delivery is covered by*
                    </label>
                    <div className="radioContainer">
                        <div className="radio">
                            <input
                                type="radio"
                                name="delivery"
                                id="buyer"
                                value={"buyer"}
                                checked={delivery == "buyer"}
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
                                checked={delivery == "seller"}
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
