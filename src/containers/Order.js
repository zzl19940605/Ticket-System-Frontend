import React, {Component} from 'react';
import {connect} from "react-redux";
import {getOrder} from "../actions/check.action";
import {Link} from "react-router-dom";

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

class Order extends React.Component{

    // style = {
    //     width: '100px',
    //     height: '80px'
    // };

    constructor(props) {

        super(props);

        this.props.getOrder();
        this.state = {}
    }

    render(){

        return (

            <div>
                <h2 className="text-capitalize text-center text-muted" >All Orders</h2>
                <table className="table table-bordered table-striped">
                    <thead className="text-center text-capitalize text">
                    <tr>

                        <th>Name</th>
                        <th>Address</th>
                        <th>Zip</th>
                        <th>Ticket Info</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.check && this.props.check.map((o,index)=>{
                            return(o ==null? null:
                                <tr key={index} className="text-capitalize">
                                    <td>{o.name}</td>
                                    <td>{o.address}</td>
                                    <td>{o.zip}</td>
                                    <td>
                                        <div>{o.teamEventTicket.teamevent.eventdate}</div>
                                        <div>{o.teamEventTicket.eventdetail}</div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                </div>


        )

    }
}

function mapStateToProps({check}) {
    // return a new object, {products: products}
    console.log(check);
    return {check};
}

export default connect(mapStateToProps, {getOrder})(Order);


