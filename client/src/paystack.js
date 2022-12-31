import PaystackPop from "@paystack/inline-js"
import { redirect } from "react-router-dom";

export const handlePayment = (email, amount) => {
  const handler = PaystackPop.setup({
    key: "pk_test_9ef3632a2131e9b22e8714e4cb03fef30fb146eb", // Replace with your public key
    email,
    amount: amount * 100,
    onClose: () => {
      alert('Window closed.');
      
    },
    callback: () => {
       window.location = "/thankyou";    
    }
  });
  
  handler.openIframe();
  
}
