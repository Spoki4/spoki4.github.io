import React from "react";

import { Col, Row, Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import style from './style.css';

export default class NotFound extends React.Component {
    render() {
        return <Row>
            <Col md={3} />
            <Col md={6} >
                <Jumbotron>
                    <div className={style.padding}>
                        <h1>Ооо, что-то пошло не так!</h1>
                        <p>Ты видишь этот текст, потому что, страница на которую ты хотел перейти, не существует, либо уже не существует ;)</p>
                        <p>Советую перейти тебе на главную, там ты найдешь много интересного!</p>
                        <p><LinkContainer to="/"><Button>На главную</Button></LinkContainer></p>
                    </div>
                </Jumbotron>
            </Col>
            <Col md={3} />
        </Row>;
    }
}