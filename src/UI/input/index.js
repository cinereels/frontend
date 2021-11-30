import React, { useState } from 'react';
import { Container, Label, TextInput, UnderlinedContainer, Suffix } from './styles';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Input = ({ width, labelColor, label, value, color, placeholder, setValue, type = 'text' }) => {
    const [visible, setVisible] = useState(false);

    const modifiedType = type === 'password' ? (visible ? 'text' : 'password') : type;

    const toggleVisible = () => {
        setVisible(prevState => !prevState);
    }

    const iconSize = 20;

    return (
        <Container width={width}>
            <UnderlinedContainer>
                <Label labelColor={labelColor}>{label}</Label>
                <div style={{ height: 8 }} />
                <TextInput
                    value={value}
                    color={color}
                    placeholder={placeholder}
                    onChange={e => setValue(e.target.value)}
                    type={modifiedType}
                    autoComplete="one-time-code"
                />
                {
                    type === 'password' &&
                    <Suffix>
                        {
                            visible ?
                                <FiEye color={'#fff'} onClick={toggleVisible} size={iconSize} />
                                :
                                <FiEyeOff color={'#fff'} onClick={toggleVisible} size={iconSize} />
                        }
                    </Suffix>
                }
            </UnderlinedContainer>
        </Container>
    );
}

export default Input;