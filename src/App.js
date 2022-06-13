import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { useState } from 'react';
import React, { useState } from "react";
// import data from "../../../../../Desktop/220521/shop/src/data.js";
import data from "../src/data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import NotFound from "./routes/NotFound.js";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about/member");
              }}
            >
              Member
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about/location");
              }}
            >
              Location
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              장바구니
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event/one");
              }}
            >
              one
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event/two");
              }}
            >
              two
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              뒤로가기
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + "./img/bg.png" + ")" }}
              ></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, index) => {
                    return (
                      <Card
                        key={index}
                        shoes={shoes[index]}
                        index={index}
                        navigate={navigate}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        {/* Nested Routes */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>location</div>}></Route>
        </Route>

        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={<span>첫 주문시 양배추즙 서비스</span>}
          ></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet> {/* 어디보여줄지 정하려면<Outlet/> */}
    </div>
  );
}

function Card(props) {
  return (
    <>
      <div
        className="col-md-4"
        onClick={() => {
          props.navigate(`/detail/${props.index}`);
        }}
      >
        <img src={`img/shoes${props.index}.jpg`} width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </div>
    </>
  );
}

export default App;
