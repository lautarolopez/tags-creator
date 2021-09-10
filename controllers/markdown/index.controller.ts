import { mapCardsToMarkdown } from "../../utils/mappers.ts";
import { getCardsFromList, getCardsFromListWithTag } from "../../utils/trelloApiUtils.ts";

export const getAll = async (ctx: any) => {
    const { list_name } = ctx.params;
    const cards = await getCardsFromList(list_name);
    if (cards.length > 0) return ctx.response.body = mapCardsToMarkdown(cards);
    return ctx.response.body = "No hay tarjetas :C"
}

export const getByTag = async (ctx: any) => {
    const { list_name, tag_name } = ctx.params;
    const cards = await getCardsFromListWithTag(list_name, tag_name)
    if (cards.length > 0) return ctx.response.body = mapCardsToMarkdown(cards);
    return ctx.response.body = "No hay tarjetas :C"
}