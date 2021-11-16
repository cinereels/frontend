import React from "react";
import { Container, Row, Legend } from "./styles";
import ShowCard from '../show-card';

const ShowList = ({ list, legend }) => {
    return (
        <Container>
            <Legend>
                {legend}
            </Legend>
            <Row>
                {
                    list.map(listItem => <ShowCard name={listItem.name} image={listItem.image} />)
                }
            </Row>
        </Container>
    );
};

export default ShowList;
