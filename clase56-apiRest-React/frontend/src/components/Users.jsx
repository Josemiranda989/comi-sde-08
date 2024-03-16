import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://localhost:3000/api/users";
    fetch(url)
      .then((res) => res.json())
      .then((users) => setUsers(users.data))
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, []);

  return (
    <div className="bg-gray-500 m-4 p-4 rounded-md">
      <h2 className="text-3xl text-center text-slate-300 font-bold">
        Users List
      </h2>
      {loading && <p>Los usuarios se estan cargando</p>}
      {error && <p>Hay errores </p>}
      {users.length > 0 && (
        <div className="bg-slate-800 p-4 text-slate-100 flex gap-4 flex-wrap justify-center rounded-lg">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
