import React, { useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import item1 from "./images/arrivals/arrivals1.png";
// import "./App.css";

function Pagi() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      }, 
    {
      userId: 1,
      id: 2,
      img: "../../images/arrivals/arrivals1.png",
      name: "Makeup",
      price: "250",
    },
    {
      userId: 1,
      id: 3,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 1,
      id: 4,
      img: "../../images/arrivals/arrivals4.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 1,
      id: 5,
      img: "../../images/arrivals/arrivals5.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 1,
      id: 6,
      img: "../../images/arrivals/arrivals6.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 1,
      id: 7,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 1,
      id: 8,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 1,
      id: 9,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 1,
      id: 10,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 2,
      id: 11,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 2,
      id: 12,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 2,
      id: 13,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 2,
      id: 14,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 2,
      id: 15,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 2,
      id: 16,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 2,
      id: 17,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 2,
      id: 18,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 2,
      id: 19,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 2,
      id: 20,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 3,
      id: 21,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 3,
      id: 22,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 3,
      id: 23,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 3,
      id: 24,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 3,
      id: 25,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 3,
      id: 26,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 3,
      id: 27,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 3,
      id: 28,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 3,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
    {
      userId: 3,
      id: 30,
      img: "../../images/arrivals/arrivals2.png",
      name: "Makeup",
      price: "250",
      },
  ]);
  const [showPerPage, setShowPerPage] = useState(8);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className="App">
      <div className="container py-4">
        <div className="row">
          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className="col-md-3 mb-3" key={post.id}>
              <div className="card">
                <div className="card-body">
                
                   <img src={post.img} alt="" />
                  
                  <p>{post.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />
      </div>
    </div>
  );
}

export default Pagi;
