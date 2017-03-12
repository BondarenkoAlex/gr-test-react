import React, {
    Component,
    PropTypes,
} from 'react';
import {
    Button,
} from 'react-bootstrap';
import InputUserContainer from '../containers/InputUserContainer';

function AddUser({user, onAdd}) {
    return (
        <InputUserContainer
            user={user}
            onSubmit={onAdd}
        >
            <Button type="submit">Добавить</Button>
        </InputUserContainer>
    );
}

AddUser.propTypes    = {
    user    : PropTypes.object,
    onAdd   : PropTypes.func.isRequired,
};
AddUser.defaultProps = {};

export default AddUser;
