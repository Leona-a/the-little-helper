const API_PATH = 'listItem';

export async function getListItems(listId) {
    try {
        const response = await fetch(`http://localhost:8080/api/${API_PATH}/${listId}`);
        const data = await response.json();

        return data;
    } catch (e) {
        return [];
    }
}

export async function deleteListItem(listItemId) {
    try {
        const response = await fetch(`http://localhost:8080/api/${API_PATH}/${listItemId}`, { method: 'DELETE' });
        await response.json();

        return true;
    } catch (e) {
        return false;
    }
}

export async function createListItem(listItem) {
    try {
        const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
        const body = JSON.stringify(listItem);
        const method = 'POST';
        const options = { method, headers, body };
        const response = await fetch(`http://localhost:8080/api/${API_PATH}`, options);
        const data = await response.json();

        return data;
    } catch (e) {
        return false;
    }
}


export async function toggleListItem(listItem) {
    try {
        const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
        const body = JSON.stringify(listItem);
        const method = 'PUT';
        const options = { method, headers, body };
        const response = await fetch(`http://localhost:8080/api/${API_PATH}`, options);
        const data = await response.json();

        return data;
    } catch (e) {
        return false;
    }
}


