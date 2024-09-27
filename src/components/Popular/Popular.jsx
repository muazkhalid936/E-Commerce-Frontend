import React, { useEffect, useState } from "react";
import data from "../Assets/data";
import Item from "../Item/Item";
import "./Popular.css";
const Popular = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="popular">
      <p className="head">Popular in Women</p>
      <hr className="popular-line" />

      <div className="popular-item">
        {data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              item={item.item}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
