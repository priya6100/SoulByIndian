import React from 'react';
import './style.css';
import '../filter/filter.css';
import FilterSortingBar from '../filter/FilterSortingBar';
// import Filter from '../filter/Filter';
import SortingMobile from '../filter/SortingMobile';
import { Checkbox, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

const Filter = () => {
    let TshirtCategories = [
        {Type: "Tshirts", _id: "tshirtFilter", Qty: 57520},
        {Type: "Lounge Tshirts", _id: "loungetshirtFilter", Qty: 654},
    ];
    
    let price= [
        {MinPr: 150, _id: "lowestOneFilter", MaxPr: 999},
        {MinPr: 1000, _id: "lowestSecFilter", MaxPr: 2499},
        {MinPr: 2500, _id: "lowestThirdFilter", MaxPr: 4999},
        {MinPr: 5000, _id: "lowestFourthFilter", MaxPr: 8499},
        {MinPr: 8500, _id: "lowestFifthFilter", MaxPr: 10000},
    ];
    
    let color= [
        {Name: "green", _id: "colorNavyblueFilter", Qty: 8792},
        {Name: "blue", _id: "colorBlueFilter", Qty: 7617},
        {Name: "white", _id: "colorWhiteFilter", Qty: 7241},
        {Name: "red", _id: "colorRedFilter", Qty: 6725},
        {Name: "black", _id: "colorBlackFilter", Qty: 2355},
        {Name: "grey", _id: "colorGreyFilter", Qty: 356},
    ];
    
    function openMenu(){
        var filterSearch = document.querySelectorAll(".filterSearch");
    
        filterSearch.forEach((e) => {
            const inputSearch = e.querySelector("input");
            e.addEventListener("click", () => {
                inputSearch.classList.toggle("active");
            });
        });
    }
    
    return (
        <div className="filterContainer">

            <div className="box categoryFilter" id="categoryFilter">
                <div className="filterTitle">
                    <p>Category</p>
                    <div className="filterSearch" onClick={() => openMenu()}>
                        <input type="search" id="categorySearch" placeholder="Search category" />
                        <span className="searchIcon"><i className="fas fa-search"></i></span>
                    </div>
                </div>
                <ul>
                    {
                        TshirtCategories.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Checkbox colorPrimary id={item._id} />
                                    <label htmlFor={item._id}>{item.Type} <span className="qty">({item.Qty})</span></label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="box categoryFilter" id="categoryFilter">
                <div className="filterTitle">
                    <p>PRICE</p>
                </div>
                <ul>
                    {
                        price.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Checkbox colorPrimary id={item._id} />
                                    <label htmlFor={item._id}>Rs. {item.MinPr} to Rs. {item.MaxPr}</label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="box categoryFilter" id="categoryFilter">
                <div className="filterTitle">
                    <p>Color</p>
                    <div className="filterSearch" onClick={() => openMenu()}>
                        <input type="search" id="colorSearch" placeholder="Search Color" />
                        <span className="searchIcon"><i className="fas fa-search"></i></span>
                    </div>
                </div>
                <ul className="colorFilterList">
                    {
                        color.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Checkbox colorPrimary id={item._id} />
                                    <label htmlFor={item._id}><span className="colorView" style={{backgroundColor: `${item.Name}`}}></span> {item.Name} <span className="qty">({item.Qty})</span></label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}


function DataContainer ()  {
    const products = [
        {_Id: 456, Image: "../assets/men 1.jpeg", Name: "Product 1", Price: "1563.00", Disc: "2010.56" },
        {_Id: 457, Image: "../assets/men 4.jpeg", Name: "Product 2", Price: "1563.00", Disc: "1866.56" },
        {_Id: 458, Image: "../assets/men 3.jpeg", Name: "Product 3", Price: "1563.00", Disc: "1866.56" },
        {_Id: 459, Image: "../assets/men 2.jpeg", Name: "Product 4", Price: "1563.00", Disc: "1866.56" },
        {_Id: 478, Image: "../assets/men 1.jpeg", Name: "Product 5", Price: "1563.00", Disc: "1866.56" },
        {_Id: 463, Image: "../assets/men 4.jpeg", Name: "Product 6", Price: "1563.00", Disc: "1866.56" },
        {_Id: 465, Image: "../assets/men 1.jpeg", Name: "Product 7", Price: "1563.00", Disc: "1866.56" },
        {_Id: 445, Image: "../assets/men 2.jpeg", Name: "Product 8", Price: "1563.00", Disc: "1866.56" },
    ];
        
    function pgBtnClick(){
        const pagination = document.querySelectorAll('.paginationDeck .pgBtn');

        pagination.forEach((e) => {
            e.addEventListener("click", ()=> {
                e.classList.toggle('active');
            });
        });
    };

    return(        
    <div className="container">
        <div className="productDeck row">
            {
                products.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="card-head">
                                <div className="favItem">
                                    <input type="checkbox" name="favItem" id={index} />
                                    <label htmlFor={index}><i className="fa fa-heart    "></i></label>
                                </div>
                                <img src={item.Image} alt="" />
                            </div>
                            <div className="card-body">
                                <h3>{item.Name}</h3>
                                <p><b>${item.Price}</b> &nbsp; <strike className="discount">${item.Disc}</strike></p>

                                <button className="addToCartBtn">Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <br/>

        <div className="productImage d-grid col-sm-2">
            <div className="bigImg">
                <img src={products[0].Image} key={products[1]._Id} alt="" />
            </div>

            <div className="nextItems show-medium">
                <div className="card" key={products[1]._Id}>
                    <div className="card-head">
                        <img src={products[1].Image} alt="" />
                    </div>
                    <div className="card-body">
                        <h3>{products[1].Name}</h3>
                        <p><b>${products[1].Price}</b> &nbsp; <strike className="discount">${products[1].Disc}</strike></p>
                    </div>
                </div>

                <div className="card" key={products[0]._Id}>
                    <div className="card-head">
                        <img src={products[0].Image} alt="" />
                    </div>
                    <div className="card-body">
                        <h3>{products[0].Name}</h3>
                        <p><b>${products[0].Price}</b> &nbsp; <strike className="discount">${products[0].Disc}</strike></p>
                    </div>
                </div>
            </div>

            <div className="pagination">
                <div className="paginationDeck">
                    <button type="button" onClick={() => pgBtnClick()} id="pgBtn1" className="pgBtn active">1</button>
                    <button type="button" onClick={() => pgBtnClick()} id="pgBtn2" className="pgBtn">2</button>
                    <button type="button" onClick={() => pgBtnClick()} id="pgBtn3" className="pgBtn">3</button>
                    <button type="button" onClick={() => pgBtnClick()} id="pgBtn4" className="pgBtn">4</button>
                    <button type="button" onClick={() => pgBtnClick()} id="pgBtn4" className="pgBtn">5</button>
                    <button type="button" onClick={() => pgBtnClick()} id="pgNxtBtn" className="pgBtn">&gt;&gt;</button>
                </div>
            </div>
        </div>
    </div>
    )
}

const Men = () => {

    return (
        <div>
            <FilterSortingBar />
            <div className="ProductsContainer">
                <div className="filterSection show-md">
                    <Filter />
                </div>
                <div className="productSection">
                    <DataContainer />
                </div>
                <SortingMobile />
            </div>
        </div>
    );

}

export default Men
