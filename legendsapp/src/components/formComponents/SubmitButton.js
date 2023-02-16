import React from 'react';
import './Input.js';
const SubmitButton = ({value,handleSubmit}) => {
    return (
        <div>
            <input type="submit" className='submit-button' value={value} onClick={handleSubmit}/>
        </div>
    );
};

export default SubmitButton;