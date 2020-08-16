import React from 'react'
import {connect} from "react-redux";
import {Redirect} from 'react-router';
import {Message} from "semantic-ui-react";
import {logout} from "../actions/auth.action";
import {reduxForm} from "redux-form";

let Logout = props =>{
    const {values,setValues} = React.useState({
        password: '',
        showPassword: false,
    });
    return (
        <div style={{margin:'100px'}}>
            <Message
                success
                header='Now, you log out.'
            />
        </div>
    );

};

function validate(){

}
export default connect(null,{logout})(reduxForm({form:'LoginForm', validate})(Logout));