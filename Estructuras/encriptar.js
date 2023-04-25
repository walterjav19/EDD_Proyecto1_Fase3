//encode text
export function encodeText(text) {
    return btoa(text);
}

//decode text
export function decodeText(text) {
    return atob(text);
}