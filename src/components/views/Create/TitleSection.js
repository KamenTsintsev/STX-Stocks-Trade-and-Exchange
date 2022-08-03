import { useEffect } from "react";
import { useState } from "react";

const TitleSection = ({ productData, setProductData, errors, setErrors }) => {
    const [isTitleErrorFired, setIsTitleErrorFired] = useState(false);
    const [isCategoryErrorFired, setIsCategoryErrorFired] = useState(false);
    const [titleError, setTitleError] = useState(null);
    const [categoryError, setCategoryError] = useState(null);

    useEffect(() => {
        if (isTitleErrorFired) {
            if (productData.title.length < 16) {
                setTitleError("This field requires more than 16 characters");
                setErrors((err) => {
                    return { ...err, title: true };
                });
            }
            if (productData.title.length == 0) {
                setTitleError("This field is recomended!");
                setErrors((err) => {
                    return { ...err, title: true };
                });
            }
            if (productData.title.length >= 16) {
                setTitleError("");
                setErrors((err) => {
                    return { ...err, title: false };
                });
            }
        }
        if (isCategoryErrorFired) {
            if (productData.category == "") {
                setCategoryError(true);
                setErrors((err) => {
                    return { ...err, category: true };
                });
            } else {
                setCategoryError(false);
                setErrors((err) => {
                    return { ...err, category: false };
                });
            }
        }
    }, [
        isTitleErrorFired,
        isCategoryErrorFired,
        titleError,
        productData.title,
        productData.category,
    ]);

    const onInputChangeHandler = (e) => {
        setProductData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <section className="titleSectionContainer section">
            <h4>What do you offer?</h4>
            <div className={"titleContainer inputContainer"}>
                <label htmlFor="title">Title*</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="ex: Apple MacBook Air 256GB"
                    className={titleError ? "inputError" : ""}
                    value={productData.title || ""}
                    onChange={onInputChangeHandler}
                    onBlur={() =>
                        !isTitleErrorFired &&
                        setIsTitleErrorFired((state) => !state)
                    }
                    required
                />
                {titleError && (
                    <p className="text-12px bold danger">{titleError}</p>
                )}
            </div>
            <div className="categoryContainer inputContainer">
                <label htmlFor="category">Category*</label>
                <select
                    id="category"
                    name="category"
                    defaultValue={""}
                    onChange={onInputChangeHandler}
                    onBlur={() =>
                        !isCategoryErrorFired &&
                        setIsCategoryErrorFired((state) => !state)
                    }
                    required
                >
                    <option value="">Select category:</option>
                    <option value="electronics">electronics</option>
                    <option value="home & kitchen">home & kitchen</option>
                    <option value="cars & accesories">cars & accesories</option>
                    <option value="The Witcher ;)">The Witcher ;)</option>
                </select>
                {categoryError && (
                    <p className="text-12px bold danger">
                        Please select a valid category
                    </p>
                )}
            </div>
        </section>
    );
};

export default TitleSection;
