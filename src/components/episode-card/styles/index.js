import styled from 'styled-components/macro';

export const Container = styled.div`
    margin-bottom: 15px;
    width: 100%;
`;

export const Wrapper = styled.div`
    cursor: pointer;
    width: 100%;
    background-color: ${ ({ theme, active }) => active ? theme.black : theme.secondary };
    border-radius: 5px;

    &:hover {
        background-color: ${ ({ theme, active }) => active ? theme.black : theme.dark };
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    height: 100%;
`;

export const DisplaySection = styled.div`
    width: 20%;
    height: 100%;
`;

export const Display = styled.div`
    width: 100%;
    height: ${ ({ size }) => size === 'sm' ? '90px' : '120px' };
    overflow: hidden;
    border-radius: 5px;
    /* border: 1px solid #ffffff; */
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
`;

export const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    color: ${ ({ theme }) => theme.white };
`;

export const Label = styled.p`
    font-size: ${({ size }) => size === 'sm' ? '14px' : '18px' };
    margin: 0;
`;  

export const EpisodeNo = styled.p`
    font-size: ${({ size }) => size === 'sm' ? '14px' : '18px' };
    margin: 0;
`;

export const Title = styled.p`
    font-size: ${({ size }) => size === 'sm' ? '14px' : '18px' };
    margin: 0;
`;

export const Description = styled.p`
    font-size: ${({ size }) => size === 'sm' ? '12px' : '16px' };
    color: ${ ({ theme }) => theme.white };
    text-overflow: ellipsis;
    margin: 0;
`;

export const WatchContainer = styled.div`
    width: 100%;
`;

export const TotalDuration = styled.div`
    width: 100%;
    height: 5px;
    border-radius: 20px;
    overflow: hidden;
    background-color: ${ ({ theme }) => theme.greyish };
`;

export const WatchedDuration = styled.div`
    border-radius: 20px;
    height: 100%;
    width: ${ ({ watched }) => watched + '%' };
    background-color: ${ ({ theme }) => theme.primary };
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    position: relative;
`;

export const Button1 = styled.button`
    cursor: pointer;
    width: 120px;
    height: 35px;
    background-color: ${ ({ theme }) => theme.primary };
    color: ${ ({ theme }) => theme.white };
    border: none;
    border-radius: 5px;
    font-size: larger;
`;

export const Button2 = styled.button`
    cursor: pointer;
    width: 120px;
    height: 35px;
    background-color: transparent;
    color: white;
    border: 1px solid;
    border-color: white;
    border-radius: 5px;
    font-size: larger;
`;