import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    h2{
        margin: 10px 0;
    }

    @media screen and (max-width: 425px){
        max-width: 300px;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 425px){
        flex-direction: column;
    }
`