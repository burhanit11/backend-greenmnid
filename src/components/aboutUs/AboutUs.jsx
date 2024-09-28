import vector1 from "../../assets/Vector1.png";
import vector2 from "../../assets/Vector2.png";
import vector3 from "../../assets/Vector3.png";

const data = [
  {
    img: vector1,
    title: "Large Assortment",
    descrip:
      "we offer many different types of products with fewer variations i each category.",
  },
  {
    img: vector2,
    title: "Large Assortment",
    descrip:
      "we offer many different types of products with fewer variations i each category.",
  },
  {
    img: vector3,
    title: "Large Assortment",
    descrip:
      "we offer many different types of products with fewer variations i each category.",
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto pb-10  ">
      <h1 className="text-xl text-center font-extrabold tracking-tight text-black md:text-2xl lg:text-4xl">
        About Us
      </h1>
      <p className="text-gray-500 text-center py-5">
        Order now and appreciate the beauty of nature
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-5 gap-8">
        {data.map((item, i) => (
          <div className="flex flex-col justify-center items-center" key={i}>
            <div className="h-24 w-24 rounded-full bg-primary flex justify-center items-center">
              <img src={item.img} alt="" />
            </div>
            <h1 className="text-black text-center text-xl font-bold py-2">
              {item.title}
            </h1>
            <p className="text-gray-500 text-center">{item.descrip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
