import React from "react";
import { Container, Row, Legend } from "./styles";
import ShowCard from '../show-card';
import ShowCircle from "../show-circle";

const ShowList = ({ list, legend, type = 'card' }) => {
    return (
        <Container>
            <Legend>
                {legend}
            </Legend>
            <Row>
                {
                    list.map(listItem =>
                        type === 'card' ?
                            <ShowCard
                                key={listItem.id}
                                name={listItem.name}
                                image={listItem.gallery[0].imageUrl}
                            />
                            :
                            <ShowCircle key={listItem.id} image={listItem.image} />
                        )
                }
            </Row>
        </Container>
    );
};

export default ShowList;
