# Menggunakan image Nginx sebagai base image
FROM nginx:latest

# Salin file HTML ke dalam direktori default Nginx
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./style.css /usr/share/nginx/html/style.css

# Expose port 80 untuk akses HTTP
EXPOSE 80