import React, {
    PropTypes,
} from 'react';

import {
    Col,
    Panel,
    Button,
    ButtonToolbar,
} from 'react-bootstrap';

function UserInfo({user, onEdit, onDelete}) {
    return (
        <Col md={12}>
            <Panel header="Пользователь">
                <ul className="list-unstyled">
                    <li><b>{user.fullName}</b></li>
                    <li>{user.birthdayYear}-{user.birthdayMonth}-{user.birthdayDay}</li>
                    <li>{user.address}</li>
                    <li>{user.city}</li>
                    <li>{user.phone}</li>
                    <li>
                        <ButtonToolbar className="pull-right">
                            <Button onClick={()=>onEdit(user)}>Edit</Button>
                            <Button onClick={()=>onDelete(user)}>Delete</Button>
                        </ButtonToolbar>
                    </li>
                </ul>
            </Panel>
        </Col>
    );
}

UserInfo.propTypes    = {
    user    : PropTypes.object.isRequired,
    onEdit  : PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};
UserInfo.defaultProps = {};

export default UserInfo;