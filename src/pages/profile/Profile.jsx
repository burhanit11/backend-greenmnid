import user from "../../assets/user.png";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/userSlices/cartSlice";

const Profile = () => {
  const users = useSelector((state) => state.user.user.loggedInUser);
  const order = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleRemoveToCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <Header />
      <h1 className="pt-24 text-center text-xl font-bold text-primary">
        User Infomarmation
      </h1>
      <div className="max-w-4xl flex flex-col items-center justify-center py-10  mx-auto">
        <img src={users?.avatar || user} alt="" className="h-80 w-80" />
        <p className="pt-5">{users.username}</p>
        <h1 className="py-3 text-xl font-medium">{users.fullname}</h1>
        <p>{users.email}</p>
        <p>Islamabad, I-8/2,stret no 53</p>
        <p>Total Orders: {order.length}</p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-10">
          {order.map((item, i) => (
            <div
              key={i}
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
                    onClick={() => handleRemoveToCart(item.id)}
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
      </div>
      <Footer />
    </>
  );
};

export default Profile;
