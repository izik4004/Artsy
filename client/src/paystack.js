import PaystackPop from "@paystack/inline-js"
import { redirect } from "react-router-dom";

export const handlePayment = (email, amount) => {
  const handler = PaystackPop.setup({
    key: process.env.PAYSTACK_KEY, // Replace with your public key
    email,
    amount: amount * 100,
    onClose: () => {
      // alert('Window closed.');
      return redirect("/thankyou");
    },
    callback: (response) => {
      const message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });
  handler.openIframe();
 
}