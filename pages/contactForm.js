import Layout from '../components/Layout.js';
import Link from 'next/link';
import { useState } from 'react'



const ContactForm = () => {



	return(
		<Layout footer={true}>
			<div className="row p-4">
				<div className="col-md-4 offset-md-4 ">
				<form action="https://submit-form.com/21WJU6nd">
					<label for="name" className="form-label text-success">Name</label>	
					<input type="text" id="name" name="name" placeholder="Name" required="" />
					<label for="email" className="form-label text-success">Email</label>
					<input type="email" id="email" name="email" placeholder="Email" required="" />
					<label for="message" className="form-label text-success">Message</label>
					<textarea
						id="message"
						name="message"
						placeholder="Message"
						required=""
					></textarea>
					<button type="submit" className="btn btn-outline-dark border-success rounded-pill more-style nav-link text-success my-4 bg-dark">Send</button>
				</form>
				</div>
			</div>
		</Layout>	
		)
	
}


export default ContactForm;