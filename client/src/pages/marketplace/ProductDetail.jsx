import { BsSuitHeart } from "react-icons/bs";
import { RiSubtractFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import image from "../../assets/productDetail.png";
import CollectionCard from "../../components/CollectionCard";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { CartContext } from "../../context/ShopContext";
import { useContext } from "react";
import Breadcrumb from "../../components/BreadCrumb";

export const ProductDetail = () => {
  const { id } = useParams();
  const cart = useContext(CartContext);
 
  const singleProduct = products.find((product) => product.id === parseInt(id));

  const productQty = cart.getItemQuantity(singleProduct.id);

  return (
    <section className="container mx-auto mb-20 mt-[100px]">
      <Breadcrumb/>
      {/* <div className="my-14">hi</div> */}
      <div className="flex border h-1/2 flex-col lg:flex-row">
        <div className="border-r lg:w-1/2 ;">
          <img
            src={singleProduct.image}
            alt={singleProduct.name}
            className="p-4 w-full"
          />
        </div>
        <div className="flex flex-col lg:w-1/2">
          <div className="border-b py-4 px-6 flex justify-between items-center">
            <h3 className="text-3xl font-semibold">{singleProduct.name}</h3>
            {/* <div> */}
            <h5 className="text-lg">{singleProduct.price}</h5>
            {/* </div> */}
          </div>
          <div className="border-b px-6 py-4">
            <p className="text-lg">Creator:</p>
            <span></span>
            <p className="text-sm py-4">Made in Italy</p>
            <p className="text-md py-4">
              Total views:<span className="px-2">1.7k views</span>
            </p>
            <p className="flex gap-4 py-4 items-center">
              <RiSubtractFill
                className="text-2xl cursor-pointer"
                onClick={() => cart.decreaseCartQuantity(singleProduct.id)}
              />
              <span className="text-xl">{productQty}</span>
              <AiOutlinePlus
                className="text-xl cursor-pointer"
                onClick={() => cart.increaseCartQuantity(singleProduct.id)}
              />
            </p>
            <div className="flex items-center gap-4 py-4">
              <button
                className="px-14 py-4 bg-[#3341C1] text-white tracking-wider"
                onClick={() => cart.increaseCartQuantity(singleProduct.id)}
              >
                Add to cart
              </button>
              <div className="border px-6 py-4">
                <BsSuitHeart size={24} />
              </div>
            </div>
          </div>
          <div className="border-b px-6 py-6 flex justify-between items-center cursor-pointer">
            <h3 className="text-xl">Description</h3>
            <IoIosArrowDown size={24} />
          </div>
          <div className="border-b px-6 py-6 flex justify-between items-center cursor-pointer">
            <h3 className="text-xl">Description</h3>
            <IoIosArrowDown size={24} />
          </div>
          <div className="px-6 py-6 flex justify-between items-center cursor-pointer">
            <h3 className="text-xl">Description</h3>
            <IoIosArrowDown size={24} />
          </div>
        </div>
      </div>
      <section className="my-20  py-4 px-4 rounded-lg shadow-xl drop-shadow-xl">
        <div className="flex justify-between items-center">
          <h3>Explore more from this collections</h3>
          <div className="hidden lg:flex justify-between gap-6">
            <div className="border p-1 rounded-full">
              <MdOutlineKeyboardArrowLeft size={32} />
            </div>
            <div className="border p-1 rounded-full">
              <MdOutlineKeyboardArrowRight size={32} />
            </div>
          </div>
        </div>
      </section>

      <section className="my-10">
        <CollectionCard />
      </section>
      <div className="flex justify-center">
        <button className="border text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-8 rounded-lg">
          Explore all
        </button>
      </div>
    </section>
  );
};
