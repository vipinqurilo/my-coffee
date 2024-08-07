import bgImg from '../../assets/about-market/about-bg.png'
import sign from '../../assets/about-market/sign-1.png'
import img1 from '../../assets/about-market/about-icon-1.png'
import img2 from '../../assets/about-market/about-icon-2.png'
import img3 from '../../assets/about-market/about-icon-3.png'
import img4 from '../../assets/about-market/about-icon-4.png'
const AboutSection = () => {
  const data = [
    {
      image: (
        <img
          src={img1}
          alt="The best World sorts"
        />
      ),
      text1: "The best World sorts",
      text2:
        "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.",
    },
    {
      image: (
        <img
          src={img2}
          alt="Professional baristas"
        />
      ),
      text1: "Professional baristas",
      text2:
        "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies",
        
    },
    {
      image: (
        <img src={img3}  alt="Many points of sale"/>
      ),
      text1: "Many points of sale",
      text2:
        "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.",
    },
    {
      image: (
        <img src={img4}  alt="24/7 fast delivery"/>
      ),
      text1: "24/7 fast delivery",
      text2:
        "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies",
    },
  ];


  return (
    <div className="relative w-full min-h-screen bg-white flex justify-center  items-center 2xl:px-[10%] ">
      <div className="w-[90%]  min-h-[90%] md:flex justify-between items-center">
        <div className="  md:w-1/2 w-full bg-contain bg-center bg-no-repeat  h-[500px] flex justify-center items-center flex-wrap " style={{backgroundImage:`url(${bgImg})`}}>
          <div className="  w-[90%] h-[90%] " >
            
            <p className="text-primary text-xl font-normal m-0 ">Who we are</p>
            <p className="text-6xl font-bold m-0">About market</p>

            <div className="bg-opacity-25 w-[100%] h-[150px] mt-[60px] text-[22px]">
              Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id
              vehicula odio. Donec pulvinar tellus egetmagna aliquet ultricies.
              Praesent gravida hendrerit ex, nec eleifend sem convallis vitae.
            </div>
            <div className=" flex   py-10">
              <img
                width="133"
                height="74"
                src={sign}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="md:grid mx-4 md:mx-1/2 md:w-1/2 gap-5 md:p-10  grid-cols-1 md:grid-cols-2 ">
           {data && data.map((item)=>(
              <div className='my-10 md:my-0' key={item}>
              {item.image}
                <h1 className='text-black text-2xl font-bold my-4'>{item.text1}</h1>
                <p>{item.text2}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

