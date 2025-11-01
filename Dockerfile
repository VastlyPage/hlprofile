FROM node:24.11.0-bookworm-slim

RUN apt update
RUN apt upgrade -y
RUN apt install curl wget xz-utils -y

WORKDIR /root
RUN corepack enable pnpm

COPY . .
ENV CI=true
RUN pnpm install
RUN pnpm build
RUN chmod +x app.sh

ENTRYPOINT [ "./app.sh" ]
