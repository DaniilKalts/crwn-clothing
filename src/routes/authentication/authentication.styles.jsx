import styled from "styled-components";


export const AuthenticationContainer = styled.div`
    display: flex;
    max-width: 900px;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 992px){
        flex-direction: column;
        align-items: center;
        row-gap: 40px;
    }
`