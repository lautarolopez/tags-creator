import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts"
import "https://deno.land/x/dotenv/load.ts";


const router = new Router();
const app = new Application();

const fetchDoneList = async () => {
    const res = await fetch(`https://api.trello.com/1/lists/${Deno.env.get('DONE_LIST_ID')}/cards?key=${Deno.env.get('TRELLO_KEY')}&token=${Deno.env.get('TRELLO_TOKEN')}`);
    const data = await res.json();
    return data;
}


const getBackofficeCards = async (ctx: Context) => {
    const allCards = await fetchDoneList();
    const backofficeCards = allCards.filter((card: any) => {
        let isBackoffice = false;
        card.labels.forEach((label: any) => {
            if (label.name === "Backoffice") isBackoffice = true;
        })
        return isBackoffice;
    });
    const cardsInMDX = backofficeCards.map((card: any) => `[ [TRE-${card.idShort}] ](${card.shortUrl})`)
    if (cardsInMDX.length === 0) { 
        ctx.response.body = {
            message: "No hay tarjetas :c"
        }
    } else {
        ctx.response.body = cardsInMDX.join(", ");
    }
}

const getBackofficeCardsVerbose = async (ctx: Context) => {
    const allCards = await fetchDoneList();
    const backofficeCards = allCards.filter((card: any) => {
        let isBackoffice = false;
        card.labels.forEach((label: any) => {
            if (label.name === "Backoffice") isBackoffice = true;
        })
        return isBackoffice;
    });
    const cardsInMDX = backofficeCards.map((card: any) => `[TRE-${card.idShort}] | ${card.name}`)
    if (cardsInMDX.length === 0) { 
        ctx.response.body = {
            message: "No hay tarjetas :c"
        }
    } else {
        ctx.response.body = cardsInMDX.join("\n");
    }
}

const getFrontendCards = async (ctx: Context) => {
    const allCards = await fetchDoneList();
    const frontendCards = allCards.filter((card: any) => {
        let isFrontend = false;
        card.labels.forEach((label: any) => {
            if (label.name === "Frontend") isFrontend = true;
        })
        return isFrontend;
    });
    const cardsInMDX = frontendCards.map((card: any) => `[ [TRE-${card.idShort}] ](${card.shortUrl})`)
    if (cardsInMDX.length === 0) { 
        ctx.response.body = {
            message: "No hay tarjetas :c"
        }
    } else {
        ctx.response.body = cardsInMDX.join(", ");
    }
}

const getFrontendCardsVerbose = async (ctx: Context) => {
    const allCards = await fetchDoneList();
    const frontendCards = allCards.filter((card: any) => {
        let isFrontend = false;
        card.labels.forEach((label: any) => {
            if (label.name === "Frontend") isFrontend = true;
        })
        return isFrontend;
    });
    const cardsInMDX = frontendCards.map((card: any) => `[TRE-${card.idShort}] | ${card.name}`)
    if (cardsInMDX.length === 0) { 
        ctx.response.body = {
            message: "No hay tarjetas :c"
        }
    } else {
        ctx.response.body = cardsInMDX.join("\n");
    }
}

const getBackendCards = async (ctx: Context) => {
    const allCards = await fetchDoneList();
    const backendCards = allCards.filter((card: any) => {
        let isBackend = false;
        card.labels.forEach((label: any) => {
            if (label.name === "Backend") isBackend = true;
        })
        return isBackend;
    });
    const cardsInMDX = backendCards.map((card: any) => `[ [TRE-${card.idShort}] ](${card.shortUrl})`)
    if (cardsInMDX.length === 0) { 
        ctx.response.body = {
            message: "No hay tarjetas :c"
        }
    } else {
        ctx.response.body = cardsInMDX.join(", ");
    }
}

const getBackendCardsVerbose = async (ctx: Context) => {
    const allCards = await fetchDoneList();
    const backendCards = allCards.filter((card: any) => {
        let isBackend = false;
        card.labels.forEach((label: any) => {
            if (label.name === "Backend") isBackend = true;
        })
        return isBackend;
    });
    const cardsInMDX = backendCards.map((card: any) => `[TRE-${card.idShort}] | ${card.name}`)
    if (cardsInMDX.length === 0) { 
        ctx.response.body = {
            message: "No hay tarjetas :c"
        }
    } else {
        ctx.response.body = cardsInMDX.join("\n");
    }
}

const getBugCards = async (ctx: Context) => {
    const allCards = await fetchDoneList();
    const bugCards = allCards.filter((card: any) => {
        let isBug = false;
        card.labels.forEach((label: any) => {
            if (label.name === "Bug") isBug = true;
        })
        return isBug;
    });
    const cardsInMDX = bugCards.map((card: any) => `[ [TRE-${card.idShort}] ](${card.shortUrl})`)
    if (cardsInMDX.length === 0) { 
        ctx.response.body = {
            message: "No hay tarjetas :c"
        }
    } else {
        ctx.response.body = cardsInMDX.join(", ");
    }
}

const getBugCardsVerbose = async (ctx: Context) => {
    const allCards = await fetchDoneList();
    const bugCards = allCards.filter((card: any) => {
        let isBug = false;
        card.labels.forEach((label: any) => {
            if (label.name === "Bug") isBug = true;
        })
        return isBug;
    });
    const cardsInMDX = bugCards.map((card: any) => `[TRE-${card.idShort}] | ${card.name}`)
    if (cardsInMDX.length === 0) { 
        ctx.response.body = {
            message: "No hay tarjetas :c"
        }
    } else {
        ctx.response.body = cardsInMDX.join("\n");
    }
}

const getAll = async (ctx: Context) => {
    const allCards = await fetchDoneList();
    const cardsInMDX = allCards.map((card: any) => `[ [TRE-${card.idShort}] ](${card.shortUrl})`)
    if (cardsInMDX.length === 0) { 
        ctx.response.body = {
            message: "No hay tarjetas :c"
        }
    } else {
        ctx.response.body = cardsInMDX.join(", ");
    }
}

const getAllVerbose = async (ctx: Context) => {
    const allCards = await fetchDoneList();
    const cardsInMDX = allCards.map((card: any) => `[TRE-${card.idShort}] | ${card.name}`)
    if (cardsInMDX.length === 0) { 
        ctx.response.body = {
            message: "No hay tarjetas :c"
        }
    } else {
        ctx.response.body = cardsInMDX.join("\n");
    }
}

router
    .get("/all", getAll)
    .get("/backoffice", getBackofficeCards)
    .get("/frontend", getFrontendCards)
    .get("/backend", getBackendCards)
    .get("/all/verbose", getAllVerbose)
    .get("/backoffice/verbose", getBackofficeCardsVerbose)
    .get("/frontend/verbose", getFrontendCardsVerbose)
    .get("/backend/verbose", getBackendCardsVerbose)
    .get("/bug", getBugCards)
    .get("/bug/verbose", getBugCardsVerbose);

app.use(router.routes());
app.use(router.allowedMethods());
console.log("Listening")
await app.listen({ port: 8000 });