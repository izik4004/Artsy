import {BsSuitHeart} from "react-icons/bs"

export const ProductDetail = () => {
  return (
    <section className='container mx-auto '>
        <div className='my-14'>hi</div>
        <div className='flex border my-10'>
            <div className='border-r w-1/2'>
                <img src="" alt="" />
                <h1>lkkljkldlkdlsdkl</h1>
            </div>
            <div className='flex flex-col w-1/2 '>
                <div className='border-b p-6 '>kkljdfljkdfjkldjkls</div>
                <div className='border-b p-6'>
                    <p>Creator:</p><span></span>
                    <p>Made in Italy</p>
                    <p>Total views::</p><span>1.7k views</span>
                    <p className='flex gap-4'>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </p>
                    <div className='flex'>
                    <button className='px-6 py-2 bg-[#3341C1]'>Add to cart</button>
                    <div>
                        <BsSuitHeart />
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
