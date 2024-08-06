const AboutSection = () => {
  const RIghtSidePart = [
    {
      image: (
        <img
          src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/about-icon-1.png"
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
          src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/about-icon-3.png"
          alt="Professional baristas"
        />
      ),
      text1: "Professional baristas",
      text2:
        "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies",
    },
  ];

  const RIghtSidePtwo = [
    {
      image: (
        <img src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/about-icon-2.png"  alt="Many points of sale"/>
      ),
      text1: "Many points of sale",
      text2:
        "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.",
    },
    {
      image: (
        <img src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/about-icon-4.png"  alt="24/7 fast delivery"/>
      ),
      text1: "24/7 fast delivery",
      text2:
        "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies",
    },
  ];

  return (
    <div className="relative w-full h-screen bg-white flex justify-center  items-center 2xl:px-[10%] ">
      <div className="w-[90%]  h-[90%] flex justify-between items-center">
        <div className="  w-[495px] h-[500px] flex justify-center items-center flex-wrap">
          <div className="  w-[90%] h-[90%]">
            
            <p className="text-primary text-xl font-normal m-0 ">Who we are</p>
            <p className="text-6xl font-bold m-0">About market</p>

            <div className="bg-opacity-25 w-[100%] h-[150px] mt-[60px] text-[22px]">
              Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id
              vehicula odio. Donec pulvinar tellus egetmagna aliquet ultricies.
              Praesent gravida hendrerit ex, nec eleifend sem convallis vitae.
            </div>
            <div className=" * flex  mt-[50px]">
              <img
                width="133"
                height="74"
                src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/sign-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="  flex">
          <div className="  w-[300px] h-[500px]">
            {RIghtSidePart.map((elment) => {
              return (
                <>
                  <div className="  w-[95%] h-[50%]">
                    <div className="  w-[100%] h-[25%] text-primary">
                      {elment.image}
                    </div>
                    <div className="  w-[100%] h-[20%] flex items-center  text-[23px]  font-bold ">
                      {elment.text1}
                    </div>

                    <div className="  w-[100%] h-[50%] text-[15.5px]    ">
                      {elment.text2}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="  w-[300px] h-[500px]">

          <div className="  w-[300px] h-[500px]">
            {RIghtSidePtwo.map((elment) => {
              return (
                <>
                  <div className="  w-[100%] h-[50%]">
                    <div className="  w-[100%] h-[25%] text-primary">
                      {elment.image}
                    </div>
                    <div className=" w-[100%] h-[20%] flex items-center  text-[23px]  font-bold">
                      {elment.text1}
                    </div>

                    <div className="w-[100%] h-[50%] text-[16px]   ">
                      {elment.text2}
                    </div>
                  </div>
                </>
              );
            })}
          </div>




          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

//  <div className="bg-metal w-[100%] h-[50%]">

//             </div>
