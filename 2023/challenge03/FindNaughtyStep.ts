function findNaughtyStep(original: string, modified: string): string {
    if (original === modified) {
        return '';
    }
    let shorter = original.length > modified.length ? modified : original;
    let longer = original.length > modified.length ? original : modified;
    for (let i = 0; i < shorter.length; i++) {
        if (shorter[i] !== longer[i]) {
            return longer[i];
        }
    }
    return longer[longer.length - 1];
}
