import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import "./ImagesSection.scss";

const ImagesSection = ({ dataImages, setProductData,  setErrors }) => {
    const [isImagesErrorFired, setIsImagesErrorFired] = useState(false);
    const [imagesError, setImagesError] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (isImagesErrorFired) {
            if (dataImages.length > 6) {
                setImagesError(
                    "No more than 6 images! Please select the most important ones."
                );
                setErrors((err) => {
                    return { ...err, images: true };
                });
            }
            if (dataImages.length <= 6) {
                setImagesError("");
                setErrors((err) => {
                    return { ...err, images: false };
                });
            }
            if (dataImages.length == 0) {
                setImagesError(
                    "This field is recomended! Please select at least 1 image."
                );
                setErrors((err) => {
                    return { ...err, images: true };
                });
            }
        }

        // there is no Edit functionality for images for RN,
        // so the users will have to select the images again unfortunately
    }, [isImagesErrorFired, imagesError, dataImages]);

    useEffect(() => {
        setProductData((data) => {
            return {
                ...data,
                images: images,
            };
        });
    }, [images]);

    const onImageFileChangeHandler = async (e) => {
        const files = e.target.files;

        const imagesNum = images.length + files.length;

        if (imagesNum <= 6) {
            const imgArr = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                const base64Img = await getBase64(file);

                const currentImage = [file.name, base64Img];
                imgArr.push(currentImage);
            }
            // for now I will only use the input files, without saving the previous ones
            // setImages((images) => [...images, ...imgArr]);
            setImages((images) => [...imgArr]);

            setProductData((prevState) => {
                return {
                    ...prevState,
                    images: images,
                };
            });
        } else {
            e.target.files = {};
        }
    };

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }

    return (
        <section className="imagesSectionContainer section">
            <h4>Images</h4>
            <p className="text-14px slim">
                The first image will be the cover image.
            </p>
            <div className="imageGalleryContainer">
                <div className="imageContainer">
                    <FontAwesomeIcon icon={faImage} />
                    <input
                        type="file"
                        name="gallery"
                        id="photo-attachment-file"
                        accept="image/heic, image/png, image/jpeg, image/webp"
                        title=""
                        multiple
                        onChange={onImageFileChangeHandler}
                        onBlur={() =>
                            !isImagesErrorFired &&
                            setIsImagesErrorFired((state) => !state)
                        }
                        required
                    />
                </div>
            </div>
            {imagesError && (
                <p className="text-12px bold danger">{imagesError}</p>
            )}
        </section>
    );
};

export default ImagesSection;
