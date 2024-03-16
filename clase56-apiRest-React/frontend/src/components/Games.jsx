import { useState, useEffect } from "react";
import Card from "./Card";

const Games = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = "http://localhost:3000/api/games";
    fetch(endpoint)
      .then((res) => res.json())
      .then((games) => setGames(games.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-500 m-4 p-4">
      <h1 className="text-3xl text-center text-slate-300 font-bold">
        Games List
      </h1>

      {loading && (
        <p className="text-xl text-center text-slate-300">Cargando...</p>
      )}

      {error && (
        <p className="text-xl text-center text-red-500">{error.message}</p>
      )}

      {games.length > 0 && (
        <div className="bg-slate-800 p-4 text-slate-100 flex gap-4 flex-wrap justify-center">
          {games.map((game) => {
            return <Card key={game.id} game={game} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Games;
