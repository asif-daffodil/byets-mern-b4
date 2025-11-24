// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Hero from "../components/Hero";
import axios from "axios";
import User from "../components/User";
import { Helmet } from "react-helmet";

const Home = () => {
    // const [userData, setUserData] = useState([]);
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => setUserData(data));
    // }, []);
    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users").then(res => setUserData(res.data));
    // }, []);
    // useEffect(() => {
    //     (async () => {
    //         try{
    //             const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    //             setUserData(res.data);
    //         } catch (error) {
    //             console.error("Error fetching user data:", error);
    //         }
    //     })();
    // }, []);

    // userData.length > 0 && console.log(userData);

    const {data, isFetching, isError, isSuccess} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            return res.data;
        }
    })

    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Hero />
            {isFetching && <p>Loading...</p>}
            {isError && <p>Error fetching data.</p>}
            {isSuccess && (
                <div className="grid md:grid-cols-3 gap-3 p-4">
                    {data.map(user => (
                        <User key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;