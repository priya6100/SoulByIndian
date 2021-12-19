/** @format */

import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { generatePublicUrl } from "../../urlConfig";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import useStateDimensions from "../utility/useWindowDimensions";

const FilterComp = () => {
  const { width, height } = useStateDimensions();
  const product = useSelector((state) => state.product);

  return product.filteredItems.map((e, index) => {
    const size = e.size;
    return (
      <div className="caContainer" style={{ width: width < 800 && "175px" }}>
        <div>
          <Link className="caImgContainer" to={`/${e.slug}/${e._id}/p`}>
            <img
              variant="top"
              src={generatePublicUrl(e.productPictures[0])}
              alt={e.slug}
            />
          </Link>
        </div>
        <div className={width > 800 ? "caProductText" : "caProductText h-48"}>
          <div>
            <Card.Title className="caProductTitle">{e.name}</Card.Title>
          </div>
          <div>
            <div className="caProductPrice flex items-center justify-center">
              <BiRupee />
              {e.price}
            </div>
            <div className="caProductColor">
              {e.color.map((color) => {
                return (
                  <div
                    className="caProductColorContent"
                    style={{
                      background: color,
                    }}></div>
                );
              })}
            </div>
            <hr />
            <div
              className=""
              style={{ display: "flex", justifyContent: "space-around" }}>
              {Object.keys(size).map((name) => {
                return size[name] ? <div>{name.split("_")[0]}</div> : "";
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default FilterComp;
