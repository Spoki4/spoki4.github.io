import React from "react";

import {Grid, Col, Row, Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import style from './style.css';

import Projects from '../../store/Projects.json';

export default class ProjectList extends React.Component {
    constructor() {
        super();


    }

    render() {
        return <Grid>
            {Projects.data.map(function(item, index) {
                return <Row className={style.padding}>
                    <Row><h1>
                        <LinkContainer to={item.url}><a>{item.title}</a></LinkContainer>
                    </h1></Row>
                    <Row>
                        <Image src={item.images[0].url} responsive/>
                    </Row>
                </Row>

            })}
        </Grid>;
    }
}