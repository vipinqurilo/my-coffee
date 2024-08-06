import imageloader from "../../assets/loading/loader animation.gif";

const HomeLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={imageloader} className="w-10" />
    </div>
  );
};

export default HomeLoader;
