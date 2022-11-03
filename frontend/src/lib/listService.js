export async function getLists() {
    try {
        const response = await fetch("http://localhost:8080/api/list");
        const data = await response.json();

        return data;
    } catch (e) {
        return [];
    }
}

export async function deleteList(listId) {
    try {
        const response = await fetch(`http://localhost:8080/api/list/${listId}`, { method: 'DELETE' });
        await response.json();

        return true;
    } catch (e) {
        return false;
    }
}

export async function createList(list) {
    try {
        const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
        const body = JSON.stringify(list);
        const method = 'POST';
        const options = { method, headers, body };
        const response = await fetch(`http://localhost:8080/api/list`, options);
        const data = await response.json();

        return data;
    } catch (e) {
        return false;
    }
}

