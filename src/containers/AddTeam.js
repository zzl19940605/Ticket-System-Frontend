import React, { Component } from 'react';
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {addTeam} from "../actions/teams.action";
import {getTeams} from "../actions/teams.action";
import Snackbar from "@material-ui/core/Snackbar";

const TEAM_FIELDS=['name','teamimage'];
class AddTeam extends Component{
    constructor(props){
        super(props);
        this.props.getTeams();
        this.state = {
            newTeam: {},
            msg: '',
            open: false
        };
    }
    updateControl(event){
        const newTeam = {...this.state.newTeam};
        newTeam[event.target.id] = event.target.value;
        this.setState({newTeam});
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
        const newTeam = {...this.state.newTeam};
        event.preventDefault();
        this.props.addTeam(newTeam,
            (success) =>{
                this.showSnackBar(success);
            },
            (error) => {
                this.showSnackBar(error);
                }
            );
        this.props.teams.push(newTeam);
        // this.setState(this.props.teams);
    };
    showSnackBar = (msg) => {
        this.setState({
            open: true,
            msg: msg
        })
    };
    handleClose = () => {
        this.setState({
            open:false
        })
    };
    render(){
        return (
            <main className="container">
                <h2>ADD Team</h2>
                <form onSubmit={this.submit}>
                    {
                        TEAM_FIELDS.map(field => this.renderControl(field))
                    }
                    <Button varient="contained" color="primary" type="submit">
                        Add Team
                        <CloudUploadIcon style={{marginLeft: '10px'}}/>
                    </Button>
                </form>
                <Snackbar
                    anchorOrigin={ {vertical:'bottom', horizontal:'center'} }
                    message={<span id="message-id">Add team successfully</span>}
                    open={this.state.open}
                    onClose
                />
            </main>
        )
    }
}

function mapStateToProps({teams}) {
    console.log(teams);
    return {teams};
}

export default connect(mapStateToProps, {addTeam,getTeams})(AddTeam);