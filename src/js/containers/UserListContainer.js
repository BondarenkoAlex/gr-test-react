import React, {
    Component,
    PropTypes,
} from 'react';
import {connect} from 'react-redux';

import UserList from '../components/UserList';
import {
    initUserListActions,
    deleteUserActions,
    editUserActions,
} from '../actions';

class UserListContainer extends Component {
    componentWillMount() {
        this.props.onInitList();
    }

    render() {
        let {
                userList,
                onEdit,
                onDelete,
            } = this.props;
        return (
            <UserList users={userList} onEdit={onEdit} onDelete={onDelete}/>
        );
    }
}

UserListContainer.propTypes    = {
    userList: PropTypes.array.isRequired,
};
UserListContainer.defaultProps = {};

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        userList: state.data.userList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEdit    : (user) => dispatch(editUserActions(user)),
        onDelete  : (user) => dispatch(deleteUserActions(user)),
        onInitList: () => dispatch(initUserListActions()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);

