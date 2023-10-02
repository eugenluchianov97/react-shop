import React, { createContext } from 'react';

const AlertContext = createContext({
    display:false,
    type:"success",
    text:''
});

export default AlertContext;
