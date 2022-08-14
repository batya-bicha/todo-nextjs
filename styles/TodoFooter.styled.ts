import styled from 'styled-components';

export const StyledTodoFooter = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
width: 100%;
height: 40px;
background: #fff;
color: #4d4d4d;
font-size: 14px;
position: relative;
z-index: 1;

&::before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgb(0 0 0 / 20%);
  z-index: -1;
}
`;

export const StyledItemsLeft = styled.div`
width: 30%;
cursor: default;
`;

export const StyledItemsFilters = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;

  a {
    display: block;
    padding: 3px 7px;
    cursor: pointer;
    border: 0.5px solid transparent;
    position: relative;
    color: #4d4d4d;

    &.active {
      border: 0.5px solid rgba(175, 47, 47, 0.2);
    }

    &:hover {
      border: 0.5px solid rgba(175, 47, 47, 0.11);
    }
  }
`;

export const StyledClearCompleted = styled.div`
display: flex;
justify-content: end;
width: 30%;
cursor: pointer;

&:hover {
  text-decoration: underline;
}
`;