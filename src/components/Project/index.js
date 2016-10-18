import React from "react";

import {Grid, Col, Row, Image, Carousel} from 'react-bootstrap';

import Projects from '../../store/Projects.json';

import style from './style.css';

export default class Project extends React.Component {
    constructor(props) {
        super(props);
        var project = Projects.data.filter(function (item) {
            let urlParts = item.url.split("/");
            let url = urlParts[urlParts.length-1];
            return url == props.params.projectId;
        })[0];

        this.state = {
            project: project
        }
    }

    render() {
        const {title, images, description, technologies} = this.state.project;

        return <Grid>
            <Row>
                <Row><h1>{title}</h1></Row>
                <Row className>
                    <Carousel>
                        {images.map(function (item, index) {
                            return <Carousel.Item key={index}>
                                <Image src={item.url} responsive/>
                                <Carousel.Caption className={style.caption}>
                                    <h3 className={style.textShadow}>{item.caption}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        })}
                </Carousel>
                </Row>
                <Row className={style.information}><p>{description}</p></Row>
                <Row>
                    <h3>Используемые технологии и языки:</h3>
                    <p>{technologies}</p>
                </Row>
            </Row>
        </Grid>;
    }
}