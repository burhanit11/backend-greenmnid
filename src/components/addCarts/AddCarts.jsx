import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  // addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/userSlices/cartSlice";
import { useNavigate } from "react-router-dom";

const AddCarts = ({ toggleCart }) => {
  const cart = useSelector((state) => state.cart.items);

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const navigation = useNavigate();

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };
  const handleRemoveToCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="absolute max-w-xl inset-x-0 fixed  z-50 origin-top-right transform p-2 transition">
      <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="px-5 pb-6 pt-5">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center space-x-2">
              <span className="text-lg font-bold">Add Carts</span>
            </div>
            <div className="-mr-2">
              <button
                type="button"
                onClick={toggleCart}
                className="inline-flex items-center justify-center rounded-md p-2 text-black bg-primary hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <span className="sr-only">Close menu</span>
                <IoMdClose className="h-6 w-6 " aria-hidden="true" />
              </button>
            </div>
          </div>
          {cart.length > 0
            ? cart?.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:justify-start justify-center "
                >
                  <img src={item.img} alt="" className="h-40 w-40" />
                  <div className="flex md:justify-between md:mx-0 sm:mx-20 gap-4 justify-center pt-5">
                    <div>
                      <h1 className="text-lg font-medi text-black">
                        {item.title}
                      </h1>
                      <p className="text-sm text-gray-500">{item.price}$</p>
                    </div>
                    <div className="flex gap-4">
                      <p>Quantity: {item.quantity}</p>
                      <button
                        className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
                        onClick={() => dispatch(incrementQuantity(item._id))}
                      >
                        +
                      </button>
                      <button
                        className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
                        onClick={() => dispatch(decrementQuantity(item._id))}
                      >
                        -
                      </button>
                    </div>
                    <div className="flex flex-row gap-2">
                      <button
                        onClick={() =>
                          navigation(`/products/cartdetails/${item._id}`)
                        }
                        className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => handleRemoveToCart(item._id)}
                        className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
                      >
                        remove to card
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : "No Cart Added"}
          {cart.length > 0 ? (
            <div className="pt-5  flex justify-between items-center">
              <span>Total Price: {totalPrice}$</span>
              <button
                onClick={() => navigation("/checkout")}
                className="bg-primary px-3 hover:bg-primary/80 flex justify-center items-center text-black py-2 rounded-md text-md"
              >
                Checkout
                {/* <FaArrowRightLong className="mx-2" /> */}
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCarts;
