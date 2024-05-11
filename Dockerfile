FROM oven/bun:alpine

WORKDIR /web
COPY ./src ./src
COPY ./db ./db

WORKDIR /web/db
RUN bun install


WORKDIR /web/src
RUN bun install
RUN bun run build
RUN cp -r ./build /web/app


WORKDIR /web/app
EXPOSE 3000

CMD ["bun", "run", "start"]
