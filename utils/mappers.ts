export const mapCardsToMarkdown = (cards: any) => 
    cards
    .map((card: any) => `[ [TRE-${card.idShort}] ](${card.shortUrl})`)
    .join(", ");

export const mapCardsToLinks = (cards: any) => cards.map((card: any) => card.url).join('\n');

export const mapCardsToNames = (cards: any) => cards.map((card: any) => card.name).join('\n');

export const cardsToHTML = (cards: any) => `
<!DOCTYPE html>
<html>
<head>
<title>Tags creator - links</title>
</head>
<body>

<ul style="list-style: none">
${cards.map((card: any) => (
    `<li><a href=${card.url}>${card.name}</a></li>`
)).join('')}
</ul>

</body>
</html>
`