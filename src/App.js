import React, { Fragment, useState } from "react";
import Card from "./CardComponent/Card";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [productArray, setProducts] = useState([
    {
      id: 1,
      image: "/Img/cat-1.jpg",
      title: "Item 1",
      price: 9.99,
    },
    {
      id: 2,
      image: "/Img/product-3.jpg",
      title: "Item 2",
      price: 14.99,
    },
    {
      id: 3,
      image: "/Img/product-5.jpg",
      title: "Item 3",
      price: 19.99,
    },
    {
      id: 4,
      image: "/Img/product-7.jpg",
      title: "Item 4",
      price: 30.99,
    },
    {
      id: 5,
      image: "/Img/product-10.jpg",
      title: "Item 5",
      price: 10.99,
    },
  ]);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row justify-content-center my-5">
          <button
            className="btn btn-warning w-25 "
            onClick={() => {
              let newArr = productArray.map((item) => {
                if (item.id % 2 !== 0) item.price = 50;
                return item;
              });

              setProducts(newArr);
            }}
          >
            Change price to 50
          </button>
        </div>

        <div className="row justify-content-center py-5 my-2">
          {productArray.map((product, index) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
