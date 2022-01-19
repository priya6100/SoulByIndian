/** @format */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug, filterProducts } from "../../actions";
import "./filter.css";
import { Checkbox } from "@material-ui/core";

let color = [
  { Name: "green", _id: "green", Qty: 8792 },
  { Name: "blue", _id: "blue", Qty: 7617 },
  { Name: "white", _id: "white", Qty: 7241 },
  { Name: "red", _id: "red", Qty: 6725 },
  { Name: "black", _id: "black", Qty: 2355 },
  { Name: "purple", _id: "purple", Qty: 2355 },
  { Name: "yellow", _id: "yellow", Qty: 2355 },
  { Name: "orange", _id: "orange", Qty: 2355 },
  { Name: "grey", _id: "grey", Qty: 356 },
  { Name: "brown", _id: "brown", Qty: 356 },
];

let size = [
  { Name: "S", _id: "S", Qty: 8792 },
  { Name: "M", _id: "M", Qty: 7617 },
  { Name: "X", _id: "X", Qty: 7241 },
  { Name: "XL", _id: "XL", Qty: 6725 },
  { Name: "XXL", _id: "XXL", Qty: 2355 },
  { Name: "XXXL", _id: "XXXL", Qty: 356 },
];

let price = [
  { Name: "Rs. 499 and Below", _id: "priceOption1", Qty: 8792 },
  { Name: "Rs. 500 - Rs.999", _id: "priceOption2", Qty: 7617 },
  { Name: "Rs. 1000 - Rs. 4999", _id: "priceOption3", Qty: 7241 },
  { Name: "Rs. 5000 - Rs. 9999", _id: "priceOption4", Qty: 6725 },
  { Name: "Rs. 10000 - Rs. 49999", _id: "priceOption5", Qty: 2355 },
  { Name: "Rs. 50000 - Rs. 74999", _id: "priceOption6", Qty: 356 },
];

const Filter = ({ filter, filterState, setFilter }) => {
  const products = useSelector((state) => state.product);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    // dispatch(getProductsBySlug(match.params.slug));
    setFilter(filter[0]);
  }, []);

  useEffect(() => {
    // dispatch(getProductsBySlug(match.params.slug));
    dispatch(filterProducts(checked, products));
  }, [checked]);

  const dispatch = useDispatch();

  console.log("this is product filter");
  console.log(products);

  return (
    <div className="filterContainer">
      {filter.map((e) => {
        let selectArr = [];
        let reveal = "none";
        if (filterState === e) {
          reveal = "";
        }
        switch (e) {
          case "color":
            selectArr = color;

            break;
          case "price":
            selectArr = price;

            break;
          case "size":
            selectArr = size;

            break;
          default:
            break;
        }

        const handleToggle = (id, number) => {
          const currentIndex = checked.indexOf(id);
          const newChecked = [...checked];

          if (currentIndex === -1) {
            newChecked.push(id);
            console.log(newChecked);
          } else {
            newChecked.splice(currentIndex, 1);
          }

          setChecked(newChecked);
        };

        return (
          <div
            className={"box " + e + "Filter"}
            id={e + "Filter"}
            style={{ display: reveal, borderBottom: "none !important" }}>
            <ul>
              {selectArr.map(({ Name, _id, Qty }, index) => {
                return (
                  <li key={index}>
                    <Checkbox
                      id={_id}
                      className="checkbox"
                      onChange={() => {
                        handleToggle(_id, index);
                      }}
                      checked={checked.indexOf(_id) === -1 ? false : true}
                    />
                    <label htmlFor={_id}>
                      {Name} <span className="qty">({Qty})</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
