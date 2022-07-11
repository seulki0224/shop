import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { useState } from 'react';
import React, { useEffect, useState } from "react";
// import data from "../../../../../Desktop/220521/shop/src/data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import NotFound from "./routes/NotFound.js";
import axios from "axios";
import data from "../src/data";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  //let [버튼, 버튼클릭] = useState[(0, 0)];

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
                      <Card key={index} shoes={shoes[index]} index={index} navigate={navigate} />
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
          <Route path="one" element={<span>첫 주문시 양배추즙 서비스</span>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* 서버와 통신을 위한 ajax1 */}

      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            //로딩중 UI 띄우기~
            //ajax Get요청 axios.get('url')
            //ajax Get요청 axios.get('url').then()
            axios.get("https://codingapple1.github.io/shop/data2.json")
              .then((result) => {
                let copy = [...shoes, ...result.data];
                console.log("copy =", copy); //콜백함수

                setShoes([...shoes, ...result.data]);
                console.log(result); //콜백함수
                console.log(result.data); //콜백함수
                console.log(result.data[2].title);
                
              })
              .catch(
                () => {
                  console.log("실패함");
                }
                //로딩중 UI숨기기~
              );
          }}
        >
          더보기
        </button>


        <button
          onClick={() => {
            //로딩중 UI 띄우기~
            //ajax Get요청 axios.get('url')
            //ajax Get요청 axios.get('url').then()
            axios.get("https://codingapple1.github.io/shop/data2.json")
              .then((result) => {
                let copy2 = [...shoes, ...result.data];
                console.log("copy =", copy2); //콜백함수

                setShoes([...shoes, ...result.data]);
                console.log(result); //콜백함수
                console.log(result.data); //콜백함수
                console.log(result.data[2].title);
                
              })
              .catch(
                () => {
                  console.log("실패함");
                }
                //로딩중 UI숨기기~
              );
          }}
        >
          더보기
        </button>


      </div>
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
        {/* <img src={`img/shoes${props.index}.jpg`} width="80%" /> */}
        {/* https://codingapple1.github.io/shop/shoes1.jpg */}
        <img src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`} width="80%" />
        {/* {console.log(props.index, "props----")} */}
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </div>
    </>
  );
}

export default App;
