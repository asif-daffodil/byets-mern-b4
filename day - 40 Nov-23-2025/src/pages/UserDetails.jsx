import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router";

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isFetching, isError, isSuccess } = useQuery({
        queryKey: ["user", id],
        queryFn: async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            return res.data;
        }
    });

    return (
        <div>
            <Helmet>
                {isSuccess && <title>User Details - {data.name}</title>}
            </Helmet>
            {isFetching && <p>Loading...</p>}
            {isError && <p>Error fetching user details.</p>}
            {isSuccess && (
                <div className="p-4 text-center">
                    <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Phone:</strong> {data.phone}</p>
                    <p><strong>Website:</strong> {data.website}</p>
                    <p><strong>Company:</strong> {data.company.name}</p>
                    <p><strong>Address:</strong> {data.address.street}, {data.address.city}</p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserDetails;