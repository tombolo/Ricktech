import styled, {css} from "styled-components";
import {primary} from "@/lib/colors";

export const ButtonStyle = css`
  border:0;
  margin: 3px;
  padding: 3px 4px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight:500;
  svg{
    height: 16px;
    margin-right: 7px;
  }
  
  ${props => props.block && css`
    display: block;
    width: 100%;
  `}
  ${props => props.white && !props.outline && css`
    background-color: #fff;
    color: #000;
  `}
  ${props => props.white && props.outline && css`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  `}
  ${props => props.black && !props.outline && css`
    background-color: #000080;
    color: #fff;
  `}
  ${props => props.black && props.outline && css`
    background-color: transparent;
    color: #000080;
    border: 1px solid #000;
  `}
  ${props => props.primary && !props.outline && css`
    background-color: ${primary};
    border: 1px solid ${primary};
    color:#fff;
  `}
  ${props => props.primary && props.outline && css`
    background-color: white;
    border: 1px solid;
    color:${primary};
  `}
  ${props => props.size === 'l' && css`
    font-size:1rem;
    padding: 10px 20px;
    svg{
      height: 20px;
    }
  `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({children,...rest}) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}