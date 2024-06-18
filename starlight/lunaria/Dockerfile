FROM node:lts AS build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY ./package.json .
RUN pnpm i
COPY . .
RUN pnpm run lunaria:build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist/lunaria /usr/local/apache2/htdocs/
EXPOSE 80
EXPOSE 443
