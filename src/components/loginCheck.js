import React from 'react';

export default function loginCheck (ExistingComponent, status){

    return !status ? ExistingComponent : null;

}