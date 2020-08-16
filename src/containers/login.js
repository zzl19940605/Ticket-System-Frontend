import React from 'react';
import {login} from "../actions/auth.action";
import {Field,reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid'
import {Redirect} from 'react-router';
import {Message} from "semantic-ui-react";
import Collapse from '@material-ui/core/Collapse';
import {connect} from "react-redux";

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

let Login= props => {
    const {handleSubmit}=props;
    const classes = useStyles();

    const [values,setValues] = React.useState({
        password:'',
        showPassword:false,
        loginFailed: true,
    });

    const submit = (user) => {
        props.login(user,
            (user) => {
                redirectHandler(user)
            }
        )
    };

    const redirectHandler = (user) =>{
        if(!user){
            setValues({...values,loginFailed: false});
        }
        console.log(user);
        const role= user.data.user.profiles[0].authority;
        setTimeout(()=> {

            switch(role){

                case 'ROLE_ADMIN':
                    props.history.push('/');
                    break;

                default:
                    props.history.push('/');

            }
        })
    }

    const renderTextField=(
        {input, label,meta:{touched, error},...custom}
    )=> {
        return (
            <TextField
                id={label}
                label={label}
                className={useStyles.textField}
                type={label}
                margin="normal"
                variant="outlined"
                {...input}
                {...custom}
            />
        );
    };

    const handleChange = prop => event => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () =>{
        setValues({...values,showPassword: !values.showPassword});
    };

    const renderPwd=(
        {input, label,meta:{touched, error},...custom}
    )=>{
        return (
            <TextField
                id={label}
                label={label}
                className={useStyles.textField}
                type={values.showPassword ? 'text':'password'}
                margin="normal"
                variant="outlined"
                InputProps={{
                    endAdornment:(
                      <InputAdornment position="end">
                          <IconButton
                              aria-label="Toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                          >
                              {values.showPassword?<VisibilityOff /> : <Visibility />}
                          </IconButton>
                      </InputAdornment>
                    ),
                }}
                {...input}
                {...custom}
            />
        );
    };
    console.log(props.auth);
    return (

        <div justify="center" className={classes.container}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <Field name="username" label="Username" component={renderTextField} type="text" />
                </div>
                <div style={{width:'225px'}}>
                    <Field name="password" label="Password" component={renderPwd} />
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit" className={classes.button}>Login</Button>
                </div>

                If not a user, click to
                <Link to="/users" className="btn btn-link">Register</Link>
            </form>
            <br/>
            <Collapse in={!values.loginFailed} timeout="auto" unmountOnExit>
                <Message
                    error
                    header='log in failed'
                />
            </Collapse>
        </div>
    );

}

function validate(){

}
export default connect(null,{login})(reduxForm({form:'LoginForm', validate})(Login));









// class Login extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     renderUsername(field){
//         return (
//             <div className="form-group">
//                 <label htmlFor="username">username</label>
//                 <input className="form-control"
//                        type="text"
//                        id="username"
//                        {...field.input}
//                 />
//             </div>
//         )
//     }
//
//     renderPassword(field){
//         // console.log('password: ',field);
//         const type = field.input.name==='password'? 'password':'text';
//         // const type = field.input.name === 'price' || field.input.name ==='stock' ? 'number':'text';
//         return (
//             <div className="form-group">
//                 <label htmlFor="password">password</label>
//                 <input
//                     className="form-control"
//                     type="text"
//                     id="password"
//                     // react developer use to get parent component into own component
//                     {...field.input}
//                 />
//             </div>
//         )
//     }
//     submit = (user) =>{
//
//         this.props.login(user,
//             (user)=>{
//             // console.log(user);
//             this.redirectHandler(user)
//         });
//     };
//
//     redirectHandler=(res)=>{
//
//         // console.log(user);
//
//         setTimeout(()=> {
//
//             if (res.data.success) {
//                 this.props.history.push('/add-team');
//             }
//
//             // switch(){
//             //
//             //     case 'role_admin':
//             //         this.props.history.push('/teams');
//             //         break;
//             //
//             //     default:
//             //         this.props.history.push('/add-team');
//             //
//             // }
//         })
//
//         }
//
//     render(){
//         return (
//             <main className={ "container"}>
//                 <h2>Login</h2>
//                 <form className="form-group" onSubmit={this.props.handleSubmit(this.submit)}>
//                     <Field
//                         name="username"
//                         component={this.renderUsername}
//                     />
//                     <Field
//                         name="password"
//                         component={this.renderPassword}
//                     />
//                     <Button variant="contained" color="primary" type="submit">
//                         login
//                     </Button>
//                 </form>
//             </main>
//
//         )
//     }
// }
// export default connect(null, {login})(reduxForm({
//     form: 'loginForm',
//     // initialValues:{name:'mars'},
//     validate: null
// })(Login));