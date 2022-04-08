import Layout from '../components/Layout.js';
import Link from 'next/link';
import { useState } from 'react'



const ContactForm = () => {



	return(
		<Layout footer={false}>
			<div className="row p-4 mt-5">
				<div className="col-md-4 offset-md-4 ">
				<form action="https://submit-form.com/21WJU6nd" className="card card-body bg-dark bg-opacity-75">
			<input
    			type="hidden"
    			name="_redirect"
    			value="https://natalio-di-giacomo-portafolio.vercel.app/"
			/>
				<label className='form-label text-light mt-2' for="name">Name</label>
				<input className='form-control' type="text" id="name" name="name" placeholder="Enter your name" required/>
				<label className='form-label text-light mt-3' for="email">Email</label>
				<input className='form-control' type="email" id="email" name="email" placeholder="email@example.com"  pattern="^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$"/>
				<label className='form-label text-light mt-3' for="message">Message</label>
				<textarea
					rows="5"
					className='mb-2 form-control'
    				id="message"
    				name="message"
    				placeholder="Message"
    				required
				></textarea>
				<button type="submit" className='project rounded-pill btn btn-secondary mt-3'>
					<p className="form-p">
		                <span className="code">&lt;</span>
							Send
		                <span className="code">&#47;&gt;</span>
		        	</p>
				</button>
			</form>
				</div>
			</div>
		</Layout>	
		)
	
}


export default ContactForm;