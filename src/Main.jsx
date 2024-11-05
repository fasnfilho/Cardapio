import fundo from "./images/bg-cafe.jpg";
import Cardlist from "./components/Cardlist";
import sign from "./images/vector.svg";
import { useState } from "react";

function Main(){
    const [selectedButton, setSelectedButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    };

    return(
        <div className=" font-['Dm_Sans'] font-bold bg-[#000000] w-[100%] xl:h-[95rem] lg:h-[90rem] sm:h-[135rem]">
            <img src={fundo} alt="fundo" className="relative w-[100%]"/>
            <div className="bg-[#1B1D1F] flex flex-col justify-center items-center xl:w-[85%] lg:w-[40rem] lg:min-h-[900px] sm:min-h-[700px] absolute xl:top-52 lg:top-32 sm:top-20 xl:left-32 lg:left-48 sm:left-28 rounded-2xl pb-10">
                <div className="relative flex justify-center items-center pt-14">
                    <div className="relative flex flex-col items-center z-10">
                        <h1 className="xl:text-[2.9rem] lg:text-[2.4rem] sm:text-[1.9rem] text-[#FEF7EE]">Our Collection</h1>
                        <p className="text-[#6F757C] xl:text-[1.4rem] lg:text-[1rem] sm:text-[0.9rem] xl:w-[40.5rem] lg:w-[28rem] sm:w-[26rem] text-center">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                    </div>
                    <img src={sign} alt="rabisco" className="absolute top-0 right-0 xl:w-[20rem] lg:w-[17rem] sm:w-[15rem]"/>
                </div>
                <div className="text-[#FEF7EE] xl:text-[1.5rem] lg:text-[1rem] sm:text-[0.8rem] xl:space-x-10 xl:pt-5 xl:pb-16 lg:space-x-4 lg:pb-15 lg:pt-4 sm:space-x-3 sm:pb-12 sm:pt-5">
                    <button className={selectedButton === 1 ? "bg-[#6F757C] rounded-lg xl:w-[10rem] lg:w-[8rem] sm:w-[6rem]" : "bg-transparent xl:w-[10rem] lg:w-[8rem] sm:w-[6rem]"} onClick={() => handleButtonClick(1)}>All Products</button>
                    <button className={selectedButton === 2 ? "bg-[#6F757C] rounded-lg xl:w-[11rem] lg:w-[9rem] sm:w-[7rem]" : "bg-transparent xl:w-[11rem] lg:w-[9rem] sm:w-[7rem]"} onClick={() => handleButtonClick(2)}>Available Now</button>
                </div>
                <Cardlist btn={selectedButton}></Cardlist>
            </div>
        </div>
    );

};

export default Main;