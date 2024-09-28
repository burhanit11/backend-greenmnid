import frame36 from "../../assets/Frame 36.png";
import frame37 from "../../assets/Frame 37.png";
import frame38 from "../../assets/Frame 38.png";
import { FaArrowRightLong } from "react-icons/fa6";

// const data = [
//   {
//     imge: frame36,
//     title: "Natural Plants",
//   },
//   {
//     imge: frame37,
//     title: "Natural Plants",
//   },
//   {
//     imge: frame38,
//     title: "Natural Plants",
//   },
// ];

const Category = () => {
  return (
    <div className="py-10">
      <h1 className="text-xl text-center font-extrabold tracking-tight text-black md:text-2xl lg:text-4xl">
        Categories
      </h1>
      <p className="text-gray-500 text-center py-5">
        Find what you are Looking for
      </p>
      <div className="bg-primary mt-20">
        <div className="max-w-6xl mx-auto pb-20 grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="-mt-12">
            <img src={frame36} alt="" />
            <h1 className="py-3 text-lg font-semibold text-center">
              Natural Plants
            </h1>
          </div>
          <div className="mt-14 flex flex-col justify-center items-center">
            <img src={frame37} alt="" />
            <h1 className="pt-3 text-lg font-semibold text-center">
              Natural Plants
            </h1>
            <p className="text-gray-500 text-center py-3">
              Easiest way to healthy life by buying your favorite plants
            </p>
            <button className="bg-white flex justify-center font-medium items-center text-black py-3 px-4 rounded-md text-md">
              Explore <FaArrowRightLong className="mx-2" />
            </button>
          </div>
          <div className="-mt-12">
            <img src={frame38} alt="" />
            <h1 className="py-3 text-lg font-semibold text-center">
              Natural Plants
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
