import {useState, useEffect} from "react";
import image from "../../assets/auction2.png";
import { auction } from "../../data/auction";
import { useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import {RiSendPlaneFill} from "react-icons/ri"
import Name from "../../components/Name";


const LiveAuction = ({socket}) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage]= useState("")
  const [messageReceived, setMessageReceived] = useState([])
  const { id } = useParams();
  const { products } = auction;
  const singleAuction = products.find((item) => item.id === id);
 
 const sendMessage = () => {
  socket.emit("send_message", {message});
 }
 
 useEffect(() => {
    socket.on("receive_message", (data) => {
      // setMessageReceived(data.message)
      setMessageReceived((prevMsg) => [
        {message: data.message},
        ...prevMsg]);
    });
    
 }, [socket, messageReceived])

  return (
    <section className="mt-[180px] container mx-auto">
      <div className="lg:flex border">
        <div className="relative">
          <img src={singleAuction.url} alt="" className="h-[700px] w-[550px]" />
        </div>
        <div className="lg:flex-start lg:border-l-2 justify-between px-6 py-4">
          <div className="h-3/4">
            {messageReceived.map((msg) => (
                <p>{msg.message}</p>
            ))}
            
          </div>
          <div className="">
            <div className="flex gap-4 items-center py-2">
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={image}
                alt="Charles"
              />
              <div className="">
                <h3 className="text-lg">Opeyemi Thompson</h3>
                <p className="text-base py-1">$5000</p>
              </div>
            </div>
            <span className="pt-4 text-base h-1/4" onClick={() => setOpen(true)}>Creator: jkkljlk</span>
            <div className="flex gap-6 py-2">
              <div className="flex items-center">
                <input
                  type="email"
                  name=""
                  onChange={(e) => setMessage(e.target.value)}
                  className="border rounded-xl py-1 px-4"
                  placeholder="Place a bid..."
                  // onClick={() =>
                  //   localStorage.getItem("name") === "" &&
                  //   setOpen(true)
                  // }
                  
                />
                <RiSendPlaneFill size={18} className="-ml-8 cursor-pointer"  onClick={sendMessage}/>
              </div>
              <div className="flex border rounded-full p-2 justify-items-center">
                <AiFillHeart size={18} color="red" className="cursor-pointer"/>
              </div>
            </div>
            {open === true &&
            <Name setOpen={setOpen}/>
            }
          </div>
        </div>
      </div>

      <div className="py-10 flex items-center gap-6">
        <h3 className="text-xl">See upcoming drops</h3>
        <span className="border p-3 rounded-full">
          <FaArrowRight size={22} />
        </span>
      </div>
    </section>
  );
};

export default LiveAuction;
