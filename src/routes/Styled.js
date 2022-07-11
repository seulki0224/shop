import styled from "styled-components";

let Box = styled.div`
  padding: 10px;
  background: #ccc;
`;
let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
  border: none;
`;
let YellowBtn2 = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail() {
  return (
    <div>
      <Box>
        <YellowBtn>버튼임</YellowBtn>
      </Box>
    </div>
  );
}
