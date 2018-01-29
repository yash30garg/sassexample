import React, {Component} from 'react';
import {connect} from 'react-redux';

// We need "if(!this.props.user)" because we set state to null by default
 

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <h3>{this.props.user.first} {this.props.user.last}</h3>
                <h4>Age: {this.props.user.age}</h4>
                <h4>Description: {this.props.user.description}</h4>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);