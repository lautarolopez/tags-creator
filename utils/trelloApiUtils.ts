import { normalizeName } from "./utils.ts";

export const fetchCardsFromList = async (id: string) => {
    const res = await fetch(`https://api.trello.com/1/lists/${id}/cards?key=${Deno.env.get('TRELLO_KEY')}&token=${Deno.env.get('TRELLO_TOKEN')}`);
    const data = await res.json();
    return data;
}

const fetchBoardLists = async () => {
    const res = await fetch(`https://api.trello.com/1/boards/${Deno.env.get('OSDE_BOARD_ID')}/lists?key=${Deno.env.get('TRELLO_KEY')}&token=${Deno.env.get('TRELLO_TOKEN')}`);
    return await res.json()
}

const haveTag = (card: any, tag: string) : boolean => {
    let haveTag = false;
    card.labels.forEach((label: any) => {
        if (normalizeName(label.name) === normalizeName(tag)) haveTag = true;
    })
    return haveTag;
}

export const getCardsFromList = async (listName: string) => {
    const lists = await fetchBoardLists();
    const { id } = lists.find((list: any) => normalizeName(list.name) === normalizeName(listName));
    return fetchCardsFromList(id);
}

export const getCardsFromListWithTag = async (listName: string, tagName: string) => {
    const lists = await fetchBoardLists();
    const { id } = lists.find((list: any) => normalizeName(list.name) === normalizeName(listName));
    const cards = await fetchCardsFromList(id);
    return cards.filter((card: any) => haveTag(card, tagName));
}