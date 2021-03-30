import React from 'react';


function Contact()
{
    return(
        <div id="contact">
          <h1>BOOK YOUR TABLE</h1>
          <form>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Number'/>
            <textarea placeholder='Write here...'></textarea>
            <input type='submit' value='BOOK'/>
          </form>
            </div>
        
    )
}

export default Contact;