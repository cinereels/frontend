import styled from "styled-components/macro";

export const Container = styled.div`
    cursor: pointer;
    position: relative;
    height: 230px;
    width: 160px;
    margin-left: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    /* border: 0.5px solid #fff; */
`;

export const Overlay = styled.div`
    height: 100%;
    width: 100%;

    &:hover {
        opacity: 0.9;
    }
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Info = styled.div`
    position: absolute;
    left: 10px;
    bottom: 10px;
`;

export const Title = styled.p`
    color: ${ ({ theme }) => theme.white };
    font-size: 17px;
    text-overflow: ellipsis;
`;