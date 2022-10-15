export async function getLists() {
    try {
        const response = await fetch("http://localhost:8080/api/list");
        const data = await response.json();

        return data;
    } catch (e) {
        return [];
    }
}