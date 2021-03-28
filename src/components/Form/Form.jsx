import { FaPaperPlane } from 'react-icons/fa';
import './Form.css'

function Form() {
    return (
        <div className = "form-content">
            <label className="label">Add Image</label>
            <input className = "src" type="text" placeholder = "Image Address" />
            <input className = "description" type="text" placeholder = "Image Description" />
            <FaPaperPlane className="submit"/>
        </div>
    )
} // end Form

export default Form;