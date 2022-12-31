import { useState, useEffect, useRef } from "react";
import image from "../../assets/auction2.png";
import { auction } from "../../data/auction";
import { Link, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import Name from "../../components/Name";

const LiveAuction = ({ socket }) => {
  const [open, setOpen] = useState(false);
  // const [message, setMessage]= useState("")
  // const [messageReceived, setMessageReceived] = useState([])
  const { id } = useParams();
  const { products } = auction;
  const singleAuction = products.find((item) => item.id === id);

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        message: currentMessage,
        // time:
        //   new Date(Date.now()).getHours() +
        //   ":" +
        //   new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  const username = localStorage.getItem("name");

  return (
    <section className="text-gray-600 body-font overflow-hidden mt-[120px] ">
      <div className="container px-5 lg:py-24 mx-auto">
        <div className="relative border mx-auto lg:flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center rounded"
            src={singleAuction.url}
          />
          <div className="absolute lg:relative px-4 lg:bottom-0 bottom-10 lg:w-1/2 w-full lg:px-10 lg:py-6 mt-6 lg:mt-0 flex flex-col ">
            <div className="h-5/6 overflow-y scroll">
              {messageList.map((messageContent) => (
                <div className="flex gap-6 items-center py-2">
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src={image}
                    alt="Charles"
                  />
                  <div>
                    <h3 className="text-lg lg:text-black text-white">{username}</h3>
                    <p className="text-base py-1 lg:text-black text-white">{messageContent.message}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-1/6 pt-4">
              <span className="pt-4 text-base h-1/4 lg:text-black text-white">Creator: jkkljlk</span>

              {username === "" ? (
                <div className="py-4">
                  <button
                    className="py-2 px-10 text-white bg-[#3341C1]"
                    onClick={() => setOpen(true)}
                  >
                    Place a Bid
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-6 py-2">
                  <div className="flex items-center w-3/4">
                    <input
                      type="text"
                      value={currentMessage}
                      placeholder="Hey..."
                      onChange={(event) => {
                        setCurrentMessage(event.target.value);
                      }}
                      className="border rounded-2xl p-2 w-full"
                    />
                    <RiSendPlaneFill
                      size={18}
                      className="-ml-8 cursor-pointer"
                      onClick={sendMessage}
                    />
                  </div>
                  <div className="flex border rounded-full p-3 justify-items-center">
                    <AiFillHeart
                      size={18}
                      color="red"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
            {open === true && <Name setOpen={setOpen} />}
          </div>
        </div>
        <div className="lg:py-10 flex items-center gap-6 py-6">
          <h3 className="text-xl">See upcoming drops</h3>
          <span className="border p-3 rounded-full">
            <Link to={"/drop"}>
              <FaArrowRight size={22} />
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default LiveAuction;
