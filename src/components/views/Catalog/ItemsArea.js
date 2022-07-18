import { useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uniqueID } from "uuid";
import ItemCard from "./ItemCard";
import "./ItemsArea.scss";

export default function ItemsArea({}) {
    const itemData = {
        title: "Wyze Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera, 2-Way Audio, Works with Alexa, Google Assistant, and IFTTT",
        description:
            "Color night vision: An all-new Starlight Sensor records night time video in full, vivid color. The Starlight Sensor can see full color in environments up to 25x darker than traditional video cameras and the new f/1.6 aperture captures 2x more light. Indoor/ Outdoor: Wyze Cam v3 is a wired video camera with an IP65 rating so you can confidently install it outside in the rain or inside in the kids' room.Wyze Outdoor Power Adapter(sold separately) required for outdoor use.Phone Compatibility - Android 5.0 +, iOS 9.0 +. Motion & Sound detection: Wyze Cam records video when motion or sound is detected and sends an alert straight to your phone.Motion Detection Zones and custom settings allow you to adjust the sensitivity of detection or turn it off completely. 24 / 7 Continuous Recording: Continuous video recording with a 32GB MicroSD card(sold separately).Just insert the MicroSD into the base of the Wyze Cam and you're all set. IFTTT certified connect all of your different apps and devices.When you sign up for a free account, you can enable your apps and devices to work together.",
        price: 35.98,
        imageUrl: "../../Images/products/Camera/img1.jpg",
        category: "electronics",
    };
    const item = (id) => {
        console.log(id);
        return (
            <Link to={"details/" + id} key={id}>
                <ItemCard item={itemData} />
            </Link>
        );
    };
    let allItems = [];

    for (let i = 0; i < 12; i++) {
        allItems.push(item(uniqueID()));
    }

    return (
        <div className="itemsAreaContainer">
            <h3 className="resultsText bold">Results</h3>
            <main className="itemsContainer">{allItems}</main>
        </div>
    );
}
