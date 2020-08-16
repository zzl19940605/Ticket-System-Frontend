import React, { Component } from 'react';
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {addTeamEvents} from "../actions/teamEvents.action";
import {getTeamEvents} from "../actions/teamEvents.action";
import Snackbar from "@material-ui/core/Snackbar";
import {getTeams} from "../actions/teams.action";
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const TEAMEVENT_FIELDS=['id','gametime','eventdate','eventinfo','eventprice','courtname','courtimage'];
class AddTeamEvent extends Component{

    componentDidMount(){
        !this.props.teams&&this.props.getTeams();

        console.log(this.props.teams);

    }

    constructor(props){
        super(props);
        this.props.getTeamEvents();
        this.state = {
            newTeamEvent: {},
            msg: '',
            open: false,
            teams:[
                {name: '1', eventdate:1, eventinfo:'1', eventprice:'1', id:1, teamId:67}
            ]
        };
    };


    updateControl(event){
        const newTeamEvent = {...this.state.newTeamEvent};
        newTeamEvent[event.target.id] = event.target.value;
        newTeamEvent.team=this.props.te;
        console.log("hello",newTeamEvent);
        this.setState({newTeamEvent});
    }
    renderControl(field) {
        const inputType = 'text';
        return (
            <div key={field} className="form-group">
                <label htmlFor={field}>{field}</label>
                <input
                    type={inputType}
                    id={field}
                    className="form-control"
                    name={field}
                    onInput={this.updateControl.bind(this)}
                />
            </div>
        );
    }
    submit = (event) => {
        const newTeamEvent = {...this.state.newTeamEvent};

        event.preventDefault();
        this.props.addTeamEvents(newTeamEvent,
            (success) =>{
                this.showSnackBar(success);
            },
            (error) => {
                this.showSnackBar(error);
            },
            ()=>{this.props.history.push('/delete-teamEvent')}
        );
        this.props.teamEvents.push(newTeamEvent);
    };
    showSnackBar = (msg) => {
        this.setState({
            open: true,
            msg: msg,
            age: '',
            name: 'hai',
        })
    };
    handleClose = () => {
        this.setState({
            open:false
        })
    };

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        );
    };

    render(){
        console.log(this.state.teamId)
        return (
            <main className="container">
                <h2>Add Team Event</h2>
                <form onSubmit={this.submit}>
                    <FormControl>
                        <InputLabel htmlFor="name-simple">Team Name</InputLabel>
                        <Select
                            value={this.state.teamId}
                            onChange={this.handleChange.bind(this)}
                            inputProps={{
                                name: 'teamId',
                                id: 'name-simple',
                            }}
                            style={{width:"200px"}}
                        >
                            <MenuItem value={68}>Baltimore Orioles</MenuItem>
                            <MenuItem value={69}>Boston Red Sox</MenuItem>
                            <MenuItem value={70}>Chicago White Sox</MenuItem>
                            <MenuItem value={71}>Cleveland Indians</MenuItem>
                            <MenuItem value={109}>Detroit Tigers</MenuItem>
                            <MenuItem value={110}>Houston Astros</MenuItem>
                            <MenuItem value={111}>Kansas City Royals</MenuItem>
                            <MenuItem value={112}>Los Angeles Angels</MenuItem>
                            <MenuItem value={113}>Minnesota Twins</MenuItem>
                            <MenuItem value={114}>New York Yankees</MenuItem>
                            <MenuItem value={115}>Oakland Athletics</MenuItem>
                            <MenuItem value={116}>Seattle Mariners</MenuItem>
                            <MenuItem value={117}>Tampa Bay Rays</MenuItem>
                            <MenuItem value={118}>Texas Rangers</MenuItem>
                            <MenuItem value={119}>Toronto Blue Jays</MenuItem>

                        </Select>
                    </FormControl>


                    {
                        TEAMEVENT_FIELDS.map(field => this.renderControl(field))
                    }
                    <Button varient="contained" color="primary" type="submit">
                        Add Team Event
                        <CloudUploadIcon style={{marginLeft: '10px'}}/>
                    </Button>
                </form>
                <Snackbar
                    anchorOrigin={ {vertical:'bottom', horizontal:'center'} }
                    open={this.state.open}
                    onClose
                />
            </main>
        )

    }
}

function mapStateToProps({teams,teamEvents},componentProps) {
    // return a new object, {products: products}
    const teamId = 69;
    var te={} ;
    console.log(teams);
    //first execute will return null, do a null check
    if(teams){
        //teamid is inside an array
        teams.forEach(t=>{if(t.id===teamId) {

            te=t;

        }})
    }
    //props save te we can use it like props.teto call the data
    console.log(te);
    return {te,teamEvents};
}

export default connect(mapStateToProps, {addTeamEvents,getTeams,getTeamEvents})(AddTeamEvent);