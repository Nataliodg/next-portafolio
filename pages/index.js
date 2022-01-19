import Layout from '../components/Layout.js';
import Link from 'next/link';
import {skills, projects} from '../profile.js';


const Index = () => (

	<Layout className="styles">
		{/**Card Layout**/}
		<header className="row">
			<div className="col-md-12">
				<div className="card card-body bg-secondary text-light">
					<div className="row">
						<div className="col-md-4">
							<h1 className="name-style">Di Giacomo Natalio</h1>
							<h3 className="more-style">Developer</h3>
						</div>
						<div className="col-md-8">
							<p className="intro-style ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Nam ea molestiae aspernatur placeat provident dignissimos mollitia, 
							ab dolore doloremque culpa eos hic, fugiat reprehenderit tempore quidem nobis tempora voluptatum non,
							error labore veritatis delectus ad corrupti et illo.</p>
							<Link href="Contacto">
								<a className="more-style nav-link text-success">Contacto</a>
							</Link>	
						</div>
					</div>
				</div>
			</div>	
		</header>

		{/**Second section**/}
		<div className="row py-1">
			<div className="col-md-8">
				<img src="programing7.jpg" alt="" className="img-fluid"/>
			</div>
			<div className="col-md-4 ">
				<div className="card bg-dark text-light">
					<div className="card-body">
						<h1>Skills</h1>
						{
							skills.map(({skill, percentage}, i ) => (
								<div className="py-3" key={i}>
									<h5>{skill}</h5>
									<div className="progress">
										<div 	className="progress-bar bg-success"
												role="progressbar"
												style={{width: `${percentage}%`}}></div>
									</div>
								</div>		
								))
						}
					</div>
				</div>
				<div className="col-md-12 py-4 mt-1" >
				<img src="programing14.jpg" alt="" className="img-fluid"/>
				</div>
			</div>
		</div>

		{/**Card Layout**/}
		<div className="row">
			<div className="col-md-12">
				<div className="card card-body bg-dark bg-opacity-75">
					<div className="row">
						<div className="col-md-12">
							<h1 className="text-center text-success portafolio-style">Portafolio</h1>
						</div>
						{
							projects.map(({name,description,image,link}, i) => (
							<div className="col-md-4 p-2 text-light " key={i}>
								<div className="card h-100 bg-dark border-light border-top-0 border-start-0 rounded ">
									<div className="overflow">
										<img src={`/${image}`} alt="" className="card-img-top"/>
									</div>
									<div className="card-body">
										<h4 className="fw-bolder">{name}</h4>
										<p>{description}</p>
										<Link href={link} >
											<a className="nav-link text-success more-style">More</a>
										</Link>
									</div>
								</div>
							</div>
							))
						}
					</div>
				</div>
			</div>
		</div>



	</Layout>	

	) 

export default Index;