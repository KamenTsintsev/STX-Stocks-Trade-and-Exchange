import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uniqueId } from "uuid";
import * as dataApi from "../../../api/DataAPI";

import PrimaryButton from "../../Buttons/PrimaryButton";
import AddFavorite from "../../utils/AddFavorite";
import ImageCard from "./ImageCard";
import EditItem from "../../utils/EditItem";

import "./Details.scss";

export default function Details({ isMyAccount }) {
    const { itemId } = useParams();
    const [itemData, setItemData] = useState("");
    const [_ownerId, set_OwnerId] = useState("");
    const [images, setImages] = useState([]);
    const [active, setActive] = useState("");

    useEffect(() => {
        const getItem = async () => {
            const itemRes = await dataApi.getById(itemId);
            setItemData(itemRes);
            set_OwnerId(itemRes._ownerId);
            setImages(itemRes.images);
            setActive(itemRes.images[0]);
        };

        getItem();
    }, [itemId]);

    const activeCardHoverHandler = (value) => {
        active !== value && setActive(value);
    };

    let imageCards;

    if (images) {
        imageCards = images.map((imgData) => {
            // console.log(imgData);
            return (
                <ImageCard
                    key={imgData[0]}
                    imageData={imgData}
                    active={active}
                    activeCardHoverHandler={activeCardHoverHandler}
                />
            );
        });
    }
    return (
        <div className="productDetailsContainer">
            <div className="productDetails">
                {/* Gallery Container */}
                <div className="galleryContainer">
                    <div className="sticky">
                        <ul className="gallery">{imageCards || ""}</ul>
                        <div className="currentImage">
                            <img src={active[1]} alt={active[0]} />
                        </div>
                    </div>
                </div>
                {/* Description Container */}
                <div className="description">
                    <h2 className="title">{itemData.title}</h2>
                    <h3 className="price">Price: ${itemData.price}</h3>
                    <ul className="desc">
                        {itemData.description?.split(" ** ").map((x) => {
                            return <li key={uniqueId()}>{x}</li>;
                        })}
                    </ul>
                </div>
                {/* Order container */}

                <div className="orderNowContainer">
                    {isMyAccount ? (
                        <OwnerOrderNowContainer
                            itemId={itemId}
                            price={itemData.price}
                        />
                    ) : (
                        <UserOrderNowContainer
                            itemId={itemId}
                            price={itemData.price}
                            _ownerId={_ownerId}
                        />
                    )}
                </div>
            </div>
            {/* Filler */}
            <div className="moreItems">
                <h3>
                    THERE WILL BE{" "}
                    <span style={{ color: "red" }}>"MORE ITEMS" </span>
                    SECTION. Using Lorem to show effect of scrolling.
                </h3>
                <p>
                    Nostrum delectus labore libero cupiditate, odio saepe.
                    Voluptatum, laudantium? Aperiam, nesciunt veritatis sapiente
                    id recusandae excepturi molestias voluptas illum facere!
                    Maxime at saepe odio accusamus rem enim, adipisci provident
                    similique accusantium culpa illo, quae impedit magnam
                    voluptates aut dicta. Numquam ipsam, voluptates deserunt
                    repellendus suscipit eum cumque illum! Odit eveniet debitis
                    vel dolores recusandae ratione obcaecati nam tenetur sed
                    enim, quidem, molestias eius, ab ipsa doloribus dolor
                    explicabo quas! Tenetur eligendi consequuntur enim quidem.
                    Totam veniam porro aperiam ex perspiciatis fugit aut
                    suscipit, saepe est voluptatem id assumenda, perferendis
                    odio quisquam ipsam quidem repellat, natus doloremque.
                    Neque, temporibus modi? Nulla est impedit nihil dolores iure
                    ipsa laborum, facere nesciunt, sint ex ut maxime, distinctio
                    consequuntur! Perferendis porro, sapiente ullam numquam
                    optio, fuga minus reprehenderit nostrum saepe repudiandae,
                    quia ipsum. Sed aspernatur cupiditate exercitationem nisi
                    nihil, dolorum provident numquam velit aliquam. Eaque
                    deserunt delectus optio pariatur, dolore ex, impedit
                    molestiae provident, possimus assumenda blanditiis ducimus
                    unde error. Eos, eum quae. Perferendis ut, enim tempore
                    aliquid soluta hic rem veritatis voluptatum quidem, modi
                    labore impedit earum autem deleniti maiores, repudiandae
                    error porro? Hic perspiciatis officiis tempora inventore
                    nihil quidem esse ipsa. Nobis excepturi vero dolorum animi
                    voluptatibus facere beatae quasi consequuntur ipsum ab
                    repellat fuga, distinctio laboriosam ullam ipsam aspernatur?
                    Voluptatem sapiente inventore ut quisquam labore magnam
                    mollitia laboriosam architecto possimus? Aperiam ducimus
                    soluta beatae? Autem dolorem mollitia, impedit aperiam aut
                    omnis tempore libero explicabo dignissimos, sapiente quod in
                    nesciunt cum cumque. Ad sunt facilis deleniti optio alias
                    illo inventore temporibus. Reiciendis ipsam dolor mollitia
                    quia vel at vero debitis molestias laudantium, cumque nisi?
                    Iste libero eius nisi ea! Ullam, repellendus sed. Et harum
                    fugit amet doloribus quam molestiae adipisci. Labore! Vel
                    quasi corrupti sed officiis cumque ipsa commodi perferendis
                    quos possimus enim. Et praesentium rem debitis sequi
                    accusantium, eum enim repellat? Dolore, ullam
                    exercitationem. Quasi officia explicabo est exercitationem
                    quos. Distinctio nobis voluptas ex dolores, harum porro
                    saepe impedit, perspiciatis molestiae ab esse repudiandae
                    accusantium neque quibusdam. Asperiores eligendi cupiditate
                    ea odio ipsa quibusdam beatae, deleniti nesciunt sit sed at!
                    Minima, rem quos! Sequi, velit. Provident dolor, dignissimos
                    tempora placeat quam blanditiis consequatur. Earum,
                    consequatur? Incidunt a consequuntur tenetur minima
                    obcaecati! Quasi error blanditiis voluptate commodi totam,
                    labore mollitia hic! Et corporis consequatur cupiditate
                    sapiente temporibus ducimus recusandae ab quia vel tempora
                    quis magni nostrum aut officiis magnam non quasi quam
                    consectetur odit debitis dolores, sunt doloribus blanditiis
                    accusantium. Facilis. Debitis veritatis quaerat doloremque
                    quam perferendis, quos facere? Perferendis doloribus
                    molestias, dolor assumenda cupiditate doloremque ipsum,
                    velit sapiente nam, accusamus in? Culpa cum saepe esse
                    excepturi, eum quos quod adipisci! Veniam, qui facilis
                    tempora ullam sapiente distinctio porro numquam odio dolorem
                    animi asperiores nostrum tenetur eveniet non? Totam atque
                    sed, corrupti molestiae quidem odio a libero, dignissimos
                    explicabo autem ex. Doloribus, nam! Expedita voluptatem
                    corporis sit, quasi, tenetur doloribus amet dolorem sapiente
                    earum doloremque officiis? Soluta provident eveniet, nostrum
                    impedit recusandae dolorem commodi ratione, animi dolor
                    voluptatibus cupiditate quo autem? Eos minima quas
                    recusandae consectetur facilis molestiae, iste eum, sunt
                    quaerat, velit minus voluptate placeat id consequatur.
                    Repellendus maiores autem ipsum consectetur similique
                    tempore, dolores eligendi laudantium fugiat soluta facilis?
                    Asperiores eum sapiente cum rem, eos sequi molestias error
                    suscipit atque hic architecto animi cupiditate impedit
                    minima corporis tempora eos cum eaque perspiciatis,
                    accusamus, ipsum vitae a nam illo corrupti. Fugiat suscipit
                    consequuntur rerum quas sit ad illum minus repudiandae
                    voluptatem enim? Vero dolore ea asperiores numquam nobis
                    labore soluta voluptates error praesentium perferendis? Et
                    eveniet perferendis voluptates voluptatem itaque nobis
                    deserunt aspernatur molestias delectus quam? Odit autem
                    nihil in, voluptates tempora harum cum nesciunt vitae
                    adipisci necessitatibus, ratione neque recusandae facilis
                    cumque aperiam omnis perferendis porro incidunt officiis ab
                    ex, quas magnam. Ut, aperiam voluptas. Culpa aliquid quidem
                    at, voluptatibus repellat fuga temporibus ipsam maiores
                    esse? Ipsa cumque reiciendis autem consequuntur tempora
                    officia aliquid voluptates inventore. Neque quia rem
                    blanditiis quos tempore qui doloribus magni. Pariatur cum
                    voluptates officiis vitae error unde velit laborum, a
                    doloremque, sint corrupti fugiat veritatis quia ipsam
                    quaerat ab alias, optio architecto iste! Ipsa distinctio
                    consequatur explicabo quidem dolorum. Magni. Doloribus,
                    quidem ratione adipisci mollitia in error neque aspernatur
                    culpa molestiae ullam. Odio magni voluptates mollitia
                    laborum facere magnam a ex dolorum neque ducimus. Quis
                    asperiores hic exercitationem quaerat officia. Quas incidunt
                    consectetur quisquam dignissimos ea ut a adipisci assumenda
                    sit excepturi quaerat perferendis, voluptas enim libero
                    saepe beatae tenetur amet earum. Deleniti voluptatibus
                    quidem iste nulla atque et fuga. Quae, incidunt facilis est
                    illum molestias consequuntur voluptate, eaque excepturi
                    totam ipsam aspernatur at blanditiis non. Animi inventore
                    veritatis ad rem dolorem maiores, impedit molestias
                    deleniti, tempora, repudiandae vitae facere! Nemo hic, rem
                    provident maiores enim adipisci officia aperiam dolores
                    itaque architecto corrupti repellendus doloremque
                    repudiandae nihil? Blanditiis dignissimos eaque, aperiam
                    quos molestiae enim neque pariatur eum, recusandae at
                    eveniet.
                </p>
            </div>
        </div>
    );
}

