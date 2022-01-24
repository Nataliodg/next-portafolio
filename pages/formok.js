import Link from 'next/link';
import Layout from '../components/Layout.js';



const Formok = () => (

	<Layout footer={false}>
		<h1 className="text-center text-light">Formulario enviado correctamente</h1>
		<Link href="/">
			<a className="nav-link text-success text-center">Home</a>
		</Link>
	</Layout>	

) 


export default Formok;