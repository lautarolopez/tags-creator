export const mapCardsToMarkdown = (cards: any) => 
    cards
    .map((card: any) => `[ [TRE-${card.idShort}] ](${card.shortUrl})`)
    .join(", ");

export const mapCardsToLinks = (cards: any) => cards.map((card: any) => card.url).join('\n');

export const mapCardsToNames = (cards: any) => cards.map((card: any) => card.name).join('\n');