function UserOrderNowContainer({ itemId, price, _ownerId }) {
    return (
        <div className="orderNow">
            <header className={"orderHeader"}>
                <h3 className="bolder">${price}</h3>
                <AddFavorite itemId={itemId} _ownerId={_ownerId}></AddFavorite>
            </header>
            <p className="slim text-12px">
                The product will be delivered from{" "}
                <span className="bold">3</span> to{" "}
                <span className="bold">5 business days</span>
            </p>
            <PrimaryButton cName={"secondary"}>{"Buy now"}</PrimaryButton>
        </div>
    );
}

function OwnerOrderNowContainer({ price, itemId }) {
    const navigate = useNavigate();
    const deleteItem = async () => {
        await dataApi.deleteItemById(itemId);
        
        navigate(-1);
    };
    return (
        <div className="orderNow">
            <header className={"orderHeader"}>
                <h3 className="bolder">${price}</h3>

                <EditItem itemId={itemId} />
            </header>
            <p className="slim text-12px">
                The product will be delivered from{" "}
                <span className="bold">3</span> to{" "}
                <span className="bold">5 business days</span>
            </p>
            <PrimaryButton cName={"danger"} onClick={() => deleteItem(itemId)}>
                {"Delete Item"}
            </PrimaryButton>
        </div>
    );
}
