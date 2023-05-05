import React from "react";

const ScrollView = (props) => {
    return(
        <div style={{background: 'grey', margin: '60px', overflowY : 'scroll', height: '70vh'}}>
            {
                props.children
            }
        </div>
    )
}


export default ScrollView; 