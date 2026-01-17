FROM node:24-alpine

WORKDIR app/

COPY arborea/package.json .

RUN npm install

# RUN npm i -g serve

COPY . .

# WORKDIR arborea/

# RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev" , "--", "--host"]

# CMD ["serve", "-s", "dist"] 

#docker build -t arborea . && docker run -it --rm -p 3000:3000 arborea sh