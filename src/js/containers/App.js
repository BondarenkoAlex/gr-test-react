import React, {
    Component,
    PropTypes
} from 'react';

import {
    Row,
    Col,
    Grid,
} from 'react-bootstrap';

import UserListContainer from './UserListContainer';
import AddEditUserContainer from './AddEditUserContainer';

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Grid>
                <Col md={12}>
                    <Col md={12}>
                        <AddEditUserContainer/>
                    </Col>
                </Col>
                <Col md={12}>
                    <UserListContainer/>
                </Col>
            </Grid>
        );
    }
}

App.propTypes    = {};
App.defaultProps = {};

export default App;