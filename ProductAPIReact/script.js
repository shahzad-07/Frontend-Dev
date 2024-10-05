import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";

function Card(props) {
  const { title, image, brand, price } = props;
  return (
    <div className="card">
      <img src={image} alt="Image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>₹{price * 80}</b>
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.querySelector("#root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const container2 = data.products.map((product) => {
      return (
        <Card
          title={product.title}
          image={product.thumbnail}
          brand={product.brand}
          price={product.price}
          key={product.id}
        />
      );
    });

    root.render(<div className="cont">{container2}</div>);
  });

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     const container2 = data.products.map((product) => {
//       return Card({
//         key: product.id,
//         title: product.title,
//         image: product.thumbnail,
//         brand: product.brand,
//         price: product.price,
//       });
//     });

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Card,
//   ref: null,
//   props: {
//     title: "Iphone 13",
//     image: "https://github.com/procodrr/react-course.git",
//     brand: "Apple",
//     price: 8999,
//     key: 1,
//   },
// });

// root.render(
//   React.createElement(Card, {
//     title: "Iphone 13",
//     image: "https://github.com/procodrr/react-course.git",
//     brand: "Apple",
//     price: 8999,
//     key: 1,
//   })
// );

// root.render(
//   <Card
//     title="Iphone13"
//     image="https://github.com/procodrr/react-course.git"
//     brand="Apple"
//     price="8999"
//     key="1"
//   />
// );
