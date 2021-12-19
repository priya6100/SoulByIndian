import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getProducts } from '../../actions';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import Headers from '../../components/Headers';
import {Carousel} from 'react-bootstrap'
import banner1 from '../../images/logo/banner-3.jpg';
import banner2 from '../../images/logo/women-banner.jpg';

import midBanner from '../../images/logo/women-banner.jpg';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/Footer';

import tshirt from '../../assets/dress image/onepiece.jpg';
import sunglass from '../../assets/dress image/Sunglasses.jpg';
import bag from '../../assets/dress image/bag2.jpg';
import pant from '../../assets/dress image/pant.jpg';
import top from '../../assets/dress image/t shirt.jpg';
// import shirt from '../../assets/dress image/formal blue shirt.jpeg';
// import shoe from '../../assets/dress image/mens-denim-shirt.jpg';
// import item17 from '../../assets/dress image/gray sweater.jpg';
import Slider from '../../components/Slider';


import {Link} from 'react-router-dom';
import NewArrivalCarousel from './Carousel';
import ChatBot from '../../components/Headers/ChatBot';
/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  const category = useSelector(state => state.category);
  const product = useSelector(state => state.product);   
 
  console.log(category, ">>cate");
  const dispatch = useDispatch();
  console.log(product, ">>product");

  useEffect(() => {
    dispatch(getAllCategory())
  }, []);  

  const renderCategories = (categories) =>{
          
    let myCategories = [];
    for(let category of categories){
        myCategories.push(
            <li key ={category.name}>
             {
               category.parentId ? <a href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name} <img style={{width: '50px', height: '50px'}} src={category.categoryImage} alt="alt"/></a>  : <span>{category.name} </span>
             }
                {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>): null}
            </li>
        )
    } 

    return myCategories;

}

  return(
    // <Layout>
 

    // </Layout>
    <>
    <NavBar></NavBar>
    <br />  <br /> 
    <Carousel className="carousel slide carousel-inner">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

  
  </Carousel.Item>

</Carousel>
<div className="headding-all">
<h2>Top Catelogs</h2>
</div>
<div className="homeCategoryMain">

  {
    category.categories.map(cat => 
      
   
        <div className="homeCategory">
         <div>
                <Link to={`/${cat.name}`}>
                  <img src={cat.categoryImage} alt={cat.categoryImage} />
                </Link>
                <h5>{cat.name}</h5>
              
         </div>
      </div>
  
      
      )
  }
</div>

<ChatBot/>

<br /> <br /> <br /> <br />
<div className="headding-all">
<h2>New Arrivals</h2>
</div>
<br/><br/>

      <section className="newArr" style={{ margin: "50px auto"}}>
        <div className="secHead">
       
          {/* <ThumbBtn /> */}
        </div>

        {/* <ImageMenu /> */}
        
        <div className="d-grid">
          <div className="col">
            <div className="card">
              <div className="card-head">
                <Link to="/Men">
                  <img src={tshirt} alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
            </div>
          </div>
          
          <div className="col hide-card">
            <div className="card">
              <div className="card-head">
                <Link to="/accesories">
                  <img src={sunglass} alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h3>50% off</h3>
                <p className="price1">under &#8377;399</p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <div className="card-head">
              <Link to="/bags">
                <img src={bag} alt="" />
              </Link>
              </div>
              <div className="card-body">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <div className="card-head">
                <Link to="/shirts">
                  <img src={pant} alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-head">
                <Link to="/tshirt">
                  <img src={top} alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br/>
      <Slider />
      <br/>
    
      <section>
        <div className="mid-banner">
          <div className="midText">
             <h3>50% OFF</h3>
             <p className="midText-p">All Men, Women, Kids Collection</p>
             <button>Shop Now</button>
          </div>
          <div className="midImg">
            <img src={midBanner} alt="" />
           </div>
        </div>
        
      </section>
      <div className="headding-all">
<h2>Treanding Products</h2>

</div>
      <section>
        <NewArrivalCarousel />
        
      </section>
      <section>
      <div className="mid-banner">
          <div className="midText">
             <h3>50% OFF</h3>
             <p className="midText-p">All Men, Women, Kids Collection</p>
             <button>Shop Now</button>
          </div>
          <div className="midImg">
            <img src={midBanner} alt="" />
           </div>
        </div>
      </section>
     <Footer />
    </>
    
   )
 
 }

export default HomePage