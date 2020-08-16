import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import {getTeamEvents} from "../actions/teamEvents.action";
import {editTeamEvents} from "../actions/teamEvents.action";

class EditTeamEvent extends React.Component{

    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log('2');
        !this.props.teamEvents && this.props.getTeamEvents();
    }
    //will be executed whenever props changed
    //it also expects you to return a new state
    // static getDerivedStateFromProps(props, currentState) {
    //     if(props.products){
    //
    //         //prefill the form
    //         // props.initialize(product);
    //         return {
    //             editProduct: product
    //         }
    //     }
    //     return null;
    // }

    renderField(field){
        console.log(field);
        // const type = field.input.name === 'price' || field.input.name ==='stock' ? 'number':'text';
        return (
            <div className="form-group">
                <label htmlFor={field.input.name}>{field.input.name}</label>
                <input
                    className="form-control"
                    // type={type}
                    id={field.input.name}
                    // react developer use to get parent component into own component
                    {...field.input}
                />
                <div style={ {color: 'red'} }>{field.meta.error}</div>
            </div>
        )
    }

    submit=(teamEvent)=>{
        console.log("new teamEvent",teamEvent);
        this.props.editTeamEvents(teamEvent, ()=>{
                this.props.history.push('/delete-teamEvent');
            }
        );
    }
    handleClick=()=>{
        this.props.history.push('/delete-teamEvent')
    }

    render(){
        return (
            <main className="container">
                <h2>Edit Team Event </h2>
                <form onSubmit={this.props.handleSubmit(this.submit.bind(this))} >
                    {/*parent component*/}
                    {/* Higher order component */}
                    <Field
                        name="eventdate"
                        component={this.renderField}
                    />
                    <Field
                        name="eventinfo"
                        component={this.renderField}
                    />
                    <Field
                        name="gametime"
                        component={this.renderField}
                    />
                    <Field
                        name="eventprice"
                        component={this.renderField}
                    />
                    <Field
                        name="courtname"
                        component={this.renderField}
                    />
                    <Field
                        name="courtimage"
                        component={this.renderField}
                    />

                    <Button variant="primary" onClick={this.handleClick} >Go Back</Button>&nbsp;&nbsp;&nbsp;
                    <Button variant="primary" type="submit" >Submit</Button>
                </form>

            </main>
        );
    }
}
function validate(values){
    const errors = {};
    for(const key in values){
        if (!values[key]){
            errors[key] = `${key} can't be empty`;
        }
    }
    /*if(!values.name){
        errors.name = 'Name can\'t be empty'
    }*/
    return errors;
    // console.log(values);
}
//syntax sugar
//object destructural
//obj= {product: [1,2,3]}  const {products} =obj;  =>const products = obj.products
function mapStateToProps({teamEvents, form}, componentProps){
    console.log('1');
    console.log(teamEvents);
    const id = +componentProps.match.params.id;
    const teamEvent = teamEvents&&teamEvents.find(p => p.id===id);
    return {
        teamEvents,
        initialValues: teamEvent
    };
}
export default connect(mapStateToProps, {getTeamEvents,editTeamEvents})(reduxForm({
    form: 'EditProductForm',
    enableReinitialize: true,
    // initialValues:{name:'mars'},
    validate
})(EditTeamEvent));






