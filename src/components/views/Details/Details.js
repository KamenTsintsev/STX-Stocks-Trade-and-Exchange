import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import ImageCard from "./ImageCard";
import PrimaryButton from "../../Buttons/PrimaryButton";
import "./Details.scss";

export default function Details() {
    // const { itemID } = useParams();
    const itemData = {
        title: "Wyze Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera, 2-Way Audio, Works with Alexa, Google Assistant, and IFTTT",
        description:
            "Color night vision: An all-new Starlight Sensor records night time video in full, vivid color. The Starlight Sensor can see full color in environments up to 25x darker than traditional video cameras and the new f/1.6 aperture captures 2x more light. Indoor/ Outdoor: Wyze Cam v3 is a wired video camera with an IP65 rating so you can confidently install it outside in the rain or inside in the kids' room.Wyze Outdoor Power Adapter(sold separately) required for outdoor use.Phone Compatibility - Android 5.0 +, iOS 9.0 +. Motion & Sound detection: Wyze Cam records video when motion or sound is detected and sends an alert straight to your phone.Motion Detection Zones and custom settings allow you to adjust the sensitivity of detection or turn it off completely. 24 / 7 Continuous Recording: Continuous video recording with a 32GB MicroSD card(sold separately).Just insert the MicroSD into the base of the Wyze Cam and you're all set. IFTTT certified connect all of your different apps and devices.When you sign up for a free account, you can enable your apps and devices to work together.",
        price: 35.98,
        imageArr: [
            require("../../Images/products/chopper/4.jpg"),
            "https://i.pinimg.com/736x/69/82/7f/69827f4b51b0d827e82cb785808f1d87--amazing-cars-muscle.jpg",
            "http://www.stancenation.com/wp-content/uploads/2014/08/Stanced-Bagged-Nissan-350Z-1.jpg",
            "http://www.stancenation.com/wp-content/uploads/2014/08/Stanced-Bagged-Nissan-350Z-4.jpg",
        ],
        category: "electronics",
        available: true,
    };
    const [currentImage, setCurrentImage] = useState(itemData.imageArr[0]);
    const [active, setActive] = useState(itemData.imageArr[0]);

    const onMouseOverImageHangler = (e) => {
        // NEED TO FIX THIS BS ASAP!!!
        const img = e.currentTarget.querySelector("img").src;
        setCurrentImage(img);
    };
    const activeCardHoverHandler = (value) => {
        active !== value && setActive(value);
    };
    const arr = [];
    return (
        <div className="productDetailsContainer">
            <div className="productDetails">
                <div className="galleryContainer">
                    <div className="sticky">
                        <ul className="gallery">
                            {itemData.imageArr.map((imgUrl) => (
                                <ImageCard
                                    key={imgUrl}
                                    image={imgUrl}
                                    onMouseOverImageHangler={
                                        onMouseOverImageHangler
                                    }
                                    activeCardHoverHandler={
                                        activeCardHoverHandler
                                    }
                                    active={active}
                                />
                            ))}
                        </ul>
                        <div className="currentImage">
                            <img src={currentImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className="description">
                    <h2 className="title">{itemData.title}</h2>
                    <h3 className="price">Price: ${itemData.price}</h3>
                    <p className="desc">{itemData.description}</p>
                </div>
                <div className="orderNowContainer">
                    <div className="orderNow">
                        <h3 className="bolder">${itemData.price}</h3>
                        <p className="slim text-12px">
                            The product will be delivered from{" "}
                            <span className="bold">3</span> to{" "}
                            <span className="bold">5 business days</span>
                        </p>
                        <PrimaryButton cName={"secondary"}>
                            {"Buy now"}
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            <div className="moreItems">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis sapiente omnis odit, mollitia expedita
                    reprehenderit rerum magnam reiciendis accusamus ullam, illo
                    obcaecati saepe dolorem. Nemo soluta beatae hic delectus
                    fuga? Sit, eius officiis adipisci voluptatem iste quisquam
                    quod laboriosam eligendi placeat! Veritatis labore
                    recusandae aspernatur similique aperiam inventore? Tempora
                    consectetur minima ipsum sunt at alias ex. Minus facilis
                    dolores laudantium. Vel ducimus cupiditate sapiente quasi
                    dolore quis libero id eaque dicta, blanditiis voluptatum
                    commodi maiores impedit quidem assumenda nam labore nobis at
                    rem, quo quos, vero qui? Nemo, repellat itaque. Error, minus
                    eaque odio, eos quaerat dolores distinctio unde vitae
                    voluptatem itaque aliquam, ipsum iste accusantium reiciendis
                    numquam! Harum officia mollitia rem animi fuga, voluptates
                    quia. Quos deserunt natus ea? Explicabo ipsum, at enim
                    itaque accusantium provident dolorem sit asperiores facilis
                    quaerat iure earum aliquam odio illum quis beatae deleniti
                    cumque natus eos repudiandae! Sint magnam quos blanditiis
                    praesentium quibusdam. Similique numquam nobis molestiae eos
                    unde eius enim, esse iusto sed quasi praesentium aliquam
                    dolores voluptate obcaecati quas eligendi modi, ratione
                    tempore culpa explicabo deleniti quis sit cum. Perferendis,
                    libero! Enim iste quas sit eligendi cumque at voluptatum
                    ipsam laboriosam dolorum. Dignissimos, excepturi aliquam
                    corporis blanditiis architecto quidem incidunt? Nemo commodi
                    quisquam inventore similique voluptas qui accusantium
                    pariatur. Veniam, aperiam. Ullam perspiciatis fuga
                    praesentium voluptate aspernatur vel ipsum ducimus minima,
                    amet possimus rem repellendus provident mollitia eius,
                    fugiat veritatis et. Perspiciatis voluptate temporibus
                    pariatur minus necessitatibus maiores iste mollitia vel.
                    Voluptatem sint quis ratione, iure labore itaque sit ex? Sit
                    reiciendis maiores beatae sequi, facere eum iure amet
                    obcaecati molestias repellat exercitationem eos. Delectus
                    illum aliquid sequi earum explicabo repudiandae. Officia
                    excepturi nobis nostrum perferendis possimus, earum
                    doloribus sunt asperiores reprehenderit aut, odit,
                    reiciendis optio dolores consequatur facere. In animi
                    voluptatibus aspernatur eum veritatis error doloribus
                    cumque. Molestias, consectetur blanditiis. At amet explicabo
                    ipsam adipisci tempora minima nostrum debitis laudantium
                    nam, corporis sunt placeat dolor esse doloremque omnis
                    quaerat soluta repudiandae voluptatem consectetur deleniti
                    temporibus delectus odio. Illum, ab. Incidunt. Voluptas,
                    saepe dolor quas hic pariatur omnis esse quia assumenda
                    nulla est doloremque amet debitis aperiam eligendi
                    voluptatem, praesentium vel repellendus illum, soluta quae
                    molestiae exercitationem. Aut ratione voluptatibus modi.
                    Odit eveniet necessitatibus, ea repellat ex recusandae iste
                    exercitationem asperiores reprehenderit quos, iusto pariatur
                    aut excepturi laboriosam vitae quaerat voluptatibus non
                    voluptatum dolorem nisi rerum. Corrupti unde laboriosam vel
                    culpa! Illo, beatae perferendis nisi illum veritatis
                    officiis sunt? Doloribus earum sint delectus deserunt sed
                    temporibus dolor illum. Necessitatibus, cupiditate! Minima
                    architecto dolorum repellat totam. Voluptatem illum
                    explicabo a rem repudiandae! Illo natus fugiat in vitae
                    sequi laborum omnis qui maiores, tenetur facere possimus.
                    Quibusdam repellendus distinctio nulla doloribus, impedit, a
                    esse tempore facilis consectetur facere perspiciatis
                    cupiditate cum voluptatibus animi. Tenetur reprehenderit
                    ratione quo quaerat. Ipsum repudiandae eum culpa ipsam
                    eveniet sapiente incidunt, vel veritatis laborum tenetur
                    voluptas veniam iste odio provident! Ducimus culpa
                    temporibus porro harum quod dolor architecto. Sint vitae
                    assumenda consectetur, similique illum quia. Itaque eaque
                    fugit eius eum repellendus molestiae. Nobis fugit,
                    voluptatem accusamus vero temporibus commodi consequuntur
                    rerum, excepturi eos, neque sint facilis. Ad, repellendus?
                    Qui reiciendis illo cum cupiditate suscipit cumque sit quo
                    unde aliquam hic exercitationem autem blanditiis dignissimos
                    dolor, corrupti velit reprehenderit, quod magni ipsa
                    mollitia ea officia quos sed! Et, officiis? Voluptatem aut
                    non beatae sed iusto voluptates excepturi ipsa animi
                    nesciunt officiis nobis sint blanditiis, accusantium
                    tempora. Consectetur, accusamus enim consequatur
                    exercitationem dolorum modi autem corrupti ex nam rem! Eius?
                    Culpa earum illum at id animi, magni ipsa. Adipisci illum
                    amet architecto est dolorum excepturi, veniam laboriosam?
                    Eveniet, delectus beatae quia atque fuga ducimus laboriosam
                    sunt itaque alias nihil. Numquam. Architecto totam,
                    voluptatum tempora modi explicabo tempore nihil repudiandae
                    ab. Ratione voluptatum nisi culpa, tempore consequuntur quis
                    corrupti beatae et impedit, pariatur ut quaerat
                    reprehenderit ipsam! Et soluta ex quae. Dolores, voluptas
                    mollitia recusandae id quibusdam dolorum reiciendis eum
                    minima pariatur iusto laborum similique cum. Consequuntur
                    sapiente repudiandae non vitae quia. Voluptas consequuntur
                    consequatur sequi ipsa rerum optio, facere assumenda! Beatae
                    dolorem error, laborum facilis nisi harum, excepturi earum
                    sint libero aliquid sit exercitationem, totam quae! Quos
                    quisquam deleniti delectus consequuntur soluta! Porro,
                    molestiae! Corporis perferendis blanditiis tempore neque
                    reprehenderit! Iure accusamus quasi maiores cumque non, ut
                    rem qui ipsum corrupti delectus, facilis animi. Dolor,
                    fugiat, praesentium, harum accusamus iste dicta ullam
                    nostrum quae debitis cupiditate non laudantium molestias
                    suscipit! Culpa error nobis ipsam? Ex quis quae saepe
                    doloribus amet quisquam nisi repudiandae quia ullam,
                    voluptate impedit labore quo odio iste. Neque eaque iure
                    aliquid animi natus vero officia numquam! Fugit voluptate
                    doloribus magnam sunt accusamus corporis, at aperiam ut
                    totam provident incidunt, dolorum accusantium animi magni a
                    cum quas labore quia laudantium voluptatum tempore! Alias
                    officia perferendis unde quos! Eligendi sequi beatae esse
                    consectetur ut, doloribus debitis totam corrupti
                    consequuntur tenetur nam earum distinctio quaerat impedit
                    reprehenderit possimus atque, repudiandae officia, assumenda
                    sunt accusantium vitae accusamus saepe. Pariatur,
                    accusantium? Beatae culpa molestias numquam qui est incidunt
                    dolores quidem obcaecati ex ipsa, sint nobis laudantium
                    quaerat expedita deleniti? Voluptatibus distinctio labore
                    reiciendis. Suscipit at error est minima voluptates,
                    exercitationem omnis. A, exercitationem cupiditate? Enim
                    ducimus non asperiores minima a placeat iste quo officiis
                    commodi ut nemo quasi, eum, velit dolores cupiditate!
                    Aliquam, ipsam fugiat. Aliquid quibusdam sed reprehenderit
                    facilis velit? Iure beatae at tempora ratione repellat
                    perferendis possimus non quo soluta vel, expedita tenetur
                    doloribus ad minima corporis ipsum rerum saepe laborum harum
                    fuga nobis illum! Ullam accusamus ea amet! Ducimus natus
                    molestiae aspernatur sed et unde aliquam architecto,
                    voluptatum ea rem reiciendis vel eveniet adipisci ab quam
                    tempora culpa, consequatur labore quae expedita? Nostrum
                    quisquam suscipit eos dicta aut? Porro repellendus, veniam
                    quis rem eos, corporis nemo eum enim tempore, rerum dolore
                    eaque vel cupiditate molestias! Sint sed neque eaque nostrum
                    tempora exercitationem doloremque, distinctio nihil dolorum
                    alias laborum? Laborum, error rem inventore ipsa doloribus
                    dolores eveniet ad laudantium, alias quisquam molestiae
                    eligendi distinctio quod maxime placeat voluptate minima
                    quidem praesentium, ab nostrum animi. Corrupti repellendus
                    voluptas eveniet voluptatum. Laudantium ipsam ipsa animi
                    ullam minus sapiente quis sint soluta autem aut dolorum
                    fuga, dolorem officia, minima modi enim provident quasi
                    recusandae perspiciatis et adipisci deserunt sequi. Optio,
                    et nisi. Corporis tempore ipsum nulla, quisquam architecto,
                    excepturi aut impedit maiores earum suscipit unde aspernatur
                    natus quibusdam, aperiam et. Vitae incidunt laborum
                    provident rem omnis vero odit deleniti dicta sequi facere.
                    Commodi quibusdam hic consequuntur doloremque, architecto
                    exercitationem incidunt nemo ab molestiae doloribus dolores
                    aliquam sed delectus libero mollitia vel rem ad! Iure,
                    maxime recusandae. Sed corrupti sint corporis commodi
                    temporibus. Accusamus pariatur praesentium hic quod est nam
                    eligendi! At provident ex quis dignissimos iure numquam,
                    maxime saepe, nesciunt accusantium excepturi sunt rem nisi
                    magnam facere! Sit ex voluptatum dolor vel. Officia
                    temporibus delectus aliquam aliquid maiores iure deserunt
                    atque eligendi, voluptatem repellat itaque. Impedit
                    voluptatibus cum eligendi excepturi quasi ducimus quae,
                    veniam possimus hic praesentium quia, provident minus,
                    officia illum. Cupiditate, repudiandae molestiae sed quasi
                    deserunt impedit, facere iusto tempore odio fuga eveniet
                    sapiente accusamus. Odio, ullam veritatis quis, libero
                    reiciendis alias voluptate omnis perspiciatis fuga quaerat,
                    esse exercitationem cupiditate! Officia et at cumque
                    incidunt. Rem totam nulla iste debitis vel aliquid accusamus
                    necessitatibus maiores officia ratione sit esse harum
                    laborum veniam reprehenderit asperiores, recusandae fugiat,
                    nam provident. Et, inventore. Aperiam dicta ratione facilis
                    animi, amet perferendis qui odit ipsam, sed autem optio
                    doloremque repellendus distinctio molestiae molestias
                    similique et! Fugit aspernatur fugiat ipsum optio quam
                    mollitia suscipit aperiam illum? Aliquam itaque sed
                    blanditiis maiores tempora iste, ipsa quisquam iure fuga
                    dolores architecto, necessitatibus dolorem quo vero repellat
                    saepe in consectetur, voluptatem ullam quas. Adipisci
                    cupiditate cum illum nisi ad. Consectetur reiciendis
                    repellat et. Id adipisci expedita veniam corrupti a dolorem,
                    eligendi rem dolores quis vitae temporibus magnam earum ex
                    eos nostrum. Illo repellat, sunt tempora mollitia suscipit
                    assumenda earum! Velit qui harum pariatur et, dolore
                    voluptas obcaecati iusto! Quasi, minus ad! Praesentium ipsa
                    delectus vero nam velit mollitia ut quo sunt! Fuga, ab nisi?
                    Quod quis rem molestiae dolores? Exercitationem est quia
                    ducimus repudiandae nesciunt corporis dolore assumenda
                    molestias unde, voluptates eum ad illum repellat amet ipsa
                    ullam a deleniti cumque obcaecati iste. Ducimus
                    exercitationem vero culpa deleniti quidem. Non, quam
                    voluptatibus repellat recusandae quaerat quidem dolores
                    tempora atque. Dolore blanditiis ipsum assumenda dolores,
                    aliquid obcaecati possimus soluta, autem distinctio
                    voluptatem deserunt repellat, sit earum nesciunt eaque?
                    Facere, maiores. Mollitia obcaecati modi ipsam molestiae
                    pariatur eveniet alias. Exercitationem enim explicabo
                    laudantium animi, odit sed ea voluptates modi quasi velit
                    officiis voluptas nemo ad eligendi saepe. Fugiat id esse
                    corporis! Labore autem iusto quibusdam enim molestias.
                    Debitis aspernatur minima nihil dolorem voluptatum
                    cupiditate laboriosam, iure, quisquam sed praesentium quae
                    nesciunt numquam! Perferendis labore nulla quis ab magnam
                    ipsa possimus cum. Corrupti quia odio iusto assumenda
                    placeat qui laboriosam reprehenderit suscipit minus minima
                    ipsam, voluptatum molestias, impedit facilis, autem eligendi
                    sit sunt aperiam! Accusantium, dolorem beatae est culpa
                    cumque ullam voluptate. Minima praesentium voluptas ipsum
                    saepe quas corporis id alias quod libero ad nisi quisquam
                    vel consectetur sed consequatur doloribus molestiae
                    assumenda, rem quia. Earum quidem amet pariatur quo
                    repudiandae. Sit! Itaque exercitationem officia esse
                    provident deleniti aperiam alias eaque illum aut, eos
                    possimus libero laudantium, sunt sint vel dolorum corporis
                    vitae pariatur sit numquam distinctio id modi minus. Ab,
                    delectus! Vero distinctio, odit nulla temporibus quis
                    corporis natus quae est cumque animi accusantium vitae
                    molestias, blanditiis debitis eos libero! Cumque voluptates
                    voluptatum dolorum repellat exercitationem eaque dolor,
                    dicta consequatur adipisci! Earum error atque dignissimos
                    sunt libero! Soluta nisi aliquid minus, similique
                    consectetur iusto! Sit iusto incidunt nobis fugiat et est
                    voluptatum dolorem dolore, officia assumenda doloremque ipsa
                    rem error voluptatem. Possimus expedita consequatur
                    blanditiis deserunt cupiditate tenetur reiciendis vero ad,
                    qui voluptas animi explicabo tempora dolorum necessitatibus
                    reprehenderit minus nam facilis. Nostrum delectus labore
                    libero cupiditate, odio saepe. Voluptatum, laudantium?
                    Aperiam, nesciunt veritatis sapiente id recusandae excepturi
                    molestias voluptas illum facere! Maxime at saepe odio
                    accusamus rem enim, adipisci provident similique accusantium
                    culpa illo, quae impedit magnam voluptates aut dicta.
                    Numquam ipsam, voluptates deserunt repellendus suscipit eum
                    cumque illum! Odit eveniet debitis vel dolores recusandae
                    ratione obcaecati nam tenetur sed enim, quidem, molestias
                    eius, ab ipsa doloribus dolor explicabo quas! Tenetur
                    eligendi consequuntur enim quidem. Totam veniam porro
                    aperiam ex perspiciatis fugit aut suscipit, saepe est
                    voluptatem id assumenda, perferendis odio quisquam ipsam
                    quidem repellat, natus doloremque. Neque, temporibus modi?
                    Nulla est impedit nihil dolores iure ipsa laborum, facere
                    nesciunt, sint ex ut maxime, distinctio consequuntur!
                    Perferendis porro, sapiente ullam numquam optio, fuga minus
                    reprehenderit nostrum saepe repudiandae, quia ipsum. Sed
                    aspernatur cupiditate exercitationem nisi nihil, dolorum
                    provident numquam velit aliquam. Eaque deserunt delectus
                    optio pariatur, dolore ex, impedit molestiae provident,
                    possimus assumenda blanditiis ducimus unde error. Eos, eum
                    quae. Perferendis ut, enim tempore aliquid soluta hic rem
                    veritatis voluptatum quidem, modi labore impedit earum autem
                    deleniti maiores, repudiandae error porro? Hic perspiciatis
                    officiis tempora inventore nihil quidem esse ipsa. Nobis
                    excepturi vero dolorum animi voluptatibus facere beatae
                    quasi consequuntur ipsum ab repellat fuga, distinctio
                    laboriosam ullam ipsam aspernatur? Voluptatem sapiente
                    inventore ut quisquam labore magnam mollitia laboriosam
                    architecto possimus? Aperiam ducimus soluta beatae? Autem
                    dolorem mollitia, impedit aperiam aut omnis tempore libero
                    explicabo dignissimos, sapiente quod in nesciunt cum cumque.
                    Ad sunt facilis deleniti optio alias illo inventore
                    temporibus. Reiciendis ipsam dolor mollitia quia vel at vero
                    debitis molestias laudantium, cumque nisi? Iste libero eius
                    nisi ea! Ullam, repellendus sed. Et harum fugit amet
                    doloribus quam molestiae adipisci. Labore! Vel quasi
                    corrupti sed officiis cumque ipsa commodi perferendis quos
                    possimus enim. Et praesentium rem debitis sequi accusantium,
                    eum enim repellat? Dolore, ullam exercitationem. Quasi
                    officia explicabo est exercitationem quos. Distinctio nobis
                    voluptas ex dolores, harum porro saepe impedit, perspiciatis
                    molestiae ab esse repudiandae accusantium neque quibusdam.
                    Asperiores eligendi cupiditate ea odio ipsa quibusdam
                    beatae, deleniti nesciunt sit sed at! Minima, rem quos!
                    Sequi, velit. Provident dolor, dignissimos tempora placeat
                    quam blanditiis consequatur. Earum, consequatur? Incidunt a
                    consequuntur tenetur minima obcaecati! Quasi error
                    blanditiis voluptate commodi totam, labore mollitia hic! Et
                    corporis consequatur cupiditate sapiente temporibus ducimus
                    recusandae ab quia vel tempora quis magni nostrum aut
                    officiis magnam non quasi quam consectetur odit debitis
                    dolores, sunt doloribus blanditiis accusantium. Facilis.
                    Debitis veritatis quaerat doloremque quam perferendis, quos
                    facere? Perferendis doloribus molestias, dolor assumenda
                    cupiditate doloremque ipsum, velit sapiente nam, accusamus
                    in? Culpa cum saepe esse excepturi, eum quos quod adipisci!
                    Veniam, qui facilis tempora ullam sapiente distinctio porro
                    numquam odio dolorem animi asperiores nostrum tenetur
                    eveniet non? Totam atque sed, corrupti molestiae quidem odio
                    a libero, dignissimos explicabo autem ex. Doloribus, nam!
                    Expedita voluptatem corporis sit, quasi, tenetur doloribus
                    amet dolorem sapiente earum doloremque officiis? Soluta
                    provident eveniet, nostrum impedit recusandae dolorem
                    commodi ratione, animi dolor voluptatibus cupiditate quo
                    autem? Eos minima quas recusandae consectetur facilis
                    molestiae, iste eum, sunt quaerat, velit minus voluptate
                    placeat id consequatur. Repellendus maiores autem ipsum
                    consectetur similique tempore, dolores eligendi laudantium
                    fugiat soluta facilis? Asperiores eum sapiente cum rem, eos
                    sequi molestias error accusantium. Quia eveniet aut, enim
                    neque aspernatur expedita odio culpa veniam officia
                    obcaecati est. Libero, voluptatibus? Quo quisquam earum
                    reprehenderit assumenda. Assumenda officia vitae ratione
                    deserunt corporis inventore dicta corrupti odio, iste
                    veritatis ex eveniet doloribus qui enim dolore blanditiis
                    nostrum fugiat soluta. Cum minima id quidem laboriosam rem
                    veritatis dignissimos! Ratione deleniti nesciunt impedit
                    totam ipsum adipisci consequuntur rem quas laborum soluta
                    sed nam rerum dolorum tenetur, aut voluptates alias ea?
                    Numquam ex dolorum vitae ut molestias quo sit minus? Laborum
                    dolor eius facilis fugiat necessitatibus eaque veritatis
                    quidem. Nesciunt voluptatibus sint veniam incidunt nobis
                    voluptas voluptates! Tempora asperiores harum aperiam,
                    quisquam reprehenderit obcaecati quam. Delectus labore
                    repellendus eaque optio! Vero ea quos id officia explicabo
                    aliquam exercitationem officiis eaque earum accusantium
                    beatae commodi impedit fuga, expedita corrupti optio
                    corporis doloremque aut itaque assumenda esse animi sequi
                    minus quam? Enim. Suscipit ab facilis esse eligendi sequi
                    omnis tenetur, aperiam quisquam nihil fugit odio iusto
                    optio, incidunt atque eaque obcaecati molestias laboriosam
                    nemo exercitationem quibusdam. Unde neque modi minima
                    ratione iure! Velit sint praesentium quia esse a voluptas,
                    officia eos inventore et, accusantium, quod provident porro
                    aspernatur ad nam veritatis nesciunt consequatur sequi
                    numquam. Aliquid eligendi soluta repudiandae dolore tempora
                    voluptatum. Temporibus fuga ad dolorum sequi placeat. Illo
                    itaque laudantium iste tempore repellendus, a quo
                    accusantium ut, odio ullam tempora sint asperiores ipsa
                    possimus incidunt nam atque mollitia deserunt cupiditate
                    animi? Nemo error, quisquam minima dolore alias vero saepe
                    voluptatem soluta quam blanditiis nam provident molestias
                    voluptas magnam pariatur odio? Dolores corporis architecto
                    fuga molestiae! Fuga eligendi adipisci possimus obcaecati
                    minima? Necessitatibus officia qui quod, omnis maiores
                    inventore fuga repellat ducimus vero cumque fugit recusandae
                    expedita explicabo dolore, voluptatibus veritatis iusto
                    nostrum quo debitis quos aperiam adipisci tenetur obcaecati
                    veniam. Perferendis? Nostrum eveniet et debitis asperiores
                    similique quidem rem rerum facilis, voluptate totam. Sint ab
                    temporibus rem quidem tempora saepe consectetur aliquam qui
                    enim perferendis, debitis deserunt fuga a, nihil nam!
                    Expedita sit, rem aspernatur nihil vel laborum praesentium
                    tempora nesciunt natus quasi magnam ipsam? Id ipsum corporis
                    consequatur, harum quos at vel dolore tempora non adipisci
                    magni incidunt itaque eaque! Id ab esse facere tempora ad
                    voluptate, numquam, tempore at consequuntur a voluptatibus.
                    Itaque blanditiis incidunt porro! Harum totam ea at
                    corporis. Quidem, accusantium illum esse rem voluptates
                    eveniet vitae? Magni a in distinctio sint, voluptas
                    voluptatum omnis dolor ea reiciendis, consequatur nostrum
                    totam esse eaque, consectetur fugiat eveniet maxime cum
                    molestias. Dolor numquam molestiae at aliquid eum
                    dignissimos error. Ratione, sed, assumenda excepturi beatae
                    architecto atque repudiandae minima ipsum illo praesentium
                    possimus, mollitia alias. Laborum dicta facilis dolorem
                    consequatur consectetur dolores assumenda sed enim minima
                    maiores ab, facere sint! Hic quisquam velit error corrupti,
                    laborum corporis nemo. Accusantium suscipit atque hic
                    architecto animi cupiditate impedit minima corporis tempora
                    eos cum eaque perspiciatis, accusamus, ipsum vitae a nam
                    illo corrupti. Fugiat suscipit consequuntur rerum quas sit
                    ad illum minus repudiandae voluptatem enim? Vero dolore ea
                    asperiores numquam nobis labore soluta voluptates error
                    praesentium perferendis? Et quisquam quo consequatur
                    accusantium veniam? Nihil possimus explicabo ut aut,
                    necessitatibus, facilis quos ipsa libero amet in molestias,
                    labore voluptatibus odio laborum cum accusamus deleniti
                    neque consectetur ullam modi corrupti illum id. Temporibus,
                    deleniti non. Expedita ex rem reprehenderit accusamus totam
                    asperiores? Quos, dolorum et eius necessitatibus aut quae
                    rerum vero. Corrupti expedita nam odio. Fugiat deserunt
                    incidunt totam veritatis debitis id. Similique, dignissimos
                    quasi! In quam inventore possimus nesciunt sunt nemo
                    officiis eveniet corporis unde facilis voluptate, distinctio
                    vero, repellat consectetur nihil doloremque veniam.
                    Consequatur veniam quasi voluptates quidem praesentium ad
                    quod, vero cumque. Tenetur, nihil? Recusandae magnam non
                    fugit accusantium dolorum quidem, nihil totam harum fuga
                    quam nemo error earum quia aliquam consequatur dignissimos
                    reprehenderit officiis ducimus quae sapiente sunt id laborum
                    doloremque. Praesentium repudiandae earum quo quod eos odit
                    facere dolorum optio amet dicta! Officiis, voluptatum
                    consequuntur, magni suscipit ex error, eveniet perferendis
                    voluptates voluptatem itaque nobis deserunt aspernatur
                    molestias delectus quam? Odit autem nihil in, voluptates
                    tempora harum cum nesciunt vitae adipisci necessitatibus,
                    ratione neque recusandae facilis cumque aperiam omnis
                    perferendis porro incidunt officiis ab ex, quas magnam. Ut,
                    aperiam voluptas. Culpa aliquid quidem at, voluptatibus
                    repellat fuga temporibus ipsam maiores esse? Ipsa cumque
                    reiciendis autem consequuntur tempora officia aliquid
                    voluptates inventore. Neque quia rem blanditiis quos tempore
                    qui doloribus magni. Pariatur cum voluptates officiis vitae
                    error unde velit laborum, a doloremque, sint corrupti fugiat
                    veritatis quia ipsam quaerat ab alias, optio architecto
                    iste! Ipsa distinctio consequatur explicabo quidem dolorum.
                    Magni. Doloribus, quidem ratione adipisci mollitia in error
                    neque aspernatur culpa molestiae ullam. Odio magni
                    voluptates mollitia laborum facere magnam a ex dolorum neque
                    ducimus. Quis asperiores hic exercitationem quaerat officia.
                    Quas incidunt consectetur quisquam dignissimos ea ut a
                    adipisci assumenda sit excepturi quaerat perferendis,
                    voluptas enim libero saepe beatae tenetur amet earum.
                    Deleniti voluptatibus quidem iste nulla atque et fuga. Quae,
                    incidunt facilis est illum molestias consequuntur voluptate,
                    eaque excepturi totam ipsam aspernatur at blanditiis non.
                    Animi inventore veritatis ad rem dolorem maiores, impedit
                    molestias deleniti, tempora, repudiandae vitae facere! Nemo
                    hic, rem provident maiores enim adipisci officia aperiam
                    dolores itaque architecto corrupti repellendus doloremque
                    repudiandae nihil? Blanditiis dignissimos eaque, aperiam
                    quos molestiae enim neque pariatur eum, recusandae at
                    eveniet.
                </p>
            </div>
        </div>
    );
}
