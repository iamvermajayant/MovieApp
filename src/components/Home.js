import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import MovieComponent from "../Movie/MovieComponent";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-3 mt-2 box mt d-flex align-items-center justify-content-between">
        Hello Welcome <br />
        {user && user.email}
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      <MovieComponent/>
    </>
  );
};

export default Home;
