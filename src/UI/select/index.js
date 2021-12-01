import React from 'react';
import { Container, Dropdown, Option } from './styles';

const Select = ({ options = [], placeholder, onSelect }) => {
    return (
        <Container>
            <Dropdown placeholder={placeholder} onSelect={e => onSelect(e.target.value)}>
                {
                    options.map(option => <Option value={option.value}>
                        {option.title}
                    </Option>)
                }
            </Dropdown>
        </Container>
    );
}

export default Select;