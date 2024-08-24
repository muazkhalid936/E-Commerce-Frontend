import React from "react";
import data from "../Assets/data";
import Item from "../Item/Item";
import "./Popular.css";
const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <hr />

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
