import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 100vh;
    position: fixed;
    width: 100%;
    padding-top: 80px;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const ShowSection = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.black};
`;

export const LegendContainer = styled.div`

`;

export const EpisodeSection = styled.div`
    width: 400px;
    height: 100%;
    padding: 20px;
    padding-top: 0;
`;

export const EpisodeListContainer = styled.div`
    height: 80%;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const VideoContainer = styled.div`
    height: 500px;
    border: 1px solid #fff;
`;

export const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    color: ${ ({ theme }) => theme.white };
`;

export const Label = styled.p`
    font-size: 18px;
    margin: 0;
`;  

export const EpisodeNo = styled.p`
    font-size: 18px;
    margin: 0;
`;

export const Title = styled.p`
    font-size: 18px;
    margin: 0;
`;

export const Description = styled.p`
    font-size: 16px;
    color: ${ ({ theme }) => theme.white };
    text-overflow: ellipsis;
    margin: 0;
`;