import Layout from '../components/Layout.js';
import Link from 'next/link';
import { useState } from 'react'



const ContactForm = () => {



	return(
		<Layout footer={false}>
			<form action="https://submit-form.com/21WJU6nd" className="formulario">
			<input
    			type="hidden"
    			name="_redirect"
    			value="https://natalio-di-giacomo-portafolio.vercel.app/"
			/>
				<label for="name">Name</label>
				<input type="text" id="name" name="name" placeholder="Name" required/>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" placeholder="Email"  pattern="^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$"/>
				<label for="message">Message</label>
				<textarea
    				id="message"
    				name="message"
    				placeholder="Message"
    				required
				></textarea>
				<button type="submit">Send</button>
			</form>
		</Layout>	
		)
	
}


export default ContactForm;