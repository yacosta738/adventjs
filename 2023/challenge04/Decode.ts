function decode(message: string): string {
    let decoded = message;
    while (decoded.includes('(')) {
        decoded = decoded.replace(/\(([^()]+)\)/g, (_, inner) => {
            return inner.split('').reverse().join('');
        });
    }
    return decoded;
}
