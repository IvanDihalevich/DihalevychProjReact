import { useState, useEffect } from "react";
import "./style/AirportsClient.css";
import {
  fetchAirports,
  fetchAirportById,
  createAirport,
  updateAirport,
  deleteAirport,
} from "../../api/airportsApi";

const AirportsClient = () => {
  const [airports, setAirports] = useState([]);
  const [newAirport, setNewAirport] = useState({ name: "", location: "" });
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Завантажуємо всі аеропорти
    const loadAirports = async () => {
      try {
        const data = await fetchAirports();
        setAirports(data);
      } catch {
        setError("Помилка при отриманні аеропортів");
      }
    };
    loadAirports();
  }, []);

  const handleCreateAirport = async () => {
    try {
      const createdAirport = await createAirport(newAirport);
      setAirports([...airports, createdAirport]);
      setNewAirport({ name: "", location: "" });
      setError("");
    } catch {
      setError("Помилка при створенні аеропорту");
    }
  };

  const handleDeleteAirport = async (id) => {
    try {
      await deleteAirport(id);
      setAirports(airports.filter((airport) => airport.id !== id));
      setError("");
    } catch {
      setError("Помилка при видаленні аеропорту");
    }
  };

  const handleSelectAirport = async (id) => {
    try {
      const airport = await fetchAirportById(id);
      setSelectedAirport(airport);
      setError("");
    } catch {
      setError("Помилка при отриманні даних аеропорту");
    }
  };

  const handleUpdateAirport = async () => {
    if (!selectedAirport) return;
    try {
      const updatedAirport = await updateAirport(
        selectedAirport.id,
        selectedAirport
      );
      setAirports(
        airports.map((airport) =>
          airport.id === updatedAirport.id ? updatedAirport : airport
        )
      );
      setSelectedAirport(null);
      setError("");
    } catch {
      setError("Помилка при оновленні аеропорту");
    }
  };

  return (
    <div className="airports-container">
      <h1 className="title">Аеропорти</h1>
      {error && <p className="error-message">{error}</p>}

      <ul className="airports-list">
        {airports.map((airport) => (
          <li key={airport.id} className="airport-item">
            <span>
              {airport.name} - {airport.location}
            </span>
            <button
              onClick={() => handleSelectAirport(airport.id)}
              className="btn details-btn"
            >
              Деталі
            </button>
            <button
              onClick={() => handleDeleteAirport(airport.id)}
              className="btn delete-btn"
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>

      <h2 className="subtitle">Додати новий аеропорт</h2>
      <div className="form-group">
        <input
          type="text"
          className="input"
          placeholder="Назва"
          value={newAirport.name}
          onChange={(e) =>
            setNewAirport({ ...newAirport, name: e.target.value })
          }
        />
        <input
          type="text"
          className="input"
          placeholder="Локація"
          value={newAirport.location}
          onChange={(e) =>
            setNewAirport({ ...newAirport, location: e.target.value })
          }
        />
      </div>
      <button onClick={handleCreateAirport} className="btn add-btn">
        Додати
      </button>

      {selectedAirport && (
        <>
          <h2 className="subtitle">Редагувати аеропорт</h2>
          <div className="form-group">
            <input
              type="text"
              className="input"
              value={selectedAirport.name}
              onChange={(e) =>
                setSelectedAirport({ ...selectedAirport, name: e.target.value })
              }
            />
            <input
              type="text"
              className="input"
              value={selectedAirport.location}
              onChange={(e) =>
                setSelectedAirport({
                  ...selectedAirport,
                  location: e.target.value,
                })
              }
            />
          </div>
          <button onClick={handleUpdateAirport} className="btn update-btn">
            Оновити
          </button>
        </>
      )}
    </div>
  );
};

export default AirportsClient;
