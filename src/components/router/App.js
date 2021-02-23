import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../layout/layout";
import home from "../../pages/home/homeContainer";
import about from "../../pages/aboutMe/aboutMeView";
import whatIdo from "../../pages/whatIdo/whatIdoContainer";
import education from "../../pages/education/educationContainer";
import construction from "../construction/constructionView";

const App = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/" component={home} />
					<Route exact path="/quien-soy" component={about} />
					<Route exact path="/lo-que-hago" component={whatIdo} />
					<Route exact path="/educacion" component={education} />
					<Route exact path="/portafolio" component={construction} />
					<Route>
						<h1>URL no encontrada</h1>
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
