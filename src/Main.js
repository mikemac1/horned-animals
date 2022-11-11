import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BeastForm from './BeastForm.js';

class Main extends React.Component {

    render() {

        let beastArr = this.props.Data.map((beast) => {
            return <HornedBeast
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
                horns={beast.horns}
                key={beast._id}
                displayBeastModal={() => this.props.displayBeastModal(beast)}
            />
        });

        return (
            <>
                <main>
                    <BeastForm 
                    filter={this.props.filter}
                    />
                    <Container fluid="lg">
                            <Row>
                                <Col>{beastArr[0]}</Col>
                                <Col>{beastArr[1]}</Col>
                                <Col>{beastArr[2]}</Col>
                            </Row>
                            <Row>
                                <Col>{beastArr[3]}</Col>
                                <Col>{beastArr[4]}</Col>
                                <Col>{beastArr[5]}</Col>
                            </Row>
                            <Row>
                                <Col>{beastArr[6]}</Col>
                                <Col>{beastArr[7]}</Col>
                                <Col>{beastArr[8]}</Col>
                            </Row>
                            <Row>
                                <Col>{beastArr[9]}</Col>
                                <Col>{beastArr[10]}</Col>
                                <Col>{beastArr[11]}</Col>
                            </Row>
                            <Row>
                                <Col>{beastArr[12]}</Col>
                                <Col>{beastArr[13]}</Col>
                                <Col>{beastArr[14]}</Col>
                            </Row>
                            <Row>
                                <Col>{beastArr[15]}</Col>
                                <Col>{beastArr[16]}</Col>
                                <Col>{beastArr[17]}</Col>
                            </Row>
                            <Row>
                                <Col>{beastArr[18]}</Col>
                                <Col>{beastArr[19]}</Col>
                            </Row>
                    </Container>
                </main>
            </>
        );
    }
}

export default Main;