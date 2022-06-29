import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getProducts } from '../../actions';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import Headers from '../../components/Headers';
import {Carousel} from 'react-bootstrap'
import banner1 from '../../images/272020405_464812595296041_7295958903263722819_n.jpg';
import banner2 from '../../images/259160982_1585068151841372_3646147803564310890_n.webp';
import banner3 from '../../images/259701936_580766106539358_619099137585829604_n.webp';



import feature1 from "../../images/feature-1.png";
import feature2 from "../../images/feature-2.png";
import feature3 from "../../images/feature-3.png";
import feature4 from "../../images/feature-4.png";


import midBanner from '../../images/DSC07615.JPG';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/Footer';

import tshirt from '../../images/242562540_592468095440901_5600156168981203813_n.jpg';
import sunglass from '../../images/239463368_135792245388282_7647288448685897450_n.jpg';
import bag from '../../images/234749943_509222953498055_5116095933961909045_n.jpg';
import pant from '../../images/DSC07621.JPG';
import top from '../../images/Web-cover-13.jpg';
import shirt from '../../images/DSC07623.JPG';
// import shoe from '../../assets/dress image/mens-denim-shirt.jpg';
// import item17 from '../../assets/dress image/gray sweater.jpg';
import Slider from '../../components/Slider';

import NewArrival from '../../components/NewArrival/Carousel';
import {Link} from 'react-router-dom';
import NewArrivalCarousel from './Carousel';
import ArrivalCarousel from './New Carousel';
import Pagi from '../pagination/pagination';
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
               category.parentId ? <a href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name} <img style={{width: '80px', height: '80px'}} src={category.categoryImage} alt="alt"/></a>  : <span>{category.name} </span>
             }
                {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>): null}
            </li>
        )
    } 

    return myCategories;

}

  return(
    <Layout>
 

   
    <>
    <NavBar></NavBar>
    <br />  <br /> 

<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>







<div className="headding-all">
<h2 >Top <span style={{"color" : "coral"}}>Catelogs</span></h2>
</div>
{/* <div className="homeCategoryMain">

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
</div> */}


<section class="about_area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4"><br/>
                                    <a href='#'>
                                    <img src={top} alt="" style = {{height:"400px" ,width: "600px"  }} />
                                    </a>
                                    </div>

                                    <div class="col-md-4"><br/>
                                    <a href='#'>
                                    <img src={bag} alt="" style = {{height:"400px" ,width: "600px"}} />
                                    </a>
                                    </div>

                                    <div class="col-md-4"><br/>
                                    <a href='#'>
                                    <img src={shirt} alt="" style = {{height:"400px" ,width: "600px"}} />
                                    </a>
                                    </div>

                                    <div class="col-md-6"><br/>
                                    <a href='#'>
                                    <img src={tshirt} alt="" style = {{height:"500px" ,width: "100%" , margin:"1px" }} />
                                    </a>
                                    </div>

                                    <div class="col-md-6"><br/>
                                    <a href='#'>
                                    <img src={pant} alt="" style = {{height:"500px" ,width: "100%" , margin:"1px" }} />
                                    </a>
                                    </div>

                                    
                                </div>

                                
                            </div>
                        </section>

<div className="headding-all">
<h2>New <span style={{"color" : "coral"}}>Arrivals</span></h2>
{/* <Pagi/> */}
</div>
<br/><br /> 
      <Slider />
      <br/>
    
      <section>
      <div className="mid-banner">
          <div className="midText">
             <h3>50% OFF</h3>
             <p className="midText-p">All Men, Women, Kids Collection</p>
             <button>Shop Now</button>
          </div>
          {/* <div className="midImg">
            <img src={midBanner} alt="" />
           </div> */}
        </div>
      </section>
      <div className="headding-all">
<h2>Treanding <span style={{"color" : "coral"}}>Products</span></h2>

</div>
      <section>
        <NewArrivalCarousel />
        
      </section>
      <section>
      <div className="mid-banner">
          <div className="midText">
             <h3 >50% OFF</h3>
             <p className="midText-p" style={{"color" : "#fff" ,"backgroundColor" : "blue" , "font-size" : "20px" , "font-weight" : "bold"}}>All Men, Women, Kids Collection</p>
            <br/><br/>
             <button style={{"backgroundColor" : "green"}}>Shop Now</button>
          </div>
         {/* <div className="midImg">
            <img src={midBanner} alt="" />
           </div> */}
       </div>
      </section>

      <div className="headding-all">
<h2>New <span style={{"color" : "coral"}}>Arrivals</span></h2>
<br/><br/>
<NewArrival />
</div>
<br/><br/>

<section class="about_area">
                            <div class="container">
                                <div class="row">
                                <div class="col-md-6"><br/>
                                <a href='#'>
                                    <img src={bag}  style = {{height: "350px" ,  width: "100%"}} /></a>
                                    <a href='#'>
                                    <img src={sunglass} href="#" style = {{height: "350px" ,  width: "100%" , paddingTop:"10px"}}/></a>
                                    </div>
                                    <div class="col-md-6"><br/>
                                    <a href='#'>
                                    <img src={tshirt} alt="" style = {{height:"700px" ,width: "100%" , margin:"10px" }} />
                                    </a>
                                    </div>
                                  
                                </div>
                            </div>
                        </section>

     {/* <Footer /> */}
     <div className="headding-all">
<h2>New <span style={{"color" : "coral"}}>Arrivals</span></h2>
<br/><br/>
<ArrivalCarousel />
</div>
<br/><br/>
<div className="headding-all">
<h2>New <span style={{"color" : "coral"}}>Arrivals</span></h2>
<br/><br/>
<NewArrival />
</div>
{/* <br/><br/> */}



  <section class="about_area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6"><br/>
                                    <a href='#'>
                                    <img src={tshirt} alt="" style = {{height:"700px" ,width: "100%" , margin:"10px" }} />
                                    </a>
                                    </div>
                                    <div class="col-md-6"><br/>
                                <a href='#'>
                                    <img src={bag}  style = {{height: "350px" ,  width: "100%"}} /></a>
                                    <a href='#'>
                                    <img src={sunglass} href="#" style = {{height: "350px" ,  width: "100%" , paddingTop:"10px"}}/></a>
                                    </div>
                                </div>
                            </div>
                        </section>





 <section class="service_section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <center>
            <div class="img-box" style={{"width":"80px"}}>
              <img src={feature1} alt=""/>
            </div>
            </center>
            <div class="detail-box">
              <h5>
                Fast Delivery
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <center>
              <div class="img-box" style={{"width":"80px"}}>
              <img src={feature2} alt="" />
            </div>
            </center>
            <div class="detail-box">
              <h5>
                Free Shiping
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <center>
            <div class="img-box" style={{"width":"80px", "alignItems":"center"}}>
              <img src={feature3} alt="" />
            </div>
            </center>
            <div class="detail-box">
              <h5>
                Best Quality
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
          <center>
             <div class="img-box" style={{"width":"80px", "alignItems":"center"}}>
              <img src={feature4} alt="" />
            </div>
          </center>
            <div class="detail-box">
              <h5>
                24x7 Customer support
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



    </>
    </Layout> 
   )
 
 }

export default HomePage