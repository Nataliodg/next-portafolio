import Navbar from './Navbar.js';
import Head from 'next/head';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import NProgress from 'nprogress';

const Layout = ({children, footer = true}) => {

	const router = useRouter();

	useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);


	return(
		<>
		<Head>
			<title>Portafolio</title>
		</Head>
		<Navbar/>
			<main className="container py-4 pt-1">
				{children}
		</main>

		{
			footer && (
					<footer className="bg-dark text-dark text-center links-style">
						<div className="container p-2">
							<h5> &copy; Di Giacomo Natalio</h5>
							<p className="ms-auto">2020 - {new Date().getFullYear()}</p>
							<p>All rights Reserverd.</p>
						</div>
					</footer>
			)
		}
	</>
		)
	
}

export default Layout;