// import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import styled from "styled-components";

function Detail(props) {
  let [num, setNum] = useState("");

  useEffect(() => {
    if (isNaN(num) == true) {
      console.log("그러지마세요");
    }
  }, [num]);

  /* setTimeout(() => {
      setAlert(false);
    }, 2000);
   */
  /*  let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log("222");
    return () => {
      console.log("useEffect실행전 ");
      clearTimeout(a);
      console.log("기존타이머 제거");
    };
  }, []); //컴포넌트 mount시 1회만 실행
  //}, [count]); //count값이 변할때 */

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(x => x.id == id);

  return (
    <div className="container">
      <input
        onChange={e => {
          setNum(e.target.value);
        }}
      />

      {alert == true ? (
        <div className="alertaaa alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
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
