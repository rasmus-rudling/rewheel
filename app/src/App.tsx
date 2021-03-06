import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfilePage from './components/pages/Profile/ProfilePage';
import BikeBuilderPage from './components/pages/BikeBuilder/BikeBuilderPageView';
import PageWrapper from './components/common/PageWrapper';
import { useAuth0 } from '@auth0/auth0-react';
import Spinner from './components/common/SpinnerView';
import DiscoverPage from './components/pages/discoverPage/DiscoverPage';

const App = () => {
	// const { isLoading } = useAuth0();
	// if (isLoading) return <Spinner />;
	return (
		<Router>
			<Switch>
				<Route exact path={['/', '/bike-builder']}>
					<PageWrapper>
						<BikeBuilderPage />
					</PageWrapper>
				</Route>

				<Route exact path="/discover">
					<PageWrapper>
						<DiscoverPage />
					</PageWrapper>
				</Route>

				<Route exact path="/profile">
					<PageWrapper>
						<ProfilePage />
					</PageWrapper>
				</Route>
			</Switch>
		</Router>
	);
};
export default App;
