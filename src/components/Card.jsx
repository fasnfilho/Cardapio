import star_fill from "../images/Star_fill.svg";
import star from "../images/Star.svg";

const Card = ({ coffee }) => {
    return(
        <div className="sm:pb-10">
            <div className="relative">
                <img src={coffee.image} alt="foto-cafe" className="relative rounded-2xl xl:w-[21rem] lg:w-[15rem] sm:w-[16rem]"/>
                {coffee.popular && <div className="absolute top-2 left-2 bg-[#F6C768] rounded-xl xl:w-[5rem] lg:w-[4rem] lg:text-[0.8rem] sm:w-[4rem] sm:text-[0.8rem] text-center">Popular</div>}
            </div>
            <div className="pt-2">
                <div className="flex justify-between">
                    <h3 className="text-[#FEF7EE] xl:text-[1.4rem] lg:text-[1rem] sm:text-[1rem]">{coffee.name}</h3>
                    <h4 className="bg-[#BEE3CC] xl:h-8 xl:w-16 lg:h-5 lg:w-11 sm:h-6 sm:w-12 text-center rounded-md xl:text-[1.3rem] lg:text-[0.9rem] sm:text-[1rem]">{coffee.price}</h4>
                </div>
                <div className="flex justify-between pt-2">
                    {coffee.rating != null ? 
                    <div className="flex items-center">
                        <img src={star_fill} alt="estrela cheia" className="lg:w-6 sm:w-5"/>
                        <h3 className="text-[#FEF7EE] xl:text-[1.3rem] lg:text-[1rem] sm:text-[1rem] xl:pl-2 lg:pl-1 sm:pl-1">{coffee.rating}</h3>
                        <h5 className="text-[#6F757C] xl:text-[1rem] lg:text-[0.8rem] sm:text-[0.7rem] xl:pl-[1rem] lg:pl-[0.2rem] sm:pl-[0.2rem]">({coffee.votes} votes)</h5>
                    </div>
                     :  <div className="flex">
                         <img src={star} alt="estrela vazia" className="xl:w-6 sm:w-5"/>
                         <h3 className="text-[#6F757C] xl:text-[1.4rem] lg:text-[1rem] sm:text-[1rem] pl-2">No ratings</h3> 
                        </div>
                    }
                    {!coffee.available && <div className="text-[#ED735D] xl:text-[1.3rem] lg:text-[1rem] sm:text-[1rem]">Sold out</div>}
                </div>
            </div>
        </div>
    );

};

export default Card;