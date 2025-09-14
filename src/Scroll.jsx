import React from "react";

const Scroll = (props) => {
    return (
        <div className="tc vh-100 pt3 ma3 justify-center flex">
            <div style={{overflowY: 'scroll', height:'500px', border:'5px solid black', scrollbarWidth:'none'}}>
                {props.children}
            </div>
        </div>
    )
}

export default Scroll