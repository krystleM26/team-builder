import React from 'react';


const Form = (props) => {
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
         <label> Species
                <input 
                type="text"
                name="name"
                values={props.values.species}
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
                values={props.values.email}
                onChange={handleChange}

                />
            </label>
            <input type="submit" value="Creat your team!" />
    </form>

    )
}

export default Form;
