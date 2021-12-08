import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding-top: 80px;
    position: fixed;
`;

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
`;

export const Preview = styled.div`
    width: 65%;
    height: 100%;
`;

export const Info = styled.div`
    width: 35%;
    flex: 1;
    display: flex;
    flex-direction: column;
    /* padding: 20px; */
    height: 100%;
    background-color: ${ ({ theme }) => theme.black };
    padding: 0 40px;
`;

export const VideoContainer = styled.div`
    /* border-bottom: 0.2px solid #ababab; */
    border-right: ${({ theme }) => `0.2px solid ${theme.background}`};
    background-color: ${ ({ theme }) => theme.black };
`;

export const GalleryContainer = styled.div`
    display: flex;
    width: 100%;
    /* align-items: center; */
    padding: 20px;
`;

export const Display = styled.div`
    height: 170px;
    width: 170px;
    border-radius: 5px;
    background-color: ${ ({ theme }) => theme.black };
    overflow: hidden;
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const MediaList = styled.div`
    display: flexbox;
    flex-wrap: wrap;
`;

export const MediaItem = styled.div`
    display: block;
    cursor: pointer;
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
    width: ${ ({ active }) => active ? '58px' : '60px' };
    height: ${ ({ active }) => active ? '58px' : '60px' };
    border-radius: 5px;
    background-color: ${({ theme }) => theme.black};
    overflow: hidden;
    border: ${ ({ theme, active }) => active ? `2px solid ${theme.primary}` : 'none' };
`;

export const MediaImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Text = styled.p`
    font-size: 18px;
    color: ${ ({ theme }) => theme.white };
    text-align: center;
`;

export const UploadButton = styled.button`
    margin: auto;
    background-color: ${ ({ theme }) => theme.primary };
    border-radius: 5px;
    color: ${ ({ theme }) => theme.white };
    border: none;
    font-size: 17px;
    padding: 10px 20px;
    width: min-content;
`;