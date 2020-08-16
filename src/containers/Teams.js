import React, {Component} from 'react';
import {connect} from "react-redux";
import {getTeams} from "../actions/teams.action";
import {Link} from "react-router-dom";

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

class Teams extends Component {

    style = {
        width: '100px',
        height: '80px'
    };

    constructor(props) {
        super(props);

        props.getTeams();

        this.state={};
    }

    render(){
        console.log(this.props.teams);
        return (

            <div><h1 className="JumbotronBanner__heading">MLB Teams</h1>
            <div className="JumbotronBanner__entityName" style={{display: 'inline-flex', margin: '0px'}}>
                <div className="JumbotronBanner__favorites"></div>

            <table className = "table  " style={{width:'800px'}}>
                <thead>
                <tr>
                    <th>Team Logo</th>
                    <th>Team Name</th>
                </tr>
                </thead>

                <tbody>
                {
                    this.props.teams && this.props.teams.map((t, index) =>{
                        return ( t == null ? null :
                            <tr key={index}>
                                <td style={{width:'200px'}}><img style={{width:'100px',height:'60px'}} src={t.teamimage}/></td>
                                <td ><Link to={`/teamEvents/teamId/${t.id}`}><h3>{t.name}</h3></Link></td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>

                <Container maxWidth="900px">

                    <Typography variant="h4" gutterBottom>
                        Major League Baseball Tickets
                    </Typography>
                    <Typography variant="h6" gutterBottom style={{color:'grey'}}>
                        There’s a reason why they call it America’s Pastime.
                        From Tinker-to-Evers-to-Chance to Willie, Mickey and The Duke,
                        from The Boys of Summer to Murderers' Row to The Big Red Machine,
                        baseball has a way of linking generations, as fans both young and
                        old compare the on-field feats of The Babe to those of Stan the Man,
                        The Splendid Splinter and Joltin’ Joe, right up to the modern-day
                        heroics of Mike Trout, Nolan Arenado and Mookie Betts. Fact is,
                        the game has always had a special place in our hearts, and there’s no
                        better way to take in the action — walk-off homers, diving catches, late-season
                        pennant chases — than to see it up close and in person. The 2019 Major League Baseball
                        schedule will be chockfull of intriguing matchups. Can the reigning champion B
                        oston Red Sox repeat? Do the Dodgers have the stuff to reach a third consecutive
                        World Series now that they've re-signed Clayton Kershaw? Where will Bryce Harper
                        and Manny Machado land in free agency? Grab your MLB tickets at StubHub today and
                        enjoy a game at a ballpark near you.
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        MLB History
                    </Typography>
                    <Typography variant="h6" gutterBottom style={{color:'grey'}}>
                        Older than the NFL, NBA and NHL, Major League Baseball was
                        officially founded in 1869, with the establishment of the Cincinnati
                        Red Stockings, though the sport’s roots can be traced as far back as
                        18th century England. Today, MLB encompasses 30 teams spread over six
                        divisions in two leagues — the National League and American League.
                        Overseen by the Commission of Baseball (a position currently occupied
                        by Rob Manfred), the MLB season consists of a 162-game schedule,
                        followed by the Wild Card Game, Division Series, League Championship Series and,
                        ultimately, World Series. The All-Star Game, aka the Midsummer Classic,
                        is played each year in July and features the top players from each league.
                        The New York Yankees hold the mark for most World Series titles at 27
                        (making them the most successful organization in sports), followed by the St. Louis Cardinals (11),
                        Oakland Athletics (9), Boston Red Sox (9) and San Francisco Giants (8).
                        The game’s greatest players/managers/umpires/executives/contributors are
                        elected to the National Baseball Hall of Fame in Cooperstown, N.Y.,
                        whose members include Babe Ruth, Ty Cobb, Jackie Robinson, Hank Aaron,
                        Willie Mays, Mickey Mantle, Joe DiMaggio, Ted Williams, Stan Musial and more.
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        MLB Fan Experience: 'Take Me Out to the Ballgame'
                    </Typography>
                    <Typography variant="h6" gutterBottom style={{color:'grey'}}>
                        A record crowd of 105,331 attended a preseason game between
                        the Boston Red Sox and Los Angeles Dodgers at the Los Angeles
                        Memorial Coliseum in 2008, and the 1993 Colorado Rockies drew a
                        season-total of 4,483,350 fans, another Major League Baseball mark.
                        And fans continue to pour through the turnstiles at stadiums across
                        the country. In fact, the league attracted a total of 72,678,797
                        attendees in 2017, more than any other domestic professional sports league,
                        including the NFL, NBA and Premier League soccer. It’s been said that
                        hitting a round ball with a round bat is the most difficult feat in sports,
                        something that on average even the pros accomplish for a hit just three
                        out of every 10 tries. Thankfully for fans, enjoying America’s Pastime has never been easier.
                        All you have to do is go to StubHub.com. Awaiting you is an experience like no other,
                        and not all the action is on the field. Who wouldn’t want to slide down a
                        giant Coke bottle at AT&T Park, home of the San Francisco Giants.
                        Or run the bases at Houston’s Minute Maid Park, something kids 14 and under are
                        invited to do after all Sunday home games. There’s something for everyone.
                        So head out to the stadium today.
                    </Typography>
                </Container>
            </div>

            </div>
        )
    }
}

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    window: PropTypes.func,
};

function mapStateToProps({teams}) {
    // return a new object, {products: products}
    return {teams};
}

export default connect(mapStateToProps, {getTeams})(Teams);


