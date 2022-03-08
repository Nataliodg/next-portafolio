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
							No tengo experiencia laboral pero estamos sumando experiencia con proyectos propios, échales un vistazo! :) <br/><br/>
							Si te gustan, no dudes en contactarme! Saludos!</p>
							<Link href="form">
								<a className="border-success rounded-pill more-style nav-link text-success ">Contacto</a>
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
		<div id="portafolio"className="row">
			<div className="col-md-12">
				<div className="card card-body bg-dark bg-opacity-75">
					<div className="row ">
						<div className="col-md-12">
							<h1 className="text-center text-success portafolio-style">Portafolio</h1>
						</div >
						{
							projects.map(({name,image,link}, i) => (
							<div className="col-md-4 p-2 text-light" key={i}>
                                <div className="card h-100 bg-dark border-dark border rounded border-5">
									<a href={link} target="_blank" class="project project-tile">
		                    			<img className="project-image" src={`/${image}`} alt="project" />
		                    			<p className="project-title">
		                        			<span className="code">&lt;</span>
		                       					{name}
		                        			<span className="code">&#47;&gt;</span>
		                    			</p>
		                			</a>
                			</div>
                			</div>
							))
						}
					<a href="/" className="project project-title" target="_blank">
						<span className="code">&lt;</span>
		                    Proximamente..
		                <span className="code">&#47;&gt;</span>
					</a>
					</div>
				</div>
			</div>
		</div>



	</Layout>	

	) 

export default Index;