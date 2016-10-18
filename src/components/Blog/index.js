import React from "react";
import {Grid, Row, Col, Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import Data from "../../store/BlogData.json";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Grid>
            <Col md={12}>
                {Data.data.map(function (item, index) {
                    return <Row key={index}>
                        <Row>
                            <Col md={12}>
                                <LinkContainer to={item.url}><h1>{item.title}</h1></LinkContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <p><Image src={item.image} responsive/></p>
                                <p>{item.short_text}</p>

                                <LinkContainer to={item.url}><h3 className="pull-left">Продолжение...</h3></LinkContainer>
                                <h3 className="pull-right">{item.date}</h3>
                            </Col>
                        </Row>
                        <hr />
                    </Row>
                })}
            </Col>
        </Grid>);
    }
}