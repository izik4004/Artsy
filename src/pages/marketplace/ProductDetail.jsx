import {BsSuitHeart} from "react-icons/bs"
import {RiSubtractFill} from "react-icons/ri"
import {AiOutlinePlus} from "react-icons/ai"
import {IoIosArrowDown} from "react-icons/io"
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md"
import image from "../../assets/productDetail.png"

export const ProductDetail = () => {
  return (
    <section className='container mx-auto '>
        <div className='my-14'>hi</div>
        <div className='flex border my-10'>
            <div className='border-r w-1/2'>
                <img src={image} alt="" className="px-4 py-10"/>
            </div>
            <div className='flex flex-col w-1/2 '>
                <div className='border-b py-14 px-6 flex justify-between items-center'>
                    <h3 className="text-3xl font-semibold">Boolean Egyptian</h3>
                    <div>
                        <h5 className="text-lg">0.09</h5>
                    </div>
                </div>
                <div className='border-b px-6 py-12'>
                    <p className="text-lg">Creator:</p><span></span>
                    <p className="text-sm py-4">Made in Italy</p>
                    <p className="text-md py-4">Total views:<span className="px-2">1.7k views</span></p>
                    <p className='flex gap-4 py-6 items-center'>
                        <RiSubtractFill className="text-2xl cursor-pointer"/>
                        <span className="text-xl">1</span>
                        <AiOutlinePlus className="text-xl cursor-pointer"/>
                        
                    </p>
                    <div className='flex items-center gap-4 py-6'>
                    <button className='px-14 py-4 bg-[#3341C1] text-white tracking-wider'>Add to cart</button>
                    <div className="border px-6 py-4">
                        <BsSuitHeart size={24}/>
                        </div>
                    </div>
                </div>
                <div className='border-b px-6 py-10 flex justify-between items-center cursor-pointer'>
                    <h3 className="text-xl">Description</h3>
                    <IoIosArrowDown size={24}/>
                </div>
                <div className='border-b px-6 py-10 flex justify-between items-center cursor-pointer'>
                    <h3 className="text-xl">Description</h3>
                    <IoIosArrowDown size={24}/>
                </div>
                <div className='border-b px-6 py-10 flex justify-between items-center cursor-pointer'>
                    <h3 className="text-xl">Description</h3>
                    <IoIosArrowDown size={24}/>
                </div>
            </div>

           
        </div>
        <section className="my-20  py-4 px-4 rounded-lg shadow">
                <div className="flex justify-between items-center">
                    <h3>Explore more from this collections</h3>
                    <div className="flex justify-between gap-6">
                        <div className="border p-2 rounded-full">
                        <MdOutlineKeyboardArrowLeft size={20}/>
                        </div>
                        <div className="border p-2 rounded-full">
                            <MdOutlineKeyboardArrowRight size={20}/>
                        </div>
                    </div>
                </div>
            </section>
    </section>
  )
}
