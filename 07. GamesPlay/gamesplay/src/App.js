import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as gameServices from "./services/gameService";

import Catalog from "./components/Catalog/Catalog";
import CreateGame from "./components/CreateGame/CreateGame";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameServices.getAll().then((result) => {
      console.log(result);
      setGames(result);
    });
  }, []);

  const navigate = useNavigate();

  const onCreateSubmit = (data) => {
    const newGame = gameServices.create(data);
    setGames((state) => [...state, newGame]);

    navigate("/"); //to redirect
  };

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create-game"
            element={<CreateGame onCreateSubmit={onCreateSubmit} />}
          />
          <Route path="/catalog" element={<Catalog games={games} />} />
          <Route path="/details/:gameId" element={<Details />} />
        </Routes>

        {/* 
        <Login />
        <Register />
        <CreateGame />
        <Catalog />*/}
      </main>

      {/* <!-- Create Page ( Only for logged-in users ) --> */}
    </div>
  );
}

export default App;
