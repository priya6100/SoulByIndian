/** @format */

import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdSort, MdPlace } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { filterProducts, sortingProducts, getOrdersByPin } from "../../actions";

const color = [
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

const size = [
  { Name: "S", _id: "S", Qty: 8792 },
  { Name: "M", _id: "M", Qty: 7617 },
  { Name: "X", _id: "X", Qty: 7241 },
  { Name: "XL", _id: "XL", Qty: 6725 },
  { Name: "XXL", _id: "XXL", Qty: 2355 },
  { Name: "XXXL", _id: "XXXL", Qty: 356 },
];

const price = [
  { Name: "Rs. 499 and Below", _id: "priceOption1", Qty: 8792 },
  { Name: "Rs. 500 - Rs.999", _id: "priceOption2", Qty: 7617 },
  { Name: "Rs. 1000 - Rs. 4999", _id: "priceOption3", Qty: 7241 },
  { Name: "Rs. 5000 - Rs. 9999", _id: "priceOption4", Qty: 6725 },
  { Name: "Rs. 10000 - Rs. 49999", _id: "priceOption5", Qty: 2355 },
  { Name: "Rs. 50000 - Rs. 74999", _id: "priceOption6", Qty: 356 },
];

const filterData = ["price", "size", "color"];

const sortData = ["Price: High to Low", "Price: Low to High"];

const FilterMobileUi = ({ filter, filterState, setFilter }) => {
  const products = useSelector((state) => state.product);
  const user = useSelector((state) => state.user);
  const [filterRev, setFilterRev] = useState(false);
  const [sortRev, setSortRev] = useState(false);
  const [checked, setChecked] = useState([]);
  const [sorted, setSorted] = useState();
  const [pinRev, setPinRev] = useState(false);
  const [bg, setBg] = useState("text-gray-400");
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  const handleToggle = (id) => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleSubmit = () => {
    dispatch(getOrdersByPin({ pinCode: pin }));
  };

  useEffect(() => {
    dispatch(filterProducts(checked, products));
  }, [checked]);

  useEffect(() => {
    user.orderPin._id && setRedirect(true);
  }, [user.orderPin]);

  useEffect(() => {
    pin.length < 6
      ? setBg("bg-gray-400 pointer-events-none opacity-70")
      : setBg("bg-blue-400");
  }, [pin]);

  useEffect(() => {
    dispatch(sortingProducts(sorted, products));
  }, [sorted]);

  const iconSize = {
    height: "25px",
    width: "25px",
  };

  if (redirect === true) {
    return <Redirect to={`order_details/${user.orderPin._id}`} />;
  }
  return (
    <div className="z-20">
      <div className="flex bg-gray-200 w-screen h-14 border-b-4 border-gray-300">
        <div className="w-1/2 h-full flex items-center pl-3">
          <GiSettingsKnobs
            onClick={() => {
              setFilterRev(!filterRev);
              setSortRev(false);
            }}
            className={filterRev ? "text-gray-700" : "text-gray-400"}
            style={iconSize}
          />
        </div>
        <div className="w-1/2 h-full flex items-center pl-3">
          <MdSort
            onClick={() => {
              setSortRev(!sortRev);
              setFilterRev(false);
            }}
            className={sortRev ? "text-gray-700" : "text-gray-400"}
            style={iconSize}
          />
        </div>
      </div>
      <div className=" bg-gray-200 w-screen h-14 ">
        <div className="py-3 px-3 md:px-5 sm:px-4 flex items-center justify-between">
          <div className="text-gray-900 flex items-center">
            <span className="text-gray-500"> Check Delivery Info</span>
          </div>
          <div
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              setPinRev(!pinRev);
            }}>
            Enter PinCode
          </div>
        </div>
      </div>
      {filterRev && (
        <div className="w-screen h-80 bg-gray-100">
          {filterData.map((category) => {
            let child = [];
            category === "size"
              ? (child = size)
              : category === "color"
              ? (child = color)
              : (child = price);

            return (
              <div className="py-3 pl-3">
                <div>{category}</div>
                <div className="whitespace-nowrap overflow-y-auto noScrollStyle">
                  {child.map((child) => {
                    let classes1 =
                      "px-2 mr-2 mb-1 py-1 inline-block text-gray-50 rounded text-xs  bg-gray-700";
                    let classes2 =
                      "px-2 mr-2 mb-1 py-1 inline-block text-gray-50 rounded text-xs  bg-gray-300";
                    const exist =
                      checked.indexOf(child._id) === -1 ? false : true;
                    return (
                      <button
                        id={child._id}
                        className={exist ? classes1 : classes2}
                        onClick={() => {
                          handleToggle(child._id);
                        }}>
                        {child.Name}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {sortRev && (
        <div className="w-screen h-80 bg-gray-100">
          {sortData.map((category) => {
            let classes = "";
            sorted === category
              ? (classes =
                  "flex justify-center items-center h-1/5 w-full text-lg bg-gray-700")
              : (classes =
                  "flex justify-center items-center h-1/5 w-full text-lg bg-gray-400");

            return (
              <div onClick={() => setSorted(category)} className={classes}>
                {category}
              </div>
            );
          })}
        </div>
      )}
      {pinRev && (
        <div className="fixed bottom-0" style={{ zIndex: "51" }}>
          <div className="w-screen h-screen bg-gray-900 opacity-25"></div>
          <div className="absolute bottom-0 w-screen h-24 bg-gray-200">
            <div
              onClick={() => {
                setPinRev(!pinRev);
              }}
              className="absolute top-0 right-0 p-2 text-gray-500 cursor-pointer">
              <GrClose />
            </div>
            <div className="absolute bottom-0 mb-2">
              <div className=" text-gray-800 font-bold px-3">
                Use pincode to check delivery info
              </div>
              <div className="flex justify-between items-center w-screen px-3">
                <input
                  placeholder="Enter pincode"
                  value={pin}
                  onChange={(e) => {
                    const result = e.target.value.search(/^$|^[0-9]+$/);
                    if (result === 0 && e.target.value.length < 7) {
                      setPin(e.target.value);
                    }
                  }}
                  className="rounded pl-2 border-gray-600 bg-gray-50 outline-none"
                />
                <div
                  className={`rounded ${bg} text-gray-100 px-2 py-1 cursor-pointer`}
                  onClick={() => handleSubmit()}>
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMobileUi;
