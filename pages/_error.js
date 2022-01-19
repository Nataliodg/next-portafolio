import Layout from '../components/Layout.js';

const _error = ({statusCode}) => {
	return (
		<Layout>
			{
				statusCode ? (
					<h3 className="text-center text-light">Could not load your page: Status code {statusCode}</h3>
				) : (
					<h3 className="text-center text-light">Could not load your page</h3>
				)
			}
			
			}
		</Layout>	
		)
}

export default _error;