import React from "react";
import PaymentNavigation from "./PaymentNavigation.js";
import PaymentForm from "./PaymentForm.js";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const amountFromPreviousPage = location.state?.amount || "";
  return (
    <div>
      <div className="payment_navigation">
        <PaymentNavigation />
      </div>
      <div className="payment_form">
        <PaymentForm amount={amountFromPreviousPage} />
      </div>
    </div>
  );
};

export default Payment;
