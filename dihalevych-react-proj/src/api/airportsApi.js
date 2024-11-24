const BASE_URL = "http://localhost:5132";

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
