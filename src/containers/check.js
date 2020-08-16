import React from 'react'
import {checkOut} from "../actions/check.action";
import {Field,reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {getTeamEventTicket} from "../actions/teamEventTicket.action";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Message} from "semantic-ui-react";
import Collapse from '@material-ui/core/Collapse';
import {Label} from 'semantic-ui-react';
import {Form} from 'formsy-semantic-ui-react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Container from '@material-ui/core/Container';
import teamEventTicket from "./teamEventTicket";

// import Formsy from 'formsy-react';

class CheckOutForm extends React.Component {

    componentDidMount(){
        !this.props.teamEventTicket&&this.props.getTeamEventTicket();

        console.log(this.props);

    }

    constructor(props) {
        super(props);
        props.getTeamEventTicket();
        this.state = {
            registed: false
        };
        console.log('props', props.teamEventTicket);
    }

//check the source code
    onValidSubmit = (formData)=>{
        formData["teamEventTicket"] = this.props.teamEventTicket[1];
        formData["user"] = {"id":153};
        console.log(formData);
        this.props.checkOut(formData,
            ()=>{

                this.setState({registed: true});

            }
        );
    };
    // onChange=()=>{
    //     console.log("qwe");
    // };

    render(){
        return (


            <div >


                <Grid container spacing={3} style={{ margin: '30px'}}>

                    <Grid item xs={5}>
                        <Paper>
                            <h2>Check Out</h2>
                            <Collapse in={this.state.registed} timeout="auto" unmountOnExit>
                                <Message
                                    success
                                    header='CheckOut successful'
                                />
                            </Collapse>
                            <br />
                            <Form ref={ref => this.form = ref} onValidSubmit={ this.onValidSubmit } onChange={this.onChange}>
                                <Form.Group widths="equal">
                                    <Form.Input
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
                                        name="address"
                                        label="Address"
                                        placeholder="Address"
                                        // validations="isEmail"
                                        errorLabel={<Label color="red" pointing/>}
                                        validationErrors={{
                                            isEmail: 'should be valid Address',
                                            isDefaultRequiredValue:'Address is required',
                                        }}
                                    />
                                    <Form.Input
                                        required
                                        name="city "
                                        label="City"
                                        placeholder="City"
                                        // validations="isEmail"
                                        errorLabel={<Label color="red" pointing/>}
                                        validationErrors={{
                                            isEmail: 'should be valid City',
                                            isDefaultRequiredValue:'City is required',
                                        }}
                                    />
                                    <Form.Input
                                        required
                                        name="state"
                                        label="State"
                                        placeholder="State"
                                        // validations="isEmail"
                                        errorLabel={<Label color="red" pointing/>}
                                        validationErrors={{
                                            isEmail: 'should be valid State',
                                            isDefaultRequiredValue:'State is required',
                                        }}
                                    />
                                    <Form.Input
                                        required
                                        name="zip"
                                        label="Zip"
                                        placeholder="Zip"
                                        // validations="isNumeric"
                                        errorLabel={<Label color="red" pointing/>}
                                        validationErrors={{
                                            isNumeric: 'no special characters',
                                            isDefaultRequiredValue:'Zip is required',

                                        }}
                                    />
                                    <Form.Input
                                        required
                                        name="cardName"
                                        label="Name on card"
                                        placeholder="Name on card"
                                        // validations="isNumeric"
                                        errorLabel={<Label color="red" pointing/>}
                                        validationErrors={{
                                            isNumeric: 'no special characters',
                                            isDefaultRequiredValue:'cardName is required',

                                        }}
                                    />
                                    <Form.Input
                                        required
                                        name="cardNumber"
                                        label="CardNumber"
                                        placeholder="number"
                                        // validations="isNumeric"
                                        errorLabel={<Label color="red" pointing/>}
                                        validationErrors={{
                                            isNumeric: 'no special characters',
                                            isDefaultRequiredValue:'CardNumber is required',

                                        }}
                                    />
                                    <Form.Input
                                        required
                                        name="expDate"
                                        label="expDate"
                                        placeholder="xxxx"
                                        // validations="isNumeric"
                                        errorLabel={<Label color="red" pointing/>}
                                        validationErrors={{
                                            isNumeric: 'no special characters',
                                            isDefaultRequiredValue:'Zip is required',

                                        }}
                                    />
                                    <Form.Input
                                        required
                                        name="cvv"
                                        label="cvv"
                                        placeholder="xxx"
                                        helperText="Last three digits on signature strip"
                                        // validations="isNumeric"
                                        errorLabel={<Label color="red" pointing/>}
                                        validationErrors={{
                                            isNumeric: 'no special characters',
                                            isDefaultRequiredValue:'cvv is required',

                                        }}
                                    />
                                </Form.Group >

                                {/*<Form.Group inline width="equal">*/}
                                {/*<Form.Input*/}
                                {/*required*/}
                                {/*name="username"*/}
                                {/*label="Username"*/}
                                {/*placeholder="Username"*/}
                                {/*errorLabel={<Label color="red" pointing/>}*/}
                                {/*validationErrors={{*/}
                                {/*isDefaultRequiredValue:'username is required',*/}
                                {/*}}*/}
                                {/*/>*/}

                                {/*<Form.Input*/}
                                {/*required*/}
                                {/*name="password"*/}
                                {/*label="Password"*/}
                                {/*placeholder="Password"*/}
                                {/*errorLabel={<Label color="red" pointing/>}*/}
                                {/*validationErrors={{*/}

                                {/*isDefaultRequiredValue:' password is required',*/}
                                {/*}}*/}
                                {/*/>*/}

                                {/**/}
                                {/*</Form.Group >*/}
                                <Form.Group>
                                    <Form.Button content="Place Order" color="green"/>
                                    {/*&nbsp;&nbsp;*/}
                                    {/*<Link to="/order">*/}
                                        {/*<Form.Button content="Check Order" color="green"/>*/}
                                    {/*</Link>*/}
                                    {/*<button type="submit" >Submit</button>*/}
                                </Form.Group>

                            </Form>
                        </Paper>
                    </Grid>
                    <Grid item xs={7} >
                        <Paper><Container maxWidth="900px">

                            <Typography variant="h4" gutterBottom>
                                <div>Order Total</div>

                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h5 className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Game Info:
                                    </h5>
                                    <h5 className="text-title  text-muted mt-3 mb-2">{this.props.teamEventTicket &&this.props.teamEventTicket[1].eventdetail}</h5>
                                    <div className="dash-separator">-------------------------------------</div>
                                    <h5 className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Tickets Info:
                                    </h5>
                                    <h6 className="text-title  text-muted mt-3 mb-2">Session: {this.props.teamEventTicket &&this.props.teamEventTicket[1].ticketsession} </h6>
                                    <h6 className="text-title  text-muted mt-3 mb-2">
                                        Row: {this.props.teamEventTicket &&this.props.teamEventTicket[1].ticketrow}
                                    </h6>
                                    <h6 className="text-title  text-muted mt-3 mb-2">Seats: {this.props.teamEventTicket &&this.props.teamEventTicket[1].seats} </h6>
                                    <h6 className="text-title  text-muted mt-3 mb-2">Number of tickets: {this.props.teamEventTicket &&this.props.teamEventTicket[1].numberofticket} </h6>
                                    <div className="dash-separator">-------------------------------------</div>

                                    <h4>
                                        <strong className="text-danger">
                                            Price: <span>$</span>
                                            {this.props.teamEventTicket &&this.props.teamEventTicket[1].ticketprice*this.props.teamEventTicket[1].numberofticket}

                                        </strong>
                                    </h4>
                                </div>



                            </Typography>

                        </Container></Paper>
                    </Grid>

                </Grid>


            </div>
        );

    }
}


function validate(){

}
function mapStateToProps({teamEventTicket}, componentProps){

    console.log(teamEventTicket)
    return {
        teamEventTicket,
    };
}

export default connect(mapStateToProps,{checkOut,getTeamEventTicket})(reduxForm({form:'LoginForm', validate})(CheckOutForm));
