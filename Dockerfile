# Use the official Bun image (see all versions at [1](https://hub.docker.com/r/oven/bun/tags))
FROM oven/bun:1

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy all project files into the image
COPY . .

# Set the production environment
ENV NODE_ENV=production

# Run the app
CMD ["bun", "run", "index.js"]
