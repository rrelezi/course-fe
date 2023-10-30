FROM node:18.17-alpine3.17 as builder

WORKDIR /app

RUN apk add shadow \
    gcc \
    musl-dev \
    autoconf \
    automake \
    make \
    libtool \
    nasm \
    tiff \
    jpeg \
    zlib \
    zlib-dev \
    file \
    pkgconf

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .
RUN ["yarn", "build"]

CMD ["npm", "start"]
