import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <p>Loading</p>
    }
    if (user) {
        return children
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