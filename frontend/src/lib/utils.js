const ADMIN_USERS = [
'clafiemo@uncg.edu',
];

export function getUserId() {
    return sessionStorage.getItem('userId');
}

export function userLoggedIn() {
    return Boolean(getUserId());
}

export function getUserObject() {
    const objectString = sessionStorage.getItem('userObject');

    return objectString ? JSON.parse(objectString) : undefined;
}

export function isAdminUser() {
  const user = getUserObject();

  return ADMIN_USERS.includes(user?.email);
}