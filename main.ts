import { Application, Router } from "./deps.ts";
import { exampleMethod } from "./controller.ts";

const app = new Application();
const port: number = Deno.env.get("PORT") || 8000;

const router = new Router();

router.get("/", exampleMethod);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });
