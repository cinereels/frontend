import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
`;

export const UnderlinedContainer = styled.div`
    position: relative;
    display: block;
    padding: 10px 0px;
    width: ${ ({ width }) => width ? width + 'px' : '100%' };
    /* height: ${ ({ height }) => height ? height + 'px' : '100%' }; */
    border-bottom: 1px solid #fff;
`;

export const TextInput = styled.input`
    width: 100%;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    margin: 0;
    color: ${ ({ color = '#fff' }) => color };
    padding: 0;
    font-size: 16px;

    ::placeholder {
        color: ${ ({ theme }) => theme.darkish };
        font-size: 16px;
        margin: 0;
    }

    &:active {
        border: none;
    }

    &:focus {
        border: none;
        outline: none;
    }
`;

export const Label = styled.p`
    font-size: 18px;
    margin: 0;
    color: ${ ({ labelColor = '#000' }) => labelColor };
`;

export const Suffix = styled.div`
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 40%;
`;