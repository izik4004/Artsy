import {useState} from "react";
import { category, price, products } from "../../data/data";
import { ImEqualizer } from "react-icons/im";
import { RxCaretUp, RxCaretDown } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import MarketItem from "../../components/MarketItem";
// import { product } from "../../data/product";

const MarketPlace = () => {
  const [search, setSearch] = useState("")
  const [openDropDown, setOpenDropDown] = useState(true)
const [data, setData] = useState(products)
  // const {featured_products, products} = product
  // console.log("prod", products)
  const filterByCategory = (catItem) => {
    const result = products.filter((item) => {
      return item.category === catItem;
    })
    setData(result)
  }

  const fashionProducts = products.filter((data) => data.category === category);
  return (
    <section className="container mx-auto flex flex-col gap-10  lg:py-20 mb-20 mt-[100px]">
       
      <h4 className="lg:hidden">See 1-6 of 15 results</h4>
      <div className="flex gap-14 items-center">
        <div className="lg:w-1/5 py-4 hidden lg:block">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 bg-gray-100 rounded-lg"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="lg:w-4/5 lg:px-4 w-full">
          <div className="shadow-lg py-4 px-4 flex justify-between lg:rounded-none rounded-2xl items-center">
            {/* desktop view for filter*/}
            <div className="hidden lg:block">
              <h4 className="">See 1-6 of 15 results</h4>
            </div>
            {/* mobile view for filter */}
            <span className="block md:hidden">
              <select className=" py-2 px-2  ">
                buy
                <option value="Orange" className="py-4">
                  Filter by
                </option>
                <option value="Radish">Radish</option>
                <option value="Cherry">Cherry</option>
              </select>
            </span>

            <div className="">
              <select className="lg:border  lg:rounded-md py-2 px-4  ">
                buy
                <option value="Orange" className="py-4">
                  Sort by
                </option>
                <option value="Radish">Radish</option>
                <option value="Cherry">Cherry</option>
              </select>
            </div>
          </div> 

        </div>
      </div>

      <div className="flex lg:py-8 gap-14">
        <div className="lg:w-1/5 hidden lg:block">
          <div className="flex gap-4 font-semibold  border-b-4 pb-4">
            <ImEqualizer size={24} />
            <span className="text-xl">Filter</span>
          </div>
          <div className="py-8 flex justify-between items-center">
            <span className="font-semibold">By category</span>
            {openDropDown === true ?
            <RxCaretUp size={24} onClick={() => setOpenDropDown(false)} className="cursor-pointer"/>
            
            : <RxCaretDown size={24} onClick={() => setOpenDropDown(true)} className="cursor-pointer"/> }
          </div>
          {openDropDown === true ?
          <>
            {category.map((item, index) => (
              <span className="flex gap-4 pb-4" key={index}>
                <input type="checkbox" onClick={() => fashionProducts(item)}/>
                <label>{item}</label>
              </span>
            ))}
          </>
        :<></>}
          <div className="py-6 flex justify-between items-center">
            <span className="font-semibold">By price</span>
            <RxCaretUp size={24} />
            {/* <RxCaretDown/> */}
          </div>
          <span>$20000 - $50000</span>

          <div className="py-6 flex justify-between items-center">
            <span className="font-semibold">By artist</span>
            <RxCaretUp size={24} />
            {/* <RxCaretDown/> */}
          </div>
          {price.map((item, index) => (
            <span className="flex gap-4 pb-4" key={index}>
              <input type="radio" />
              <label>{item}</label>
            </span>
          ))}
          <div className="py-6 flex justify-between items-center">
            <span className="font-semibold">Collection year</span>
            <RxCaretUp size={24} />
            {/* <RxCaretDown/> */}
          </div>
        </div>
        <div className="lg:w-4/5">
          <div className="flex flex-wrap">
            {data.filter((item) => {
               return search.toLowerCase() === '' ? item : item.name
               .toLowerCase().includes(search)
            }).map((item) => (
              <div className="lg:w-1/3 lg:p-4 w-full" key={item.id}>
                <MarketItem
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col gap-2 py-6  items-center ">
        <button className="py-4 px-20  border rounded-lg border-gray-700">
          See more
        </button>
      </div>
      <div className="hidden gap-4 md:flex items-center justify-contents-end">
        <span>Load more</span>
        <span className="border p-4 rounded-full">
          <FaArrowRight size={24} />
        </span>
      </div>
    </section>
  );
};

export default MarketPlace;
