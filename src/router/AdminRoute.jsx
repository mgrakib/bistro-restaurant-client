/** @format */

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	const { user, loading } = useContext(AuthContext);
	const { isAdminLoading, isAdmin } = useAdmin();
	if (loading || isAdminLoading) {
		return <p>Loading</p>;
	}
	if (user && isAdmin) {
		return children;
	}

	return (
		<Navigate
			to={"/"}
			state={{ from: location }}
			replace
		/>
	);
};

export default PrivateRoute;
