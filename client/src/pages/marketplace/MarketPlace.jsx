import { useState } from "react";
import { category, price, products } from "../../data/data";
import { ImEqualizer } from "react-icons/im";
import { RxCaretUp, RxCaretDown } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import MarketItem from "../../components/MarketItem";
// import { product } from "../../data/product";

const MarketPlace = () => {
  const [search, setSearch] = useState("");
  const [openDropDown, setOpenDropDown] = useState(true);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("name");

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== value));
    }
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const categories = [...new Set(products.map((p) => p.category))];
  let filteredProducts = products;

  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      return selectedCategories.some((c) => c === product.category);
    });
  }

  if (sortBy === "price") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    setPriceRange({ ...priceRange, [name]: value });
  };

  if (priceRange.max < 1000) {
    filteredProducts = products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );
  }
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
                <option value="" className="py-4">
                  Filter by
                </option>
                {categories.map((item, index) => (
                  <option
                    key={index}
                    // type="checkbox"
                    value={item}
                    onChange={handleCategoryChange}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </span>

            <div className="">
              <select
                className="lg:border  lg:rounded-md py-2 px-4 "
                value={sortBy}
                onChange={handleSortChange}
              >
                buy
                <option value="Orange" className="py-4">
                  Sort by
                </option>
                <option value="name">Name</option>
                <option value="price">Price</option>
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
            {openDropDown === true ? (
              <RxCaretUp
                size={24}
                onClick={() => setOpenDropDown(false)}
                className="cursor-pointer"
              />
            ) : (
              <RxCaretDown
                size={24}
                onClick={() => setOpenDropDown(true)}
                className="cursor-pointer"
              />
            )}
          </div>
          {openDropDown === true ? (
            <>
              {categories.map((item, index) => (
                <span className="flex gap-4 pb-4" key={index}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCategoryChange}
                  />
                  <label>{item}</label>
                </span>
              ))}
            </>
          ) : (
            <></>
          )}
          <div className="py-6 flex justify-between items-center">
            <span className="font-semibold">By price</span>
            <RxCaretUp size={24} />
            {/* <RxCaretDown/> */}
          </div>
          <span>$20000 - $50000</span>
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            step="50"
            value={priceRange.max}
            onChange={handlePriceRangeChange}
          />
          <div className="py-6 flex justify-between items-center">
            <span className="font-semibold">By artist</span>
            <RxCaretUp size={24} />
            {/* <RxCaretDown/> */}
          </div>
          {price.map((item, index) => (
            <span className="flex gap-4 pb-4" key={index}>
              <input type="radio" />
              <label className="text-titlecase">{item}</label>
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
            {filteredProducts
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((item) => (
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
      <div className="lg:hidden gap-4 flex items-center justify-center">
        <span>Load more</span>
        <span className="border p-4 rounded-full">
          <FaArrowRight size={24} />
        </span>
      </div>
    </section>
  );
};

export default MarketPlace;
