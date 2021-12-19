/** @format */

import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { sortingProducts, getOrdersByPin } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";

const FilterSortingBar = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const user = useSelector((state) => state.user);
  const viewSorting = ["Price: High to Low", "Price: Low to High"];
  const [stateSort, setSort] = useState("recommended");
  const [sorted, setSorted] = useState();
  const [pinRev, setPinRev] = useState(false);
  const [pin, setPin] = useState("");
  const [bg, setBg] = useState("text-gray-400");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    user.orderPin._id && setRedirect(true);
  }, [user.orderPin]);

  useEffect(() => {
    dispatch(sortingProducts(sorted, product));
  }, [sorted]);
  const hamburger = (
    <GiHamburgerMenu
      style={{ fontSize: "2rem", cursor: "pointer", marginRight: "1rem" }}
    />
  );

  useEffect(() => {
    pin.length < 6
      ? setBg("bg-gray-400 pointer-events-none opacity-70")
      : setBg("bg-blue-400");
  }, [pin]);

  const handleSubmit = () => {
    dispatch(getOrdersByPin({ pinCode: pin }));
  };

  if (redirect === true) {
    return <Redirect to={`order_details/${user.orderPin._id}`} />;
  }

  return (
    <div className="sortingFiltering show-md z-10">
      <div className="sortingSec">
        {hamburger} <h4 style={{ margin: "0" }}>Filter</h4>
      </div>
      <div
        className="text-blue-500 cursor-pointer"
        onClick={() => {
          setPinRev(!pinRev);
        }}>
        Enter PinCode
      </div>
      {pinRev && (
        <div className="fixed bottom-0 left-0" style={{ zIndex: "51" }}>
          <div className="w-screen h-screen bg-gray-900 opacity-25"></div>
          <div className="absolute bottom-0 w-screen h-24 bg-gray-200">
            <div
              onClick={() => {
                setPinRev(!pinRev);
              }}
              className="absolute top-0 right-0 p-2 pr-5 text-gray-500 cursor-pointer">
              <GrClose />
            </div>
            <div className="absolute bottom-0 mb-2">
              <div className=" text-gray-800 font-bold px-5">
                Use pincode to check delivery info
              </div>
              <div className="flex justify-between items-center w-screen px-5">
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
      <div
        onMouseEnter={() => showSortingList(1)}
        onMouseLeave={() => showSortingList(0)}
        style={{ position: "relative", border: "1px solid #ddd" }}
        id="viewSorting">
        <button id="sortByBtn">
          Sort By: {stateSort}
          <span className="downArrow">
            <i className="fas fa-chevron-down"></i>
          </span>
        </button>

        <div className="optionList" id="sortByList">
          <ul>
            {viewSorting.map((e, index) => {
              return (
                <li
                  onClick={() => {
                    setSorted(e);
                    showSortingList(0);
                    setSort(e.charAt(0) + e.slice(1));
                  }}
                  key={index}>
                  {e}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

function showSortingList(value) {
  const sortingList = document.querySelector("#sortByList");
  value
    ? sortingList.classList.add("active")
    : sortingList.classList.remove("active");
}

export default FilterSortingBar;
