import img1 from "../../assets/our-story/coffee-3120750_640.jpg";
import img2 from "../../assets/our-story/coffee-4591159_640.jpg";
import img3 from "../../assets/our-story/coffee-7121939_640.jpg";
import img4 from "../../assets/our-story/coffee-791045_640.jpg";
const OurStory = () => {
  const data = {
    headingOne: "This is",
    headingTwo: "OUR STORY",
    description:
      "Lorem ipsum aute enim pariatur ea culpa nulla ut laborum sint nisi laborum culpa ea enim do qui ea deserunt amet proident cillum tempor fugiat magna aliquip sed cillum ullamco sit adipisicing ut velit nulla aliqua.",
  };
  return (
    <div className="w-full  h-[80%] lg:flex  bg-black 2xl:px-[10%] 2xl:py-[5%] ">
      <div className="w-full my-20 lg:my-0 lg:w-1/2 flex flex-col justify-center items-center text-white text-center px-[10%]">
        <h1 className="font1 text-[120px] my-0 py-0  leading-[.6] text-primary">
          {data.headingOne}
        </h1>
        <h1 className="text-6xl text-white text-[50px] font-[500] capitalize w-2/3 ">
          {data.headingTwo}
        </h1>
        <p className="my-10">{data.description}</p>
      </div>
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-5 my-20 px-10 ">
        <div className=" rounded-xl">
          <img src={img1} className="rounded-2xl " alt="" />
        </div>
        <div className=" rounded-xl    ">
          <img src={img2} className="rounded-2xl " alt="" />
        </div>
        <div className=" rounded-xl    ">
          <img src={img3} className="rounded-2xl " alt="" />
        </div>
        <div className=" rounded-xl    ">
          <img src={img4} className="rounded-2xl " alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
