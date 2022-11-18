import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateOrganisation from "./components/Auth/CreateOrganisation";
import AuthComponent from "./components/AuthComponent";
import MainPrivateRoute from "./components/Global/MainPrivateRoute";
import PrivateRoute from "./components/Global/PrivateRoute";
import AddCandidates from "./components/Main/AddCandidates";
import ViewOrganisation from "./components/Main/ViewOrganisation";
import Poll from "./components/PollStat/Poll/Poll";
import ScrollToTop from "./ScrollToTop";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<AuthComponent />
			<ScrollToTop>
				<Routes>
					<Route path='/' element={<PrivateRoute />} />

					{/* <MainPrivateRoute>
          <Route path="/viewOrganisation" element={<ViewOrganisation />} />
        </MainPrivateRoute> */}

					<Route
						path='/viewOrganisation'
						element={
							<MainPrivateRoute>
								<ViewOrganisation />
							</MainPrivateRoute>
						}
					/>

					<Route
						path='/createOrganisation'
						element={
							// <MainPrivateRoute>
							<CreateOrganisation />
							// </MainPrivateRoute>
						}
					/>

					<Route
						path='/addCandidate'
						element={
							<MainPrivateRoute>
								<AddCandidates />
							</MainPrivateRoute>
						}
					/>
					<Route
						path='/votePoll'
						element={
							<MainPrivateRoute>
								<Poll />
							</MainPrivateRoute>
						}
					/>
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
};

export default App;
