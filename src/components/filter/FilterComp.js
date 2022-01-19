/** @format */

import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { generatePublicUrl } from "../../urlConfig";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const FilterComp = () => {
  const product = useSelector((state) => state.product);

  return product.filteredItems.map((e, index) => {
    const size = e.size;
    return (
      <div className="caContainer">
        <div>
          <Link className="caImgContainer" to={`/${e.slug}/${e._id}/p`}>
            <img
              variant="top"
              src={generatePublicUrl(e.productPictures[0])}
              alt={e.slug}
            />
          </Link>
        </div>
        <div className="caProductText">
          <div>
            <Card.Title className="caProductTitle">{e.name}</Card.Title>
          </div>
          <div>
            <div className="caProductPrice">
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
