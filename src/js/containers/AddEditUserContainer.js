import React, {
    Component,
    PropTypes,
} from 'react';
import {connect} from 'react-redux';
import {
    Row,
    Col,
    Nav,
    NavItem,
    Button,
    Grid,
    Panel,
    ButtonToolbar,
} from 'react-bootstrap';
import AddUser from '../components/AddUser';
import EditUser from '../components/EditUser';
import {
    addUserActions,
    updateUserActions,
} from '../actions';

class AddEditUserContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let {
                user,
                onAdd,
                onEdit,
            } = this.props;
        return (
            <Panel header="Добавление/Редактирование пользователя">
                {(user.id === null)
                    ? <AddUser
                    user={user}
                    onAdd={onAdd}/>
                    : <EditUser
                    user={user}
                    onEdit={onEdit}/>
                }
            </Panel>
        );
    }
}

AddEditUserContainer.propTypes    = {
    user: PropTypes.object.isRequired,
};
AddEditUserContainer.defaultProps = {};

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        user: state.data.userInfo,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd : (user) => dispatch(addUserActions(user)),
        onEdit: (user) => dispatch(updateUserActions(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditUserContainer);

