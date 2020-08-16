import React, {Component} from 'react';
import {connect} from "react-redux";
import {getTeamEventTicketByTeamEventId} from "../actions/teamEventTicket.action";
import {getTeamEvents} from "../actions/teamEvents.action";
import {Link} from "react-router-dom";
import {getTeamEventsByTeamId} from "../actions/teamEvents.action";
import Example from "../charts/bar"
import Example1 from "../charts/line"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import {Layout} from "antd";

class TeamEventTickets extends Component {

    // style = {
    //     width: '100px',
    //     height: '80px'
    // };
    componentDidMount(){
        !this.props.teamEventTicket&&this.props.getTeamEventTicketByTeamEventId(this.props.match.params.id);
        console.log(this.props.match.params);
        console.log(this.props);

    }

    componentDidUpdate(prevProps,prevState){
        console.log();
    }
    constructor(props) {
        super(props);
        this.props.getTeamEvents();
        this.state={
            teamEventTicket:[
                {name: '1', eventdate:1, eventinfo:'1', eventprice:'1', id:1, teamId:67}
            ]
        };
    }

    render(){
        console.log(this.props.teamEvents);
        console.log(this.props.match.params.id);

        return (


            <div>
                <Container maxWidth="90px">
                    <Typography component="div" style={{ backgroundColor: '#a7fcfa', height: '12vh',margin: '0px'}}>
                        <div className="JumbotronBanner__container sh2 sh3 partner">
                            <div className="JumbotronBanner__wrapper partner">
                                <div className="JumbotronBanner__entityInfo__container">
                                    <div className="JumbotronBanner__entityInfo">

                                        <div className="JumbotronBanner__entityName" style={{display: 'inline-flex', margin: '0px'}}>
                                            <h3 className="JumbotronBanner__heading" style={{width:'1600px'}}>{this.props.te[0] && this.props.te[0].teamevent.eventinfo}</h3>
                                        </div>
                                        <div> <h5 className="JumbotronBanner__heading" style={{width:'1600px'}}>{this.props.te[0] && this.props.te[0].teamevent.eventdate}  {this.props.te[0] && this.props.te[0].teamevent.gametime} </h5>


                                        </div>
                                        <div>All tickets</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </Container>
                <Grid container spacing={3} style={{ margin: '30px'}}>

                    <Grid item xs={4}>
                        <Paper>
                            <table  className="table  " >
                                <thead >
                                <tr>
                                    <th>Session</th>
                                    <th>Row</th>
                                    <th>Price</th>

                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.te && this.props.te.map((t, index) => {
                                        return (
                                            <tr key={index}>
                                                <td><Link to={`/ticketDetail/${t.id}`}><div><h5>{t.ticketsession}</h5></div><div><h6>{t.numberofticket} tickets</h6></div></Link></td>
                                                <td>{t.ticketrow}</td>
                                                <td>${t.ticketprice}</td>
                                            </tr>
                                        );
                                    })
                                }
                                </tbody>

                            </table>
                        </Paper>
                    </Grid>
                    <Grid item xs={8} >
                        <Paper><Container maxWidth="900px">

                            <Typography variant="h4" gutterBottom>

                                <img style={{width:'850px',height:'800px'}}
                                        //id leixingbuyiyang
                                     src ={this.props.teamEvents && this.props.teamEvents.find(t =>(t.id==this.props.match.params.id)).courtimage}
                                     // src={this.props.te[0] && this.props.te[0].teamevent.courtimage}
                                />
                            </Typography>
                            <hr/>
                            <div style={{display: 'inline-flex', margin: '0px'}}>
                                <Example />
                                <Example1 />
                            </div>



                        </Container></Paper>
                    </Grid>

                </Grid>

            </div>

            // <div className="container" style={{display: 'inline-flex', margin: '10px'}}>
        );
    }
}

function mapStateToProps({teamEventTicket,teamEvents},componentProps) {
    // return a new object, {products: products}
    const teameventId = +componentProps.match.params.id;
    console.log(teameventId);
    var te=[];
    var tt=[];
    console.log(teamEventTicket);
    //first execute will return null, do a null check
    if(teamEventTicket){
        //teamid is inside an array
        teamEventTicket.forEach(t=>{if(t.teamevent.id===teameventId) {

            te.push(t);

        }})
    }

    // teamEvents && teamEvents.forEach(t=> tt.push(t));
    //props save te we can use it like props.teto call the data
    console.log(te);
    // console.log(tt);
    console.log(teamEvents);
    return {te,teamEvents};


}

export default connect(mapStateToProps, {getTeamEventTicketByTeamEventId, getTeamEvents})(TeamEventTickets);
