// import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import styled from "styled-components";

function Detail(props) {

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(x => x.id == id);

  //2초뒤에 div 사라짐
  /* useEffect(() => {
    setTimeout(()=>{ setAlert(false) }, 2000)
  }) */

  //Dependency [] <- useEffect 실행조건을 넣을수 있는곳
  /* useEffect(() => {    
    //setTimeout(()=>{ setAlert(false) }, 2000)
    setTimeout(()=>{ setAlert(false) }, 2000)
    console.log(1)
  }
  //, []);    //컴포넌트 mount시 1회만 실행
  , [count])  //[count]<- 카운트 변수가 변할때 실행 됨
  */

  //return() => {} useEffect 동작 전에 실행되는 리턴코드
  /* useEffect(() => {
    
    let a = setTimeout(()=>{ setAlert(false) }, 2000)    
    console.log("useEffect실행전")

    return () => {      
      clearTimeout(a)
      console.log("기존타이머 제거")
      //기존 데이터 영역 제거 해주세요 등으로 활용
    }

  }) */

  //숫자만 입력 가능
  let [num, setNum] = useState("");

  useEffect(() => {
    if (isNaN(num) == true) {
      console.log("그러지마세요");
    }
  }, [num]);
  
  return (
    <div className="container">
      
      {/* alert, setAlert*/}
      { 
        alert == true 
        ? <div className="alertaaa alert alert-warning"> 2초이내 구매시 할인 </div>
        : null
      }      
      <br/><br/>

      {/* [num] */}
      <input onChange={ e => {
          setNum(e.target.value);
        }}
      />
      <br/><br/>

      {count} 
      <button onClick={() => setCount(count + 1)}>버튼</button>
      
      <div className="row">
        <div className="col-md-6">
          <img src={`../img/shoes${id}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
