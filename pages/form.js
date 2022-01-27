import Layout from '../components/Layout.js';
import Link from 'next/link';
import { useState } from 'react'



const Form = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [submited, setSubmitted] = useState(false)

	const handleSubmit = (e) => { 
		e.preventDefault()
		console.log('Sending')
			let data = {
		    name,
		    email,
		    message
		 }
		fetch('/api/contact', {
	    	method: 'POST',
	    	headers: {
	      	'Accept': 'application/json, text/plain, */*',
	      	'Content-Type': 'application/json'
	    },
    		body: JSON.stringify(data),

  		});
}



	return(
		<Layout footer={true}>
			<div className="row p-4">
				<div className="col-md-4 offset-md-4 ">	
					<div className="mb-3">
					  <label for="exampleFormControlInput1" className="form-label text-success ">Name:</label>
					  <input type='text' onChange={(e)=>{setName(e.target.value)}} name='name'  className="form-control rounded" placeholder=""/>
					</div>
					<div className="mb-3">
					  <label for="exampleFormControlInput1" className="form-label text-success">Email:</label>
					  <input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className="form-control rounded" placeholder="name@example.com"/>
					</div>
					<div className="mb-3">
					  <label for="exampleFormControlTextarea1" className="form-label text-success">Message:</label>
					  <textarea type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message'  className="form-control rounded" rows="4"></textarea>
					</div>
					<div className="mb-3 text-center">
						<Link href="formok">
							<a onClick={(e)=>{handleSubmit(e)}} className="btn btn-outline-dark border-success rounded-pill more-style nav-link text-success my-4 bg-dark" >Send</a>
						</Link>	
					</div>
				</div>
			</div>
		</Layout>	
		)
	
}


export default Form;