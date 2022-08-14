import styled from "styled-components";

export const StyledContainer = styled.div`
display: flex;
width: 100%;
height: 65px;
background: #fff;
border-radius: 2px;
overflow: hidden;
padding: 18px 5px 18px 20px;
z-index: 1;
`;

export const StyledPickAll = styled.div`
height: 100%;
margin-top: 4px;
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
cursor: pointer;

&::before {
  content: "❯";
  font-size: 22px;
  color: #e2e2e2;
}

&.allTodoTrue {
  &::before{
    color: #a3a3a3;
  }
}
`;

export const StyledInput = styled.input`
display: flex;
width: 100%;
height: 100%;
margin-left: 20px;
font-size: 24px;
font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

&::placeholder {
  color: #ffdbb3;
  opacity: 1;
}

&:-ms-input-placeholder {
  color: #ffdbb3;
}

&::-ms-input-placeholder {
  color: #ffdbb3;
}
`;