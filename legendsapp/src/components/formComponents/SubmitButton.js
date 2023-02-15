import React from 'react';
import './Input.js';
const SubmitButton = ({value}) => {
    return (
        <div>
            <input type="submit" className='submit-button' value={value}/>
        </div>
    );
};

export default SubmitButton;