// calculator button

import React from 'react';

const Button = ({childToParent, name}) => {

    return (
        <button className="btn" onClick={() => childToParent(name)}>{name}</button>
    )
}

export default Button;