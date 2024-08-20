import React from "react";
import useUser from "../hook/useUser";
import Loader from "../components/Loader";

const Me = () => {
  const { data, error, loading, welcomeMessage } = useUser();
  

  if (loading) return <Loader />;

  if (error) return <p>Error feacthing data: {error.message}</p>;

  return (
    <div>
      {welcomeMessage && <p>{welcomeMessage}</p>}

      <h1>Welcome, {data.username}</h1>
      <p>Email: {data.email}</p>
      <p>Joined: {new Date(data.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Me;