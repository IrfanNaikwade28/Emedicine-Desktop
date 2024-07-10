import {HealthCard} from "../components/healthCard";
import cardImg1 from "../assets/health_problems/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png";
import cardImg2 from "../assets/health_problems/629aaf65-515f-4069-b730-28618f78597b.png";
import cardImg3 from "../assets/health_problems/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png";
import cardImg4 from "../assets/health_problems/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png";
import cardImg5 from "../assets/health_problems/a1af8b43-2836-483d-8709-99eff1cc6f70.png";
import cardImg6 from "../assets/health_problems/96f9ed8a-ba62-426c-bd66-6762f40f3370.png";
import cardImg7 from "../assets/health_problems/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png";
import cardImg8 from "../assets/health_problems/8051e79c-6152-440e-b402-8d1ba8d7c82e.png";
import cardImg9 from "../assets/health_problems/1627c0d3-a6ed-470a-8b18-94baa9fdbcfc.png";

export const HealthConcerns = () => {
    return(
        <div className="grid grid-flow-col w-full h-56 bg-white shadow-card mb-10 px-12 overflow-x-scroll hideScroll">
            <HealthCard cardImg={cardImg1} title="Diabetes" />
            <HealthCard cardImg={cardImg2} title="Heart Care" />
            <HealthCard cardImg={cardImg3} title="Stomach Care" />
            <HealthCard cardImg={cardImg4} title="Liver Care" />
            <HealthCard cardImg={cardImg5} title="Bone, Joint & Muscle Care" />
            <HealthCard cardImg={cardImg6} title="Kidney Care" />
            <HealthCard cardImg={cardImg7} title="Derma Care" />
            <HealthCard cardImg={cardImg8} title="Respiratory Care" />
            <HealthCard cardImg={cardImg9} title="Eye Care" />
        </div>
    )
}