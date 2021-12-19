import React from 'react';
import { BsArrowLeftRight } from 'react-icons/bs';
import { BiSort } from 'react-icons/bi';

const Sortingmobile = () => {
    const SortBy = ["Popularity", "Latest", "Discount", "Price: High to Low", "Price: Low to High", "Customer Rating"];
  
    const FilterList = [
      "Categories", "Size", "Price", "Color", "Discount Range", "More Items",
    ];
  
    function showHideFilter() {
      const showSortingList = document.querySelector(".sortingList");
      const showList = document.querySelector(".filterListDeck");
      showList.classList.toggle("active");
      showSortingList.classList.remove("active");
    }
  
    function showSortingList() {
      const showFilterList = document.querySelector(".filterListDeck");
      const showList = document.querySelector(".sortingList");
      showList.classList.toggle("active");
      showFilterList.classList.remove("active");
    }
  
    return (
      <div className="sortingFilteringMobile show-small">
        <div className="gridSorting">
            <div className="sort">
                <button id="sort" onClick={() => showSortingList()}><BiSort /> &nbsp;SORT</button>
                <div className="sortingList">
                    <strong>Sort By</strong>
                    <ul>
                        {
                        SortBy.map((item, index) => {
                            return (
                            <li key={index}>{item}</li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>

            <div className="filter">
                <button id="filter" onClick={() => showHideFilter()}><BsArrowLeftRight/> &nbsp;FILTER</button>
                    <div className="filterListDeck">
                        <div className="filterGrid">
                            <button> filter</button>
                            <button className="clear flat">clear all</button>
                        </div>
  
                        <div className="filterList">
                            <ul className="filterBy">
                                <li className="active">Gender &nbsp;<span>1</span></li>
                                {
                                    FilterList.map((item, index) => {
                                    return(
                                        <li key={index}>{item}</li>
                                    )
                                    })
                                }
                            </ul>
            
                            <ul className="filterSubList" onClick={() => selectItem()}>
                                <li className="active">
                                    <input type="checkbox" id="menFilter" />
                                    <label htmlFor="menFilter"><span className="checkIcon"><i className="fas fa-check    "></i></span> Men <span className="itemQty">823</span></label>
                                </li>
                                <li onClick={() => selectItem()}>
                                    <input type="checkbox" id="womenFilter" />
                                    <label htmlFor="womenFilter"><span className="checkIcon"><i className="fas fa-check"></i></span> Women <span className="itemQty">39</span></label>
                                </li>
                                <li onClick={() => selectItem()}>
                                    <input type="checkbox" id="girlsFilter" />
                                    <label htmlFor="girlsFilter"><span className="checkIcon"><i className="fas fa-check"></i></span> Girls <span className="itemQty">78</span></label>
                                </li>
                                <li>
                                    <input type="checkbox" id="boysFilter" />
                                    <label htmlFor="boysFilter"><span className="checkIcon"><i className="fas fa-check"></i></span> Boys <span className="itemQty">156</span></label>
                                </li>
                            </ul>
                        </div>
  
                        <div className="filterGrid">
                            <button className="close" onClick={() => showHideFilter()}>Close</button>
                            <button className="apply flat" onClick={() => showHideFilter()}>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function selectItem(){
    let itemList = document.querySelectorAll("filterSubList ul li");
    itemList.forEach((e) => {
        e.addEventListener("click", () => {
            e.classList.toggle("active")
        })
    })
}

export default Sortingmobile
