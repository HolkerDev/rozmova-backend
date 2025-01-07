FROM denoland/deno:latest

WORKDIR /app
COPY . .

RUN deno cache src/main.ts

EXPOSE ${PORT:-8000}
CMD ["deno", "run", "--allow-net", "main.ts"]