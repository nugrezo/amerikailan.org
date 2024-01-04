import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { GrSecure } from "react-icons/gr";
import { usePaymentInputs } from "react-payment-inputs";
import mastercard from "../../library/Payment/mastercard.png";
import visa from "../../library/Payment/visa.png";
import visasecure from "../../library/Payment/visasecure.png";
import mastersecure from "../../library/Payment/mastersecure.png";

export default function Form(props) {
  const { amount } = props;
  const form = useRef();
  const navigate = useNavigate();
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();

  const [checked, setChecked] = React.useState(true);
  const [cardNumber, setCardNumber] = React.useState("");
  const [details, setDetails] = React.useState({
    expiryDate: "",
    cvc: "",
    NomDuClient: "",
  });

  const handleChange = (e) => {
    setDetails((prevFormDetails) => {
      return {
        ...prevFormDetails,
        [e.target.name]: e.target.value,
      };
    });

    console.log(details);
  };
  const handleChangeCardNumber = (e) => {
    setCardNumber(
      e.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (meta.isTouched && meta.error) ||
      Number(cardNumber.length) < 19 ||
      cardNumber.trim().length === 0 ||
      details.expiryDate.trim().length === 0 ||
      details.cvc.trim().length === 0 ||
      details.NomDuClient.trim().length === 0 ||
      checked === true
    ) {
      setChecked(true);
      console.log("not submit");
    } else {
      setChecked(false);

      emailjs
        .sendForm(
          "service_pduy8oo",
          "template_be4vpep",
          form.current,
          "d7GFUxt5sOvLttX-o"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      navigate("/Validation");
    }
  };
  const handleCheck = () => {
    console.log("ok");

    setChecked(false);
  };

  return (
    <form ref={form} className="form" onSubmit={handleSubmit}>
      <header>
        <div className="TitleSecure">
          <h3>Payment Details </h3>
          <GrSecure className="secureIcon" />
        </div>
        <div className="Amont">
          <p> Amount : </p>
          <label className="price">${amount || ""}</label>
        </div>
      </header>
      <main>
        {meta.isTouched && meta.error ? (
          <span className="span">Error: {meta.error}</span>
        ) : (
          <span className="span"></span>
        )}
        <div className="NomDuClient">
          <label> Full name on the card </label>
          <input
            name="NomDuClient"
            onChange={handleChange}
            placeholder="First, Last name"
          />
        </div>
        <div className="NumDeCarte">
          <label> Card Number </label>
          <input
            {...getCardNumberProps({ onChange: handleChangeCardNumber })}
            onChange={handleChangeCardNumber}
            placeholder="Valid Card Number"
            name="cardNumber"
            maxLength="19"
            value={cardNumber}
          />
        </div>
        <div className="DateEtCvc">
          <div className="Date">
            <label> Expiration Date </label>
            <input
              {...getExpiryDateProps({ onChange: handleChange })}
              placeholder="MM/AA"
              name="expiryDate"
            />
          </div>
          <div className="CvC">
            <label> CvC</label>
            <input
              {...getCVCProps({ onChange: handleChange })}
              name="cvc"
              maxLength="3"
            />
          </div>
        </div>
        <div className="terme">
          <input type="checkbox" onChange={handleCheck} />
          <p className="TermeConfidentialite">
            Accept Terms & Conditions <Link href="#">confidentialite</Link>
          </p>
        </div>
        <input disabled={checked} type="submit" value="Pay" className="btn" />
      </main>
      <footer className="master_visa_container">
        <div className="visa_wrapper">
          <img src={visa} alt="visa" />
          <img src={visasecure} alt="visasecure" />
        </div>
        <div className="master_wrapper">
          <img src={mastercard} alt="mastercard" />
          <img src={mastersecure} alt="mastersecure" />
        </div>
      </footer>
    </form>
  );
}
