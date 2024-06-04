#Disclaimer : This docker script is just a placeholder for this application

# Stage 1: Build the application
FROM node:18-alpine as builder

# Set working directory
WORKDIR /next-app-boilerplate

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files to the working directory
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create the production image
FROM node:18-alpine as runner

# Set working directory
WORKDIR /next-app-boilerplate

# Copy necessary files from the builder stage
COPY --from=builder /next-app-boilerplate/package.json .
COPY --from=builder /next-app-boilerplate/package-lock.json .
COPY --from=builder /next-app-boilerplate/next.config.mjs ./
COPY --from=builder /next-app-boilerplate/public ./public
COPY --from=builder /next-app-boilerplate/.next/standalone ./
COPY --from=builder /next-app-boilerplate/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 3000

# Start the application
ENTRYPOINT ["npm", "start"]