# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

RUN npm install -g yarn@1.22.22

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Production stage
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["node", "build"]