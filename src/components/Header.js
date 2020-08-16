import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import authorize from "./authorize.hoc";
import loginCheck from "./loginCheck";
import Order from "../containers/Order";
import {connect} from "react-redux";

const Header =(props)=>{
    // console.log(this.state);
    //import React to use JSX
    console.log(props.auth);

    return (

        /*semantic tag*/
        <header>

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={{height:'100px'}}>
                <img style={{width:'50px',height:'30px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png'/>
                <a href="#" className="navbar-brand">
                        MLB Tickets</a>
                <ul className="navbar-nav nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/teams">Teams</NavLink>
                    </li>
                    { props.auth !== null ?  <li className="nav-item">
                        <NavLink className="nav-link" to="/order">Order</NavLink>
                    </li>: null}
                    { props.auth !==null ?authorize(<li className="nav-item">
                        <NavLink className="nav-link" to="/add-team">AddTeam</NavLink>
                    </li>, props.auth.type): null}
                    {/*{ props.auth !==null ?authorize(<li className="nav-item">*/}
                        {/*<NavLink className="nav-link" to="/add-teamEvent">AddTeamEvent</NavLink>*/}
                    {/*</li>, props.auth.type): null}*/}

                    { props.auth !==null ?authorize(<li className="nav-item">
                        <NavLink className="nav-link" to="/delete-teamEvent">TeamEventList</NavLink>
                    </li>, props.auth.type): null}
                    { props.auth === null ? <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>: null}
                    { props.auth !== null ?  <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </li>: null}
                    {/*<li className="nav-item">*/}
                        {/*<NavLink className="nav-link" to="/users">Register</NavLink>*/}
                    {/*</li>*/}


                </ul>
            </nav>
        </header>
    )
}

function mapStateToProps({auth}){
    return {auth};
}
//
export default connect(mapStateToProps)(Header)



// class Header extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             show:false,
//         };
//     }
//     handleShow=()=>{
//         this.setState({show:true});
//     }
//     handleClose=()=>{
//         this.setState({show:false});
//     }
//     handleLogout = () => {
//         this.setState({show:false});
//         this.props.logout((res)=>{
//                 if(res.data && res.data.success){
//                     localStorage.removeItem('user');
//                 }
//             },
//             ()=>{
//                 this.props.history.push('/');
//             });
//     }
//     Section =()=>{
//         if(localStorage.getItem('user')){
//             return(
//                 <>
//                     <li style={{'margin-left':'400px'}}>
//                         {/*<ButtonContainer>*/}
//                         {/*User Profile*/}
//                         {/*</ButtonContainer>*/}
//                     </li>
//                     <li style={{'margin-left':'10px'}}>
//                         <ButtonContainer onClick={this.handleShow}>
//                             Logout
//                         </ButtonContainer>
//                         <Modal show={this.state.show} onHide={this.handleClose}>
//                             <Modal.Header closeButton>
//                                 <Modal.Title>Hi {JSON.parse(localStorage.getItem('user')).username}</Modal.Title>
//                             </Modal.Header>
//                             <Modal.Body>Are you sure to log out?</Modal.Body>
//                             <Modal.Footer>
//                                 <Button variant="secondary" onClick={this.handleClose}>
//                                     Cancel
//                                 </Button>
//                                 <Button variant="primary" onClick={this.handleLogout} >
//                                     Logout
//                                 </Button>
//                             </Modal.Footer>
//                         </Modal>
//                     </li>
//                 </>
//             );
//         }else{
//             return(
//                 <li style={{'margin-left':'500px'}}>
//                     <Link to="/login" className="ml-auto">
//                         <ButtonContainer>
//                             Login
//                         </ButtonContainer>
//                     </Link>
//                 </li>
//             );
//         }
//     }
//     render(){
//         return(
//             <NavWrapper className="navbar navbar-expand-sm navbar-light px-sm-5">
//                 <Link to="/">
//                     <img src={logo} alt="store"  style={{ width: '150px',height: '100px'}} className="navbar-brand" title="Back to home page"></img>
//                 </Link>
//                 <ul className="navbar-nav align-items-center">
//                     <li className="nav-item ml-5">
//                         <Link to="/" className="nav-link">Home</Link>
//                     </li>
//                     {
//                         localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).profiles[0].id === 1 &&
//                         <>
//                             <li>  <Link className="nav-link" to="/users">Users</Link></li>
//                             <li>  <Link className="nav-link" to="/admin-list">All products</Link></li>
//                             <li> <Link className="nav-link" to="/order-list">Orders</Link></li>
//                         </>
//                     }
//                     {this.Section()}
//                     {
//                         !(localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).profiles[0].id === 1) &&
//                         <>
//                             <li style={{'margin-left':'10px'}}>
//                                 <Link to="/cart" className="ml-auto">
//                                     <ButtonContainer>
//                                         <i className="fa fa-opencart"></i>
//                                         my cart
//                                     </ButtonContainer>
//                                 </Link>
//                             </li>
//                             <li style={{'margin-left':'10px'}}>
//                                 <Link to="/register" className="ml-auto">
//                                     <ButtonContainer>
//                                         register
//                                     </ButtonContainer>
//                                 </Link>
//                             </li>
//                         </>
//                     }
//                     {
//                         localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).profiles[0].id === 2 &&
//                         <Dropdown style={{'margin-left':'10px',color:'blue','background-color':'blue'}} >
//                             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                                 User Profile
//                             </Dropdown.Toggle>
//                             <Dropdown.Menu>
//                                 <Dropdown.Item ><Link to="/user-orders">View Orders</Link></Dropdown.Item>
//                                 <Dropdown.Item >Edit Profile</Dropdown.Item>
//                             </Dropdown.Menu>
//                         </Dropdown>
//                     }
//                     {
//                         localStorage.getItem('user') &&
//                         <p style={{'margin-left':'5px'}} className="text-dark"> Hi { JSON.parse(localStorage.getItem('user')).username}!</p>
//                     }
//                 </ul>
//             </NavWrapper>
//         )
//     }
// }
// const NavWrapper = styled.nav`
//     // background: #FFDEAD;
//      background: #AFEEEE
//     .nav-link{
//     color: #ADD8E6;
//     font-size:1.3rem;
//     text-transform: capitalize
//     }
// `
// function mapStateToProps({auth}) {
//     return {auth};
// }
// export default withRouter(connect(mapStateToProps,{logout})(Header));