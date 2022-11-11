import React from 'react';
import Form from 'react-bootstrap/Form';

class BeastForm extends React.Component {

    render() {
        return (
            <>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="filterOption">Select The Number Of Horns</Form.Label>
                        <Form.Select id="filterOption" onChange={this.props.filter}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="MANY">MANY</option>
                            <option value="ALL">ALL</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default BeastForm;