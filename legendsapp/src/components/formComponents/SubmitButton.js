import React from 'react';
import './Input.js';
const SubmitButton = ({value,handleSubmit,className}) => {
    return (
        <div>
            <input type="submit" className={className} value={value} onClick={handleSubmit}/>
        </div>
    );
};

export default SubmitButton;