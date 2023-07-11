import React from "react";

const List=(props)=>{
    const deleteHandler=()=>{
        props.removeitem(props.uniqueidx)
    }
    return(
        <React.Fragment>
            <li onClick={deleteHandler}>{props.listitem}</li>
        </React.Fragment>
    ) 
}

export default List;