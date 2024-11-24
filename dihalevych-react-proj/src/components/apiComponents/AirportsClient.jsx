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
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [newAirport, setNewAirport] = useState({ name: "", location: "" });
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name"); // Поле для сортування
  const [error, setError] = useState("");

  // Завантаження списку аеропортів
  const loadAirports = async () => {
    try {
      const data = await fetchAirports();
      setAirports(data);
      setFilteredAirports(data);
      setError("");
    } catch {
      setError("Помилка при отриманні аеропортів");
    }
  };

  useEffect(() => {
    loadAirports();
  }, []);

  // Функція для фільтрації та сортування
  useEffect(() => {
    let result = [...airports];

    // Фільтрація
  if (searchQuery) {
    result = result.filter(
      (airport) =>
        airport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        airport.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Сортування
  result.sort((a, b) => {
    const fieldA = a[sortBy]?.toLowerCase() || ""; // Приведення до нижнього регістру
    const fieldB = b[sortBy]?.toLowerCase() || ""; // Приведення до нижнього регістру

    if (fieldA < fieldB) return -1;
    if (fieldA > fieldB) return 1;
    return 0;
  });

    setFilteredAirports(result);
  }, [searchQuery, sortBy, airports]);

  // Створення нового аеропорту
  const handleCreateAirport = async () => {
    try {
      await createAirport(newAirport);
      setNewAirport({ name: "", location: "" });
      await loadAirports();
    } catch {
      setError("Помилка при створенні аеропорту");
    }
  };

  // Видалення аеропорту
  const handleDeleteAirport = async (id) => {
    try {
      await deleteAirport(id);
      await loadAirports();
    } catch {
      setError("Помилка при видаленні аеропорту");
    }
  };

  // Вибір аеропорту для редагування
  const handleSelectAirport = async (id) => {
    try {
      const airport = await fetchAirportById(id);
      setSelectedAirport(airport);
    } catch {
      setError("Помилка при отриманні даних аеропорту");
    }
  };

  // Оновлення аеропорту
  const handleUpdateAirport = async () => {
    if (!selectedAirport) return;
    try {
      await updateAirport(selectedAirport.id, selectedAirport);
      await loadAirports();
      setSelectedAirport(null);
    } catch {
      setError("Помилка при оновленні аеропорту");
    }
  };

  return (
    <div className="airports-container">
      <h1 className="title">Аеропорти</h1>
      {error && <p className="error-message">{error}</p>}

      {/* Пошук */}
      <div className="search-container">
        <input
          type="text"
          className="input search-input"
          placeholder="Пошук за назвою або локацією"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="input sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Сортувати за назвою</option>
          <option value="location">Сортувати за локацією</option>
        </select>
      </div>

      {/* Список аеропортів */}
      <ul className="airports-list">
        {filteredAirports.map((airport) => (
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

      {/* Додавання нового аеропорту */}
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

      {/* Редагування аеропорту */}
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
