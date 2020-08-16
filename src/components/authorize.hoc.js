import React from 'react';
// import {connect} from "react-redux";
export default function authorize (ExistingComponent, profiles){

    console.log(profiles);
    return profiles.find((e)=>e==='ROLE_ADMIN') ? ExistingComponent : null;

}

