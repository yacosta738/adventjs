function manufacture(gifts: Array<string>, materials: string) {
    let giftsMade = [];
    for (let i = 0; i < gifts.length; i++) {
        let gift = gifts[i];
        let giftMade = true;
        for (let j = 0; j < gift.length; j++) {
            let material = gift[j];
            if (!materials.includes(material)) {
                giftMade = false;
                break;
            }
        }
        if (giftMade) {
            giftsMade.push(gift);
        }
    }
    return giftsMade;
}
