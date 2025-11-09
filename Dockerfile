# Yeh batata hai ki hum Node.js ka base image use kar rahe hain. apline lightweight version hai linux ka.
FROM node:22-alpine

# Set working directory Docker container ke andar ek folder banata hai /app naam ka
WORKDIR /app

# COPY package*.json ./ → aapke package.json aur package-lock.json ko copy karta hai container ke andar.
COPY package*.json ./

#dependencies install karta hai (React, Vite, Clerk, etc).
RUN npm install

#Yeh aapka baaki pura project (src, public, configs, etc.) copy karta hai container ke andar /app me.
COPY . .

# Yeh vite build chalata hai → jo React app ko production-ready static files (dist/ folder) me convert karta hai.
RUN npm run build

# Vite preview 4173 port use karta hai
EXPOSE 4173

# Host ko 0.0.0.0 set karna zaroori hai (Render + Docker ke liye)
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
