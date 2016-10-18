import React from "react";
import {Col, Row, Grid, ProgressBar} from "react-bootstrap";

export default class About extends React.Component {
    render() {
        return <Grid>
            <Col md={12}>
                <Row>
                    <h1>Немного обо мне</h1>
                    <p>Доброго времени суток, моё имя Иван и я <s>алкоголик</s>, шутка конечно же, я программист :)</p>
                    <p>Люблю играть в компьютерные игры, больше люблю стратегии(RTS) и немного пострелять. Увлекаюсь программированием, но хотя, как увлекаюсь, я программирую почти всё своё свободное время.
                        Свои первые строчки кода я написал в 11 лет, тогда же я увлекался одной open-source игрой, которую в последствии модифицировал. Она была написанна на c++, сборка реализовывалась через lua и скрипт.
                        Некоторые исходные файлы, преимущественно network часть и ресурсы, генерировались с помощью python. Юлагодоря этой игре, я и начал свой путь программиста.
                    </p>
                    <p>
                        Сейчас я больше программирую на Kotlin под Android. Изучаю разные паттерны, смотрю как и где их раелизовывать, нравиться писать приложения для себя, но я думаю вскоре
                        устроиться на работа Java(Kotlin) программистом. Перед Kotlin'ом я много писал на Java и С++. Увлекался веб-разработкой, тоже для себя, расширить кругозор так сказать.
                        Для себя я выделил несколько сфер в которые хочу углубиться, это Web-Development(frontend + backend) и Mobile-Development(Android, Kotlin).
                    </p>
                    <h1>Мои умения</h1>
                    <p>Начинающий уровень: 1-4  Уверенно пользуюсь: 5-8 Отлично знаю, как устроенно внутри: 9-10</p>
                    <p>C++: <ProgressBar max={10} now={5} label="5/10" active/></p>
                    <p>Java: <ProgressBar max={10} now={7} label="7/10" active/></p>
                    <p>Kotlin: <ProgressBar max={10} now={6} label="6/10" active/></p>
                    <p>HTML: <ProgressBar max={10} now={6} label="6/10" active/></p>
                    <p>CSS: <ProgressBar max={10} now={4} label="4/10" active/></p>
                    <p>Android: <ProgressBar max={10} now={7} label="7/10" active/></p>
                    <p>Python: <ProgressBar max={10} now={3} label="3/10" active/></p>
                    <p>JavaScript: <ProgressBar max={10} now={5} label="5/10" active/></p>
                    <p>React.js: <ProgressBar max={10} now={6} label="6/10" active/></p>
                    <p>Webpack: <ProgressBar max={10} now={7} label="7/10" active/></p>
                </Row>
            </Col>
        </Grid>;
    }
}