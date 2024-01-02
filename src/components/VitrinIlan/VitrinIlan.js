import React from "react";
import "./VitrinIlan.css";
import photo from "../../library/Vitrin/photo1.jpg";

const VitrinIlan = () => {
  // Define an array of itemData objects
  const itemsData = [
    {
      photo: photo,
      header: "Product 1 Header",
      address: "123 Main St, City, Country",
      price: "$100.00",
    },
    {
      photo: photo,
      header: "Product 1 Header",
      address: "123 Main St, City, Country",
      price: "$100.00",
    },
    {
      photo: photo,
      header: "Product 1 Header",
      address: "123 Main St, City, Country",
      price: "$100.00",
    },
    {
      photo: photo,
      header: "Product 1 Header",
      address: "123 Main St, City, Country",
      price: "$100.00",
    },
    {
      photo: photo,
      header: "Product 1 Header",
      address: "123 Main St, City, Country",
      price: "$100.00",
    },
    {
      photo: photo,
      header: "Product 1 Header",
      address: "123 Main St, City, Country",
      price: "$100.00",
    },
    {
      photo: photo,
      header: "Product 1 Header",
      address: "123 Main St, City, Country",
      price: "$100.00",
    },
    {
      photo: photo,
      header: "Product 1 Header",
      address: "123 Main St, City, Country",
      price: "$100.00",
    },
    {
      photo: photo,
      header: "Product 1 Header",
      address: "123 Main St, City, Country",
      price: "$100.00",
    },

    // Add more items as needed
  ];

  return (
    <div className="store">
      {itemsData.map((item, index) => (
        <ul key={index}>
          <li className="photo">
            <img src={item.photo} alt={`Product ${index + 1}`} />
          </li>
          <li className="header">Baslik:{item.header}</li>
          <li className="address">Adres: {item.address}</li>
          <li className="price">Fiyat: {item.price}</li>
        </ul>
      ))}
    </div>
  );
};

export default VitrinIlan;
