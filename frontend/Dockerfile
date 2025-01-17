# Use an Nginx base image
FROM nginx:alpine

# Copy the HTML file to the default Nginx folder
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80 for the client service
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
