import React from "react";
import {Row, Col, Grid, Image} from 'react-bootstrap';

import BlogData from '../../store/BlogData.json';

import style from './style.css'

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        var post = BlogData.data.filter(function (item) {
            let urlParts = item.url.split("/");
            let url = urlParts[urlParts.length-1];
            return url == props.params.postId;
        })[0];


        this.state = {
            post: post
        }
    }

    render() {
        const {title, image, date, full_text} = this.state.post;
        return <Grid>
            <Col md={12}>
                <Row><h1>{title}</h1></Row>
                <Row><Image src={image} responsive/></Row>
                <Row className={style.mainText}>{full_text}</Row>
                <Row>Дата создания: {date}</Row>
            </Col>
        </Grid>;
    }
}