import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { NavLink } from "react-router-dom";



export const FooterContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position: fixed;
    bottom: 20px;
    left: 0;
    width: 100%;  
`;

export const ButtonContainer = styled(Card)`
    border-radius:24px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:8vh;  
    width:90%;
`;

export const FooterButton = styled(NavLink)`
    width: 7vh;
    height:7vh;
    border-radius:16px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center ; 
`;