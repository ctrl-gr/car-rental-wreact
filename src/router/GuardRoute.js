import authHelper from "../auth/auth-helper";
import {Route, useNavigate} from "react-router-dom";

export default function GuardRoute({element, ...rest}) {

    const navigate = useNavigate()

    const isAdmin = authHelper()
    return (
        <Route
            {...rest}
            element={isAdmin ? element : navigate('/login')} />
    )
}