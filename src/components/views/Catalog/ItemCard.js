import { useState, useEffect } from "react";

import "./ItemCard.scss";

export default function ItemCard({ item }) {
    const [coverImg, setCoverImg] = useState("");

    useEffect(() => {
        const imgReq = async () => {
            const img = await import(
                "../../../Images/products/nissan350z/1.jpg"
                // baseImgURL + item.imageArr[0]
                // "C:/Kamen/Softuni-Program/FrontEnd - JS/REACT - JS/exam-project/src/Images/products/nissan350z/2.jpg"
            );
            setCoverImg(img.default);
        };
        imgReq();
    }, []);

    return (
        <div className="itemCard">
            <header className="imageHolder">
                <img src={coverImg} alt="" />
            </header>
            <main className="info">
                <p className="text-14px bold title">{item.title}</p>
                <footer className="priceHolder">
                    <p className="text-14px">
                        Price:{" "}
                        <span className="text-16px bold">${item.price}</span>{" "}
                    </p>
                </footer>
            </main>
        </div>
    );
}
