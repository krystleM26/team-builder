import React from 'react';


const Form = (props) ={




return (
    <form> 
            <label>Name
                <input
                    type="text"
                    name="name"
                    values={values.name}
                    onChange={onChange}
                    maxLength="30"
                    placeholder="Enter Your Name Here!"
                />
            </label>

      
    </form>
    
    )
}

export default Form;
