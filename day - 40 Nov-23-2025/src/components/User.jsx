import { Link } from "react-router";

const User = ({ user }) => {
    return (
        <div className="border p-4 rounded">
            <Link to={`/user/${user.id}`}>{user.name}</Link>
            <p>{user.email}</p>
        </div>
    );
};

export default User;