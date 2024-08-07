import discountimage from "../../assets/discount/coffe_back.png";
import dicountcard from "../../assets/discount/card.png";
import discountbackgorundimage from "../../assets/discount/discount-bg.png";
const Diccountpage = () => {
  return (
    <div className="  w-full h-screen  bg-white flex justify-center  items-center">
      <div className="md:flex  items-center justify-center  w-[90%] bg-gray-50    max-h-screen">
        <div
          className="  md:w-[50%]  h-[100%] bg-cover py-10 md:py-auto"
          style={{ backgroundImage: `url(${discountbackgorundimage})` }}
        >
          <div className="  w-[100%] h-[30%]   flex justify-center items-end      ">
            <div className="  w-[100%]  text-center      ">
              <p className="text-2xl font-bold  text-primary">Special offer</p>
              <p className=" text-6xl font-bold"> Get your discount </p>
            </div>
          </div>

          <div className="   w-[100%] h-[38%]  flex items-center  justify-center my-4 ">
            <img src={dicountcard} alt="Coffee Beans" className=" " />
            <br></br>
            <div className="bg-silver "></div>
          </div>

          <div className="  w-[100%] flex  justify-center text-center flex-wrap ">
            <div className="  w-[60%]">
              Morbi malesuada dui in iaculis lacinia. Duis laoreet ut liberonec
              tincidunt. Maecenas a eros finibus, condimentum tortoreget, auctor
              nunc. Aenean a efficitur leo.
            </div>
            <div className="w-[60%]   mt-10">
              <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700  w-[150px] border-none">
                Get
              </button>
            </div>
          </div>
        </div>

        <div className="bg-perpal w-[50%] hidden md:block   h-[100%]">
          
          <img src={discountimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Diccountpage;
