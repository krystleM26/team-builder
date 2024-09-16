import React from 'react';


const Form = (props) => {
    console.log(props)
    const handleChange =event => {
    const { name, value } = event.target
    props.change(name,value);
   } 
   
   const handleSubmit = event => {
       event.preventDefault();
       props.submit();
    }

return (
    <form onSubmit={handleSubmit}> 
         <label> Planet
                <input 
                type="text"
                name="name"
                values={props.values.name}
                onChange={handleChange}

                />

         </label>

            <label>Email
                <input
                type="email"
                name="email"
                values={props.values.email}
                onChange={handleChange}
                />
            </label>

            <label>Alien 
                <input
                type="checkbox"
                name="role"
                values={props.values.email}
                onChange={handleChange}
                placeholder="Welcome to Space"

                />
            </label>
            <input type="submit" value="Creat your team!" />
    </form>

    )
}

export default Form;
