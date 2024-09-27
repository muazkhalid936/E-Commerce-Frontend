import React, { useEffect, useState } from "react";
import "./NewCollection.css";
// import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
const NewCollection = () => {


  const [new_collection, setNew_Collection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcollection").then((res) => res.json()).then((data) => setNew_Collection(data));
  }, []);


  return (
    <div className="collection">
      <h1 className="head">New Collection</h1>
      <hr className="collection-line" />

      <div className="collection-item">
        {new_collection.map((item, i) => {
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

export default NewCollection;
