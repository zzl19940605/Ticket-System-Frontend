import React from 'react';
import {connect} from "react-redux";
export default function auth (ExistingComponent){
    class WrapperHOCComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = '';
        }
        static getDerivedStateFromProps(props, currentState){
            // if(props.user){
            //     return currentState;
            // }else{
            //
            //     return currentState;
            // }
            if(!props.auth){
                //navigate user away/redirect
                props.history.push('/login');
            }
            return currentState;
        }
        render(){
            return (
                <ExistingComponent {...this.props}/>
            );
        }
    }
    function mapStateToProps({auth}) {
        return {auth};
    }
    return connect(mapStateToProps)(WrapperHOCComponent);
}