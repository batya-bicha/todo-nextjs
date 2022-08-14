import styled from 'styled-components';



export const StyledTodoItem = styled.li`
width: 100%;
height: 65px;
padding: 18px 10px 18px 15px;
z-index: 2;
overflow: hidden;
border-radius: 1px;
border-bottom: 0.75px solid #ececec;
background: #fff;
`;

export const StyledContainer = styled.div`
position: relative;
display: flex;
align-items: center;
width: 100%;
height: 100%;
`;

export const StyledCheckOut = styled.div`
display: flex;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid #dddddd;
opacity: 0.5;
cursor: pointer;

> img {
  width: 80%;
}

&.active {
  opacity: 0.7;
  border-color: #19c048;
}
`;

export const StyledInput = styled.input`
display: flex;
width: 420px;
height: 100%;
margin-left: 15px;
font-size: 22px;
font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
position: relative;

&.checked{
  color: #c9c9c9;
  text-decoration: line-through;
}
`;

export const StyledDeleteTodo = styled.div`
position: absolute;
right: -5px;
top: 8px;
width: 10px;
height: 10px;
opacity: 0.3;
cursor: pointer;

&:hover {
  opacity: 1;
}

&:before,
&:after {
  content: " ";
  position: absolute;
  height: 15px;
  width: 2px;
  background-color: #ff0000;
}

&:before {
  transform: rotate(45deg);
}

&:after {
  transform: rotate(-45deg);
}
`;