import { FaPaperPlane } from 'react-icons/fa';
import './Form.css'

function Form() {
    return (
        <div className = "form-content">
            <label className="label">Add Image</label>
            <input className = "input" type="text" placeholder = "Image Address" />
            <FaPaperPlane className="submit"/>
        </div>
    )
} // end Form

export default Form;