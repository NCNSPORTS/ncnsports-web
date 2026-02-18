import styled from "styled-components";

export const Navbar = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-top: 1px solid var(--color-hover);
    > a {
        display: flex;
        align-items: center;
        font-weight: bold;
        margin: 0 18px;
        padding: 10px 15px;
        :hover {
            opacity: 70%;
        }
     }
`;

