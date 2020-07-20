import React from 'react';

export default function Title({name, title}) {

        return(
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-capitalize text-title">
                    <h3>{name} {title}</h3>
                </div>
            </div>
        )    
}   