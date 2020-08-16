import React, {Component} from 'react';
import _ from 'lodash'
import {connect} from "react-redux";
import {getTeamEventsByTeamId } from "../actions/teamEvents.action";
import {getTeams} from "../actions/teams.action";
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import {Layout} from "antd";



const { Header, Footer, Sider, Content } = Layout;


class TeamEvents extends Component {

    // style = {
    //     width: '100px',
    //     height: '80px'
    // };
    componentDidMount(){
        !this.props.teamEvents&&this.props.getTeamEventsByTeamId(this.props.match.params.id);
        console.log(this.props.match.params.id);
        console.log(this.props);

    }

    componentDidUpdate(prevProps,prevState){
        console.log();
    }
    constructor(props) {
        super(props);
        this.state={
            teamEvents:[
                {name: '1', eventdate:1, eventinfo:'1', eventprice:'1', id:1, teamId:67}
            ]
        };
    }

    render(){
        // console.log();
        // console.log(this.props.match.params.id);

        return (


            <div>
                <Container maxWidth="90px">
                    <Typography component="div" style={{ backgroundColor: '#a7fcfa', height: '15vh',margin: '0px'}}>
                        <div className="JumbotronBanner__container sh2 sh3 partner">
                            <div className="JumbotronBanner__wrapper partner">
                                <div className="JumbotronBanner__entityInfo__container">
                                    <div className="JumbotronBanner__partnerSection">

                                    </div>
                                    <div className="JumbotronBanner__entityInfo">

                                        <div className="JumbotronBanner__entityName" style={{display: 'inline-flex', margin: '0px'}}>
                                            <h1 className="JumbotronBanner__heading" style={{width:'1660px'}}>{this.props.te[0] && this.props.te[0].team.name}</h1>
                                            <img style={{width:'196px',height:'145px'}}

                                                 src={this.props.te[0] && this.props.te[0].team.teamimage}
                                                 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </Container>
                <Grid container spacing={3}>

                    <Grid item xs={6}>
                        <Paper>
                            <table  className="table table-bordered table-striped" >
                                <thead >
                                <tr>
                                    <th>EventDate</th>
                                    <th>EventInfo</th>
                                    <th>EventPrice</th>

                                </tr>
                                </thead>

                                <tbody>

                                {

                                    this.props.te && this.props.te.map((t, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{t.eventdate}</td>
                                                <td style={{wordBreak:'break-all'}}><Link to={`/teamEventTicket/teamEventId/${t.id}`}><div>{t.eventinfo}</div><div>{t.gametime}</div></Link></td>
                                                <td>from <span>$</span>{t.eventprice}</td>
                                            </tr>
                                        );
                                    })
                                }
                                </tbody>
                            </table>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper><Container maxWidth="900px">

                            <Typography variant="h4" gutterBottom>
                                {this.props.te[0] && this.props.te[0].team.name} Info
                            </Typography>
                            <Typography variant="h6" gutterBottom style={{color:'grey'}}>
                                {this.props.te[0] && this.props.te[0].team.teaminfo}
                            </Typography>
                        </Container></Paper>
                    </Grid>

                </Grid>

            </div>

            // <div className="container" style={{display: 'inline-flex', margin: '10px'}}>
        );
    }
}

function mapStateToProps({teams,teamEvents},componentProps) {
    // return a new object, {products: products}
    const teamId = +componentProps.match.params.id;
    var te=[];
    console.log(teamEvents);
    //first execute will return null, do a null check
    // if(teamEvents){
    //     //teamid is inside an array
    //     teamEvents.forEach(t=>{if(t !== null && t.team.id===teamId) {
    //
    //         te.push(t);
    //
    //     }else{}});
    // }
    if(teamEvents){
        //teamid is inside an array
        teamEvents.forEach(t=>{if(t != null) {
            console.log(t);
            if (t.team.id===teamId) te.push(t);

        }});
    }
    //props save te we can use it like props.teto call the data
    console.log(te);
    return {te};


}

export default connect(mapStateToProps, {getTeamEventsByTeamId})(TeamEvents);
