/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug, getAllProduct } from "../../../actions";
import Card from "../../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import banner1 from "../../../images/logo/banner-3.jpg";
import banner2 from "../../../images/logo/women-banner.jpg";
import banner3 from "../../../images/kidBanner.jpeg";
import item1 from "../../../images/3.png";
import kid1 from "../../../assets/dress image/blazer.jpg";
import kid2 from "../../../assets/dress image/boy shirt.jfif";
import kid3 from "../../../assets/dress image/black jeans.jpg";
import kid4 from "../../../assets/dress image/belt.jpeg";
import kid5 from "../../../assets/dress image/bag2.jpg";
import kid6 from "../../../assets/dress image/bottle.jpg";
import midBanner from "../../../images/1.png";
import "../../../components/filter/filter.css";
import Filter from "../../../components/filter/Filter";
import FilterSortingBar from "../../../components/filter/FilterSortingBar";
import FilterComp from "../../../components/filter/FilterComp";
import FilterBar from "../../../components/filter/FilterBar";
import FilterMobileUi from "../../../components/filter/FilterMobileUi";
import useStateDimensions from "../../../components/utility/useWindowDimensions";

import "./style.css";

/**
 * @author
 * @function ClothingAndAccessories
 **/

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const { width, height } = useStateDimensions();

  const dispatch = useDispatch();

  useEffect(() => {
    const { slug } = props.match.params;

    dispatch(getProductsBySlug(slug));
  }, []);

  console.log("this slug");
  console.log(props.match.params.slug);

  const filter = ["price", "size", "color"];
  const [filterState, setFilter] = useState("");
  const [filterRevealState, setFilterReveal] = useState(false);

  let filterReveal = "";
  if (!filterRevealState) {
    filterReveal = "none";
  }

  return (
    <>
      <Carousel className="carousel slide carousel-inner">
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Second slide" />
        </Carousel.Item>
      </Carousel>

      <br />

      <FilterSortingBar
        setFilterReveal={setFilterReveal}
        filterRevealState={filterRevealState}
      />
      <div className="ProductsContainer relative">
        {width < 800 && (
          <>
            <FilterMobileUi
              products={product}
              filter={filter}
              filterState={filterState}
              setFilter={setFilter}
            />
          </>
        )}
        <div className="overflow-hidden relative">
          <div
            className={
              width < 800
                ? "filterSection relative flex-column"
                : "filterSection relative"
            }>
            {width > 800 && (
              <div style={{ display: "flex", width: "40%" }}>
                <FilterBar
                  filter={filter}
                  filterState={filterState}
                  setFilter={setFilter}
                />
                <Filter
                  products={product}
                  filter={filter}
                  filterState={filterState}
                  setFilter={setFilter}
                />
              </div>
            )}
            <div
              className={
                width > 800
                  ? "productSection my-0"
                  : "productSection my-0 w-full"
              }>
              <div
                className={
                  width > 800
                    ? "undefinedFlex1 overflow-y-auto"
                    : width > 600
                    ? "undefinedFlex1 overflow-y-auto grid gap-3 grid-cols-3 justify-items-center items-center"
                    : "undefinedFlex1 overflow-y-auto grid gap-3 grid-cols-2 justify-items-center items-center"
                }>
                <FilterComp product={product} />
              </div>
            </div>
          </div>
        </div>

        {/* <SortingMobile /> */}
      </div>

      <section>
        <Container>
          <div className="kid-last-container">
            <div className="upperFlex">
              <div className="kidNewContainer">
                <div className="kidLastImg kid1">
                  <img src={kid1} alt="" />
                </div>
                <div className="kidLastImg kid2">
                  <img src={kid2} alt="" />
                </div>
              </div>
              <div className="kidNewTextContainer">
                <h2>Topwear</h2>
                <p>More Cuddly In These Cute Topwear</p>
                <button>SHOP NOW</button>
              </div>
            </div>
            <div className="kidNewRightside">
              <div className="rightCard">
                <img src={kid3} alt="" />
                <p>Rompers</p>
              </div>
              <div className="rightCard">
                <img src={kid4} alt="" />
                <p>Rompers</p>
              </div>
            </div>
            <div className="kidNewRightside">
              <div className="rightCard">
                <img src={kid5} alt="" />
                <p>Rompers</p>
              </div>
              <div className="rightCard">
                <img src={kid6} alt="" />
                <p>Rompers</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ClothingAndAccessories;
