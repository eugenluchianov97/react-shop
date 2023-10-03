

export const LocalStorageSetItem = (key, value) => {
       localStorage.setItem(key, JSON.stringify(value))
}

export const LocalStorageGetItem = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const LocalStorageRemoveItem = (key) => {
    return localStorage.removeItem(key)
}

export const LocalStorageHasItem = (key) => {
    return localStorage.getItem(key) !== null
}
