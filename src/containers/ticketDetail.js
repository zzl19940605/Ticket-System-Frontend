import React,{Component} from 'react';
import {connect} from "react-redux";
import {getTeamEventTicket} from "../actions/teamEventTicket.action";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class TicketDetail extends Component {
    style = {
        width: '100px',
        height: '80px'
    };
    componentDidMount(){
        !this.props.teamEventTicket && this.props.getTeamEventTicket();
    }

    constructor(props) {
        super(props);

        this.state={};
        console.log('props', props.teamEventTicket);
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
            }
        );
    };
    showSnackBar = (msg) => {
        this.setState({
            open: true,
            msg: msg
        })
    };
    render(){
        console.log(this.props);
        return (
            <div className="container py-5" onSubmit={this.submit}>
                <h2>Order Detail</h2>
                <div className="row">
                    <div className="col-10 mx-auto col-md-6   my-3 " >
                        <img src={this.props.Ticket &&this.props.Ticket.seatimage} className="img-fluid" alt="teamEventTicket" height="1000px" width="1100px"/>
                    </div>

                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">

                        <h5 className="text-title  text-muted mt-3 mb-2">{this.props.Ticket &&this.props.Ticket.eventdetail}</h5>
                        <div className="dash-separator">------------------------------------------------------------------------------------</div>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            Info about the tickets:
                        </p>
                        <h6 className="text-title  text-muted mt-3 mb-2">Session: {this.props.Ticket &&this.props.Ticket.ticketsession} </h6>
                        <h6 className="text-title  text-muted mt-3 mb-2">
                            Row: {this.props.Ticket &&this.props.Ticket.ticketrow}
                        </h6>
                        <h6 className="text-title  text-muted mt-3 mb-2">Seats: {this.props.Ticket &&this.props.Ticket.seats} </h6>
                        <h6 className="text-title  text-muted mt-3 mb-2">Number of tickets: {this.props.Ticket &&this.props.Ticket.numberofticket} </h6>
                        <div className="dash-separator">------------------------------------------------------------------------------------</div>

                        <h4>
                            <strong className="text-danger">
                                Price: <span>$</span>
                                {this.props.Ticket &&this.props.Ticket.ticketprice}

                            </strong>
                        </h4>
                        <div>
                            <Link to="/check">
                        <Button variant="contained" color="primary" type="submit">

                           Checkout
                        </Button>
                            </Link>
                        </div>
                        {/*<div>*/}
                            {/*<ButtonContainer onClick={() => {this.handleClick(this.props.product.id)}} cart>*/}
                                {/*Add to Cart*/}
                            {/*</ButtonContainer>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}
// function mapStateToProps({teamEventTicket}) {
//     return {teamEventTicket};
// }

function mapStateToProps({teamEventTicket}, componentProps){
    const id = +componentProps.match.params.id;
    const Ticket = teamEventTicket&&teamEventTicket.find(t => t.id===id);
    //{products:products}
    return {
        teamEventTicket,
        Ticket
    };
}

export default connect(mapStateToProps, {getTeamEventTicket})(TicketDetail);