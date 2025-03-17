import { useState, useEffect } from "react";
import GetName from "./components/GetName";
import axios from "axios";
import "./App.css";

const apiEndPoint = "https://api-o0p6.onrender.com/api/user";

function App() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    login: "",
    password: "",
  });

  // Functie om gebruikerslijst op te halen
  const fetchUsers = () => {
    axios.get(apiEndPoint).then(({ data }) => {
      setPosts(data.data);
    });
  };

  useEffect(() => {
    fetchUsers(); // Haalt lijst op bij het laden van de pagina
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiEndPoint, formData).then(() => {
      fetchUsers(); // Direct opnieuw ophalen na toevoegen
      setFormData({ first_name: "", last_name: "", login: "", password: "" });
    });
  };

  return (
    <>
      <h1>Voeg een gebruiker toe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="Voornaam"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Achternaam"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={formData.login}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Wachtwoord"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Toevoegen</button>
      </form>

      <GetName namen={posts} />
    </>
  );
}

export default App;
