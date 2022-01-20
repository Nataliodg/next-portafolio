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
							<h1 className="name-style">Natalio <br/> Di Giacomo</h1>
							<h3 className="links-style">Developer</h3>
						</div>
						<div className="col-md-8">
							<p className="intro-style ">
							Hola, mi nombre es Natalio! Soy un apasionado de la tecnología, que busca siempre aprender y superarse. 
							No tengo experiencia laboral pero estamos sumando experiencia con proyectos propios, hechales un vistazo! :) <br/><br/>
							Si te gustan, no dudes en contactarme! Saludos!</p>
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
							projects.map(({name,description,image,link,link2}, i) => (
							<div className="col-md-4 p-2 text-light " key={i}>
								<div className="card h-100 bg-dark border-dark border rounded border-5">
									<div className="overflow">
										<img src={`/${image}`} alt="" className="card-img-top"/>
									</div>
									<div className="card-body">
										<h4 className="fw-bolder">{name}</h4>
										<p>{description}</p>
										<div class="btn-group" role="group">
									    <button id="btnGroupDrop1" type="button" className="more-style dropdown-toggle btn-dark text-success rounded-pill border border-dark" data-bs-toggle="dropdown" aria-expanded="false">
									    More</button>
									    <ul className="text-center dropdown-menu bg-dark rounded" aria-labelledby="btnGroupDrop1">
									    	<Link href={link} >
												<a className="nav-link text-success links-style">Visit Website</a>
											</Link>
											<Link href={link2} >
												<a className="nav-link text-success links-style">Repository</a>
											</Link>
									    </ul>
									  </div>
										
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