import axios from 'axios';

const LandingPage = ({ currentUser }) => {
	console.log('currentUser:', currentUser);

	return <h1>Landing Page</h1>;
};

// rendered on server side as part of Next.js
// this is domain sensitive. We need to ensure that we have
// configured access to the express server, especially if it's
// in a different Kubernetes namespace
LandingPage.getInitialProps = async () => {
	const response = await axios.get('http://ingress-nginx');

	return response.data;
};

export default LandingPage;
