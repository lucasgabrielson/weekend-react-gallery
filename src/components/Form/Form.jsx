import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Form.css'

function Form( props ) {

    return (
        <div className = "form-content">
            <label className="label">Add Image</label>
            <input className = "src" type="text" placeholder = "Image Address" onChange = { event => props.setImageAddress( event.target.value ) } value = {props.imageAddress}/>
            <input className = "description" type="text" placeholder = "Image Description" onChange = { event => props.setImageDescription( event.target.value ) } value = {props.imageDescription} />
            <FaPaperPlane onClick = { props.addImage } className="submit"/>
        </div>
    )
} // end Form

export default Form;