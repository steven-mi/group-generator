function chunkArray(arr: any[], chunkCount: number) {
    const chunks = [];
    while (arr.length) {
        const chunkSize = Math.ceil(arr.length / chunkCount--);
        const chunk = arr.slice(0, chunkSize);
        chunks.push(chunk);
        arr = arr.slice(chunkSize);
    }
    return chunks;
}

function shuffleArray(arr: any[]) {
    return arr.sort((a, b) => 0.5 - Math.random())
}

export function generateSubGroups(groups: string[], numSubGroups: number) {
    const shuffledGroups = shuffleArray(groups);
    return chunkArray(shuffledGroups, numSubGroups)
}
