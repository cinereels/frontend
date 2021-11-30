import styled from 'styled-components/macro';

export const Container = styled.div`
    height: ${ ({ type, size }) => type === 'vertical' ? size + 'px' : '0px' };
    width: ${ ({ type, size }) => type === 'horizontal' ? size + 'px' : '0px' };
`;