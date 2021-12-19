import React from 'react';
import item1 from '../../images/3.png';
import item2 from '../../images/2.png';
import item3 from '../../images/3.png';
import item4 from '../../images/logo/bag2.jpg';
import item5 from '../../images/2.png';
import item6 from '../../images/3.png';
import item7 from '../../images/logo/bag2.jpg';
import item8 from '../../images/2.png';
import item9 from '../../images/3.png';
import item10 from '../../images/logo/bag2.jpg';
import Carousel  from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const NewArrivalCarousel = () => {
    return(
        <>
           <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={false}
          containerClass="carousel-container2"
          itemClass="carousel2-item"
        >
         <div><img src={item1} alt="" />
         <div className="carousel-img-content">
                <h3>dresses & more</h3>
                <p className="price2">under &#8377;399</p>
                <p>Deal of the Day</p>
              </div>
          </div>
         <div><img src={item2} alt="" />
         <div className="carousel-img-content">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
          </div>
         <div><img src={item3} alt="" />
         <div className="carousel-img-content">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
          </div>
         <div><img src={item4} alt="" />
         
         <div className="carousel-img-content">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
               </div>
         <div><img src={item5} alt="" />
         <div className="carousel-img-content">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
               </div>
         <div><img src={item6} alt="" />
         <div className="carousel-img-content">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
               </div>
         <div><img src={item7} alt="" />
         <div className="carousel-img-content">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
               </div>
         <div><img src={item8} alt="" />
         <div className="carousel-img-content">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
               </div>
         <div><img src={item9} alt="" />
         <div className="carousel-img-content">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
               </div>
         <div><img src={item10} alt="" />
         <div className="carousel-img-content">
                <h3>50% off</h3>
                <p className="price2">under &#8377;399</p>
              </div>
               </div>
         
        </Carousel>


        </>
    )
}
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024},
      items: 5, 
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464},
      items: 3,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0},
      items: 2,
      slideToSlide: 2
    },
  };

export default NewArrivalCarousel 
