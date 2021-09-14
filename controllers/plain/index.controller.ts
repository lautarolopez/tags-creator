import { getCardsFromList, getCardsFromListWithTag } from "../../utils/trelloApiUtils.ts";
import { mapCardsToLinks, mapCardsToNames, cardsToHTML } from "../../utils/mappers.ts";


export const getAllLinks = async (ctx: any) => {
    const { list_name } = ctx.params;
    const cards = await getCardsFromList(list_name)
    if (cards.length > 0) return ctx.response.body = mapCardsToLinks(cards);
    return ctx.response.body = "No hay tarjetas :C"
}
export const getLinksByTag = async (ctx: any) => {
    const { list_name, tag_name } = ctx.params;
    const cards = await getCardsFromListWithTag(list_name, tag_name)
    if (cards.length > 0) return ctx.response.body = cardsToHTML(cards);
    return ctx.response.body = "No hay tarjetas :C"
}
export const getAllNames = async (ctx: any) => {
    const { list_name } = ctx.params;
    const cards = await getCardsFromList(list_name)
    if (cards.length > 0) return ctx.response.body = mapCardsToNames(cards);
    return ctx.response.body = "No hay tarjetas :C"
}
export const getNamesByTag = async (ctx: any) => {
    const { list_name, tag_name } = ctx.params;
    const cards = await getCardsFromListWithTag(list_name, tag_name)
    if (cards.length > 0) return ctx.response.body = mapCardsToNames(cards);
    return ctx.response.body = "No hay tarjetas :C"
}