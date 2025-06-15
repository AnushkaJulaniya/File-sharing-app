# Which OS?
#Which nodeversion?
# copy your code in docker's virtual machine
#run your code

# Node v 20 , os: Debian (Linux)
FROM node:hydrogone-slim

# Which folder will contain my code inside vm (container)
WORKDIR /app

# Copy all code from my system to virtual system (container)
COPY . /app/

# Install all npm packages
RUN npm i

#Run project
CMD ["node","index.js"]