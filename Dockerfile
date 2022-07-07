FROM denoland/deno:latest
WORKDIR /app
COPY ./deps.ts /app
RUN deno cache deps.ts
COPY . ./
RUN deno cache main.ts
EXPOSE 8000
CMD deno run --allow-net main.ts
