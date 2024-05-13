import img1 from "./../img/image1.jpg";
import img2 from "./../img/image2.jpg";
import img3 from "./../img/image3.jpg";
import img4 from "./../img/image4.jpg";
import img5 from "./../img/image5.jpg";
import img6 from "./../img/image6.jpg";

import GridCard from "./gridCard";
const BodyContent = () => {
    return ( 
        <>
            <div className="container-fluid bg-dark py-5">
                <div className="container">
                    <h1 className="text-warning my-4">OUR MENU</h1>
                    <div className="row g-5">
                        <GridCard img={img1} title="Appetizer" desc="Start your culinary journey with our irresistible appetizers, crafted to awaken your palate and set the tone for an unforgettable dining experience."></GridCard>
                        <GridCard img={img2} title="Soup" desc="Delight in the comforting warmth and rich flavors of our exquisite soups, crafted to soothe the soul and ignite the palate."></GridCard>
                        <GridCard img={img3} title="Salad" desc="Experience the perfect fusion of freshness and flavor with our refreshing salad soups, a delightful harmony of greens and savory goodness."></GridCard>
                        <GridCard img={img4} title="Dessert" desc="Satisfy your sweet cravings with our decadent desserts, meticulously crafted to delight your taste buds and leave a lasting impression."></GridCard>
                        <GridCard img={img5} title="Wine" desc="Explore a symphony of flavors with our curated selection of fine wines, each bottle a journey of exquisite taste and refinement."></GridCard>
                        <GridCard img={img6} title="Steak" desc="Indulge in culinary perfection with our succulent steaks, expertly prepared to tantalize your taste buds and leave you craving more."></GridCard>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BodyContent;