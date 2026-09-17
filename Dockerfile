FROM node:20

WORKDIR /app

RUN npm install -g yarn@1.22.22 --force

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host", "0.0.0.0"]