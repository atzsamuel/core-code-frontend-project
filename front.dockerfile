## Build
# docker build -t frontend:0.1.0 -f front.dockerfile .
## Run
# docker run -d -p 3000:3000 frontend:0.1.0

#FROM node:16.15.0-stretch-slim as compilacion
FROM node:16-bullseye-slim as compilacion

ENV REACT_APP_BACKEND_BASE_URL=http://20.121.254.104:8500

# Copy application
COPY . /opt/app

WORKDIR /opt/app

RUN npm install

RUN npm run build

# Fase de ejecucion del frontend (web server)

#FROM node:16.15.0-stretch-slim
FROM node:16-bullseye-slim

COPY --from=compilacion /opt/app/build /opt/app/build

WORKDIR /opt/app

RUN npm install -g serve

CMD ["serve", "-s", "build"]