import styled from "styled-components";

export const StyledButton = styled.button`
display: inline-flex;
align-items: center;
cursor: pointer;
width: 100px;
height: 25px;
paddind: 8px;
margin-bottom: 5px;
color: blue;
background-color: royalblue;
outline: none;
border: 2px solid blue;
border-radius: 5px;
font-weight: bold;
&&:hover,
&&:focus {
    color: white;
    border-color: white;
}
`