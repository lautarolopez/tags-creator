import { Application } from "https://deno.land/x/oak/mod.ts"
import "https://deno.land/x/dotenv/load.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

import markdown from "./routes/markdown/index.routes.ts"
import plain from "./routes/plain/index.routes.ts"

const app = new Application();

app.use(markdown.routes());
app.use(markdown.allowedMethods());
app.use(plain.routes());
app.use(plain.allowedMethods());

const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(args).port;
console.log(`Listening on port ${argPort ? Number(argPort) : DEFAULT_PORT} 🦕`)
await app.listen({ port: argPort ? Number(argPort) : DEFAULT_PORT });
