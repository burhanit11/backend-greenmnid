import { useNavigate, useParams } from "react-router-dom";
import frame7 from "../../assets/Frame 7.png";
import { useDispatch } from "react-redux";

const CartDetails = () => {
  const navigation = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:justify-start justify-center mx-auto max-w-6xl py-10 ">
      <img src={frame7} alt="" className="h-40 w-40" />
      <div className="flex md:justify-between md:mx-0 sm:mx-20 gap-4 justify-center pt-5">
        <div>
          <h1 className="text-lg font-medi text-black">Natural Plants</h1>
          <p className="text-sm text-gray-500">120$</p>
        </div>
        <div className="flex flex-row gap-2">
          <button
            onClick={() => navigation("/products")}
            className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
          >
            Back to Products
          </button>
          <button
            onClick={() => navigation("/checkout")}
            className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
