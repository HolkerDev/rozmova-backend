import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();

router.post("/", (ctx) => {
  ctx.response.body = "Hello World";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
