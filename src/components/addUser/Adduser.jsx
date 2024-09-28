import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../redux/userSlices/authUser";
import { toast } from "react-toastify";

const Adduser = ({ toggleUser }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  console.log(user, "user");

  const handleUser = (email) => {
    dispatch(removeUser(email));
    toast.success("logout Success!");
    navigation("/login");
  };
  return (
    <div>
      <div className="absolute max-w-xl inset-x-0 fixed  z-50 origin-top-right transform p-2 transition">
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pb-6 pt-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center space-x-2">
                <span className="text-lg font-bold">User Details</span>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={toggleUser}
                  className="inline-flex items-center justify-center rounded-md p-2 text-black bg-primary hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <span className="sr-only">Close menu</span>
                  <IoMdClose className="h-6 w-6 " aria-hidden="true" />
                </button>
              </div>
            </div>
            <button
              onClick={() => navigation("/profile")}
              className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
            >
              View Profile
            </button>
            <button
              onClick={() => handleUser("burhanit11@gmail.com")}
              className="bg-primary hover:bg-primary/80 flex justify-center items-center text-black p-2 rounded-md text-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adduser;
