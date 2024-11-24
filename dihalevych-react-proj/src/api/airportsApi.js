const BASE_URL = "http://localhost:5132";

// Отримання списку всіх аеропортів
export const fetchAirports = async () => {
    try {
        const response = await fetch(`${BASE_URL}/airports/getALL`);
        if (!response.ok) {
            throw new Error("Не вдалося отримати список аеропортів.");
        }
        return await response.json();
    } catch (error) {
        console.error("Помилка при отриманні списку аеропортів:", error.message);
        throw error;
    }
};

// Отримання даних конкретного аеропорту за ID
export const fetchAirportById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/airports/${id}`);
        if (!response.ok) {
            throw new Error("Не вдалося отримати дані аеропорту.");
        }
        return await response.json();
    } catch (error) {
        console.error(`Помилка при отриманні даних аеропорту з ID ${id}:`, error.message);
        throw error;
    }
};

// Створення нового аеропорту
export const createAirport = async (airport) => {
    try {
        const response = await fetch(`${BASE_URL}/airports/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(airport),
        });
        if (!response.ok) {
            throw new Error("Не вдалося створити аеропорт.");
        }
        return await response.json();
    } catch (error) {
        console.error("Помилка при створенні аеропорту:", error.message);
        throw error;
    }
};

// Оновлення даних аеропорту
export const updateAirport = async (id, airport) => {
    try {
        const response = await fetch(`${BASE_URL}/airports/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(airport),
        });
        if (!response.ok) {
            throw new Error("Не вдалося оновити дані аеропорту.");
        }
        return await response.json();
    } catch (error) {
        console.error(`Помилка при оновленні аеропорту з ID ${id}:`, error.message);
        throw error;
    }
};

// Видалення аеропорту за ID
export const deleteAirport = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/airports/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Не вдалося видалити аеропорт.");
        }
        return;
    } catch (error) {
        console.error(`Помилка при видаленні аеропорту з ID ${id}:`, error.message);
        throw error;
    }
};
