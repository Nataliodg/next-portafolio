import Layout from '../components/Layout.js';
import Link from 'next/link';
import { useState } from 'react'



const ContactForm = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();
		await fetch(FORMSPARK_ACTION_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			name,
			email,
			message,
		}),
		});
		alert("Form submitted");
	};



	return(
		<Layout footer={true}>
			<div className="row p-4">
				<div className="col-md-4 offset-md-4 ">	
					<form onSubmit={onSubmit}>
						<div className="mb-3">
							<label for="exampleFormControlInput1" className="form-label text-success ">Name:</label>
							<input type='text' value={name} onChange={(e)=>setName(e.target.value)}   className="form-control rounded" placeholder=""/>
						</div>
						<div className="mb-3">
							<label for="exampleFormControlInput1" className="form-label text-success">Email:</label>
							<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' className="form-control rounded" placeholder="name@example.com"/>
						</div>
						<div className="mb-3">
							<label for="exampleFormControlTextarea1" className="form-label text-success">Message:</label>
							<textarea type='text'  value={message} onChange={(e) => setMessage(e.target.value)} name='message'  className="form-control rounded" rows="4"></textarea>
						</div>
						<div className="mb-3 text-center">
							<button type="submit" className="btn btn-outline-dark border-success rounded-pill more-style nav-link text-success my-4 bg-dark">Send</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>	
		)
	
}


export default ContactForm;