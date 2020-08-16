import React from 'react'; // default import
import Header from "../components/Header";
import { connect } from 'react-redux';
class App extends React.Component{
    names;
    constructor(){
        super();

        };

    render() {
        // return <Name name="Alice" >17</Name>;
        // return <Names/>;
        /*return <Names names={this.name}/>;*/
        return (
            <React.Fragment>
                {/*syntax sugar <> , in angular the similar approach is ng-container*/}
                {/*mont: put related element into DOM*/}

                <Header/>
                {/*<AddName addName={this.addName}/>*/}
                {/*<Names names={this.state.names}/>*/}
                {/*<Products />*/}
                {this.props.children}
            </React.Fragment>
        );
    }

}




export default connect()(App)