# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=20.12.2
# Dockerfile

# Add this line at the top of your Dockerfile


# Use the ARG in your Dockerfile if needed, or just define it for later use


FROM node:${NODE_VERSION}

# Use production node environment by default.
ENV NODE_ENV=production
ENV DATABASE_URL=postgresql://postgres:example@db:5432/learning?sslmode=disable



WORKDIR /app


COPY package*.json /app/

RUN npm install


# Copy the rest of the source files into the image.
COPY . .

RUN npx prisma generate


# Expose the port that the application listens on.
EXPOSE 8080



# Run the application.
CMD ["npm","start"]
