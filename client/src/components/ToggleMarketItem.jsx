import {RxCaretUp,RxCaretDown} from "react-icons/rx"

const ToggleMarketItem = ({openDropDown, setOpenDropDown, title}) => {
  return (
    <div className="py-6 flex justify-between items-center">
    <span className="font-semibold">{title}</span>
    {openDropDown === true ?
    <RxCaretUp size={24} onClick={() => setOpenDropDown(false)} className="cursor-pointer"/>   
    : <RxCaretDown size={24} onClick={() => setOpenDropDown(true)} className="cursor-pointer"/> }
  </div>
  )
}

export default ToggleMarketItem