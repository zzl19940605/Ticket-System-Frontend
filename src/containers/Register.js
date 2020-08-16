import React from 'react'
import {login, register} from "../actions/auth.action";
import {Field,reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {Message} from "semantic-ui-react";
import Collapse from '@material-ui/core/Collapse';
import {Label} from 'semantic-ui-react';
import {Form} from 'formsy-semantic-ui-react';
import {makeStyles} from "@material-ui/core/styles/index";
// import Formsy from 'formsy-react';

const useStyles=makeStyles(theme =>({
    container: {
        margin: theme.spacing(1),
        padding:'25px 50px 75px 100px',
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        padding:'2px 5px 7px 10px',
        borderRadius: 3,
    },
    dense: {
        marginTop: 19,
    },
    menu:{
        width:200,
    },
    button:{
        margin:theme.spacing(2),
    },
    input:{
        display:'none',
    },
}));

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registed: false
        };
    }

//check the source code
    onValidSubmit = (formData)=>{
        // console.log('asd');
        this.props.register(formData,
            ()=>{
            this.setState({registed: true});
            }
            );
    };
    // onChange=()=>{
    //     console.log("qwe");
    // };

    render(){
        // console.log('1234');
        return (
            <div style={{margin:'100px'}}>
                <h2>welcome</h2>
                <Collapse in={this.state.registed} timeout="auto" unmountOnExit>
                    <Message
                        success
                        header='Register successful'
                    />
                </Collapse>
                <br />
                <Form ref={ref => this.form = ref} onValidSubmit={ this.onValidSubmit } onChange={this.onChange}>
                    <Form.Group widths="equal">
                        <Form.Input
                            className={useStyles.textField}
                            required
                            name="name"
                            label="Name"
                            placeholder="Name"
                            // validations="isWords"
                            errorLabel={<Label color="red" pointing/>}
                            validationErrors={{
                                isWords: 'no special characters',
                                isDefaultRequiredValue:'Name is required',

                            }}
                        />
                        <Form.Input
                            required
                            name="email"
                            label="Email"
                            placeholder="Email"
                            // validations="isEmail"
                            errorLabel={<Label color="red" pointing/>}
                            validationErrors={{
                                isEmail: 'should be valid email',
                                isDefaultRequiredValue:'email is required',
                            }}
                        />

                        <Form.Input
                            required
                            name="phone"
                            label="Phone"
                            placeholder="000-000-0000"
                            // validations="isNumeric"
                            errorLabel={<Label color="red" pointing/>}
                            validationErrors={{
                                isNumeric: 'no special characters',
                                isDefaultRequiredValue:'Phone is required',

                            }}
                        />
                    </Form.Group >

                    <Form.Group inline width="equal">
                        <Form.Input
                            required
                            name="username"
                            label="Username"
                            placeholder="Username"
                            errorLabel={<Label color="red" pointing/>}
                            validationErrors={{
                                isDefaultRequiredValue:'username is required',
                            }}
                         />

                    <Form.Input
                        required
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Password"
                        errorLabel={<Label color="red" pointing/>}
                        validationErrors={{

                            isDefaultRequiredValue:' password is required',
                        }}
                    />

                    <Form.Input
                        required
                        name="confirmpassword"
                        type="password"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        validations="equalsField:password"
                        errorLabel={<Label color="red" pointing/>}
                        validationErrors={{

                            isDefaultRequiredValue:'confirm password is required',
                        }}
                    />
                    </Form.Group >
                    <Form.Group>
                        <Form.Button content="Sign up" color="green"/>
                        {/*<button type="submit" >Submit</button>*/}
                    </Form.Group>

                </Form>
            </div>
        );

    }
}


function validate(){

}
function mapStatetoProps(){

}

export default connect(null,{register})(reduxForm({form:'LoginForm', validate})(RegisterForm));



//

//
//     onSubmit = (user) => {
//         const {username,password,cfpass} = user;
        // const newUser = {
        //     username,
        //     password
        // };
        // console.log(newUser);
//         this.props.registeruser({username,password}, (res) => {
//             if(res.data.success) {
//                 this.setState({
//                     message: 'Register Success!'
//                 });
//             }
//             else{
//                 this.setState({
//                     message: 'Register Fail!'
//                 });
//             }
//         });
//     }
//
//
//     renderField({input, label, type, meta}) {
//         return (
//             <div className="form-group">
//                 <label>
//                     {label}
//                     <input
//                         type={type}
//                         name={input.name}
//                         className="form-control"
//                         {...input}
//                     />
//                 </label>
//                 <p id="registerMsg" className="text-danger">{meta.touched && meta.error}</p>
//             </div>
//         )
//     }
//
//     render() {
//         return (
//             <div id="register">
//                 <h2>Register a New User</h2>
//                 <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
//                     <Field
//                         name="username"
//                         label="Username"
//                         type="text"
//                         component={this.renderField}
//                     />
//                     <Field
//                         name="password"
//                         label="Password"
//                         type="password"
//                         component={this.renderField}
//                     />
//                     <Field
//                         name="cfpass"
//                         label="Confirm Password"
//                         type="password"
//                         component={this.renderField}
//                     />
//                     <button className="btn btn-primary" type="submit">Submit</button>
//                     <label className="text-danger">{this.state.message}</label>
//                 </form>
//             </div>
//         );
//     }
//
// }
//
// function validate (formData){
//     let errors = {
//         cfpass:''
//     };
//     if(formData.username === '') {
//         errors.username = 'Username can\'t be empty!';
//     }
//     if(formData.password === '') {
//         errors.password = 'Password can\'t be empty!';
//     }
//     if(formData.cfpass === '') {
//         errors.cfpass = 'Confirm Password can\'t be empty! ';
//     }
//     if(formData.password !== formData.cfpass){
//         errors.cfpass += 'Password and confirm password should be same!';
//     }
//
//     return errors;
// }
//
// function mapStateToProps(state) {
//     return {
//         initialValues: {
//             username: '',
//             password: '',
//             cfpass:''
//         }
//     }
// }
//
// export default connect(mapStateToProps, {registeruser})(
//     reduxForm({
//         form: 'RegisterForm',
//         validate:validate
//     })(Register))
//
//
