import { useDispatch, useSelector } from "react-redux";
// import frame7 from "../../assets/Frame 7.png";
// import frame8 from "../../assets/Frame 8.png";
// import frame9 from "../../assets/Frame 9.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { addToCart, removeFromCart } from "../../redux/userSlices/cartSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constran";

// const data = [
//   {
//     id: 1,
//     title: "Natural Plants",
//     img: frame7,
//     price: "130$",
//   },
//   { id: 2, title: "Natural Plants", img: frame8, price: 20 },
//   { id: 3, title: "Natural Plants", img: frame9, price: 50 },
//   { id: 4, title: "Natural Plants", img: frame7, price: 60 },
//   { id: 5, title: "Natural Plants", img: frame8, price: 100 },
//   { id: 6, title: "Natural Plants", img: frame9, price: 10 },
//   { id: 7, title: "Natural Plants", img: frame7, price: 5 },
//   { id: 8, title: "Natural Plants", img: frame8, price: 15 },
// ];
const AllProducts = () => {
  // const products = useSelector((state) => state.products);
  const [isLoading, setIsloading] = useState(false);
  const [product, setProdect] = useState([]);
  // const cart = useSelector((state) => state.cart);
  // console.log(cart.length, "???");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(`${API_BASE_URL}/products/getAllProducts`);
        setProdect(res.data);
      } catch (err) {
        console.log(err);
        setIsloading(false);
      }
    };

    getProduct();
    setIsloading(false);
  }, []);

  console.log(product.products, "??");
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log(item, "???????????????");
  };
  const handleRemoveToCart = (id) => {
    dispatch(removeFromCart(id));
  };

  console.log(product, "product");

  if (isLoading) {
    return <h1 className="text-red-500">Loading...</h1>;
  }
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto py-10 grid md:grid-cols-4  grid-cols-1 gap-8 pt-20">
        {product?.products?.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:justify-start justify-center "
          >
            <img src={item.img} alt="" />
            <div className="flex md:justify-between md:mx-0 sm:mx-20 gap-4 justify-center pt-5">
              <div>
                <h1 className="text-lg font-medi text-black">{item.title}</h1>
                <p className="text-sm text-gray-500">{item.price}$</p>
              </div>
              <div className="flex flex-row gap-2">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
                >
                  Add to card
                  {/* <FaArrowRightLong className="mx-2" /> */}
                </button>
                <button
                  onClick={() => handleRemoveToCart(item._id)}
                  className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
                >
                  remove to card
                  {/* <FaArrowRightLong className="mx-2" /> */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default AllProducts;
