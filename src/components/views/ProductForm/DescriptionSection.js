import { useState, useEffect } from "react";

const DescriptionSection = ({
    description,
    setProductData,
    setErrors,
}) => {
    const [isDescriptionErrorFired, setIsDescriptionErrorFired] =
        useState(false);
    const [descriptionError, setDescriptionError] = useState(null);

    useEffect(() => {
        if (isDescriptionErrorFired) {
            if (description.length < 80) {
                setDescriptionError(
                    "This field requires more than 80 characters!"
                );
                setErrors((err) => {
                    return { ...err, description: true };
                });
            }
            if (description.length == 0) {
                setDescriptionError("This field is recomended!");
                setErrors((err) => {
                    return { ...err, description: true };
                });
            }
            if (description.length >= 80) {
                setDescriptionError("");
                setErrors((err) => {
                    return { ...err, description: false };
                });
            }
            if (description.length > 9000) {
                setDescriptionError(
                    "You are allowed to use maximum of 9000 characters!"
                );
                setErrors((err) => {
                    return { ...err, description: true };
                });
            }
        }

        // edit functionality
        if (description != "") {
            setErrors((err) => {
                return { ...err, description: false };
            });
        }
    }, [isDescriptionErrorFired, descriptionError, description]);

    const onInputChangeHandler = (e) => {
        setProductData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <section className="descriptionSectionContainer section">
            <h4>Description</h4>
            <div className="descriptionContainer inputContainer">
                <label htmlFor="description">Description*</label>
                <textarea
                    name="description"
                    id="description"
                    placeholder="ex: The phone has little scratch, but otherwise is in perfect shape..."
                    className={descriptionError ? "inputError" : ""}
                    value={description || ""}
                    onChange={onInputChangeHandler}
                    onBlur={() =>
                        !isDescriptionErrorFired &&
                        setIsDescriptionErrorFired((state) => !state)
                    }
                    required
                ></textarea>
                <div className="textareaErrorField">
                    <p className="text-12px bold">{description.length}/9000</p>
                    {descriptionError && (
                        <p className="text-12px bold danger">
                            {descriptionError}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DescriptionSection;
