const API_PATH = 'list';

export async function getLists() {
  try {
    const response = await fetch(`http://localhost:8080/api/${API_PATH}/${getUserToken()}`);
    const data = await response.json();

    return data;
  } catch (e) {
    return [];
  }
}

export function getLoggedInUserId() {
  return sessionStorage.getItem('userId');
}

export function getUserToken() {
  return getLoggedInUserId() || localStorage.getItem('deviceId');
}

export async function getListById(listId) {
  try {
    const response = await fetch(`http://localhost:8080/api/${API_PATH}/${getUserToken()}/${listId}`);
    const data = await response.json();

    return data;
  } catch (e) {
    return [];
  }
}

export async function deleteList(listId) {
  try {
    const response = await fetch(`http://localhost:8080/api/${API_PATH}/${listId}`, { method: 'DELETE' });
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
    const response = await fetch(`http://localhost:8080/api/${API_PATH}`, options);
    const data = await response.json();

    return data;
  } catch (e) {
    return false;
  }

}

export async function renameList(list) {
  try {
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
    const body = JSON.stringify(list);
    const method = 'PUT';
    const options = { method, headers, body };
    const response = await fetch(`http://localhost:8080/api/${API_PATH}`, options);
    const data = await response.json();

    return data;
  } catch (e) {
    return false;
  }

}

