import { useEffect } from "react";
import { useState } from "react";

const TitleSection = ({ title, category, setProductData, setErrors }) => {
    const [isTitleErrorFired, setIsTitleErrorFired] = useState(false);
    const [titleError, setTitleError] = useState(null);
    const [isCategoryErrorFired, setIsCategoryErrorFired] = useState(false);
    const [categoryError, setCategoryError] = useState(null);

    useEffect(() => {
        if (isTitleErrorFired) {
            if (title.length < 16) {
                setTitleError("This field requires more than 16 characters");
                setErrors((err) => {
                    return { ...err, title: true };
                });
            }
            if (title.length == 0) {
                setTitleError("This field is recomended!");
                setErrors((err) => {
                    return { ...err, title: true };
                });
            }
            if (title.length >= 16) {
                setTitleError("");
                setErrors((err) => {
                    return { ...err, title: false };
                });
            }
        }
        if (isCategoryErrorFired) {
            if (category == "") {
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
        // edit functionality
        if (title != "" && category != "") {
            setErrors((err) => {
                return { ...err, title: false, category: false };
            });
        }
    }, [isTitleErrorFired, isCategoryErrorFired, titleError, title, category]);

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
                    value={title || ""}
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
                    value={category || ""}
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
