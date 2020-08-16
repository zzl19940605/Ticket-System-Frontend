import React, { Component } from 'react';
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Snackbar from "@material-ui/core/Snackbar";
import {addTeamEvents} from "../actions/teamEvents.action";
import {getTeamEvents} from "../actions/teamEvents.action";
import {deleteTeamEventsByEventdate} from "../actions/teamEvents.action";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {getTeams} from "../actions/teams.action";

import {Link} from "react-router-dom";



class  DeleteTeamEvent  extends React.Component{
    // style = {
    //     width: '100px',
    //     height: '80px'
    // };
    constructor(props){
        super(props);
        this.state=[];
        this.props.getTeamEvents();

    }

    removeTeamEventHandler=(eventdate)=>{
        console.log(eventdate);
        this.props.deleteTeamEventsByEventdate(eventdate);
        const index=this.props.teamEvents.findIndex(teamEvent=>{
            return eventdate === teamEvent.eventdate;
        });
        this.props.teamEvents.splice(index,1);
        this.setState(this.props.teamEvents);
        // this.forceUpdate();
    }

    render(){
        return (

            <div>
                <h2 className="text-capitalize text-center text-muted" >All TeamEvents</h2>
                <table className="table table-bordered table-striped">
                    <thead className="text-center text-capitalize text">
                    <tr>

                        <th>EventDate</th>
                        <th>EventInfo</th>
                        <th>EventPrice</th>
                        <th>GameTime</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.teamEvents && this.props.teamEvents.map((p,index)=>{
                            return(p == null ? null :
                                <tr key={index} className="text-capitalize">
                                    <td>{p.eventdate}</td>
                                    <td>{p.eventinfo}</td>
                                    <td>{p.eventprice}</td>
                                    <td>{p.gametime}</td>
                                    <td>
                                        <Link to={`/edit-teamEvent/${p.id}`}>
                                            <Button variant="contained" color="primary" size="lg">edit</Button>&nbsp;&nbsp;
                                    </Link>


                                        <Button variant="contained" color="primary" size="lg" onClick={()=>this.removeTeamEventHandler(p.eventdate)}>delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

                <div className="float-lg-right">
                    <Link to="/add-teamEvent">
                        <Button variant="contained" color="primary" size="lg">
                            Add TeamEvent
                        </Button>
                    </Link>
                </div>
            </div>


        )
    }
}

function mapStateToProps({teamEvents}) {
    console.log(teamEvents);
    return {teamEvents};
}

export default connect(mapStateToProps,{getTeamEvents,deleteTeamEventsByEventdate})(DeleteTeamEvent );




