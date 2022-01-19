import Layout from '../components/Layout.js';
import Error from './_error.js';


const Github = ({user, statusCode}) => {

	if(statusCode) {
		return (
			<Error statusCode={statusCode} />
			)
	}

	return (
		<Layout>
			<div className="row p-4">
				<div className="col-md-4 offset-md-4 ">	
					<div className="card card-body text-center bg-dark text-light rounded">
						<h1 className="fw-bolder">{user.name}</h1>
						<img src={user.avatar_url} alt="" className="rounded-circle"/>
						<p className="text-light">{user.bio}</p>
						<a href={user.blog} target="_blank" className="btn btn-outline-dark my-2 text-success border-success rounded-pill">Blog</a>
						<a href={user.html_url} target="_blank" className="btn btn-outline-dark my-2 text-success border-success rounded-pill">GitHub</a>
					</div>
				</div>
			</div>
		</Layout>	
	)
	
}

export async function getServerSideProps(){

	const res = await fetch('https://api.github.com/users/Nataliodg');
	const data = await res.json();

	const statusCode = res.status > 200 ? res.status : false;

	return{
		props: {
			user: data,
			statusCode
		}
	}
}


export default Github;