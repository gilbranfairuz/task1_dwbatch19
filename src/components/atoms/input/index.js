import React from 'react';
import './input.scss';

const Input = ({...rest}) => {
    return (
        <div>
            <input className="input" {...rest} />
        </div>
    )
}

export default Input