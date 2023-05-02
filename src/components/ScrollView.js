import React from "react";


const ScrollView = (props) => {
    return(
        <div style= {{background: 'grey', height: '65vh', overflowY: 'scroll', margin: '20px' }} >
            {
                props.children
            }
        </div>
    )
}

export default ScrollView;