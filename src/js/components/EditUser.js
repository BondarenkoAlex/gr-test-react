import React, {
    Component,
    PropTypes,
} from 'react';
import {
    Button,
} from 'react-bootstrap';
import InputUserContainer from '../containers/InputUserContainer';

function EditUser({user, onEdit}) {
    return (
        <InputUserContainer
            user={user}
            onSubmit={onEdit}
        >
            <Button type="submit">Редактировать</Button>
        </InputUserContainer>
    );
}

EditUser.propTypes    = {
    user    : PropTypes.object.isRequired,
    onEdit   : PropTypes.func.isRequired,
};
EditUser.defaultProps = {};

export default EditUser;
