FROM nginx
COPY app.css /usr/share/nginx/html
COPY app.js /usr/share/nginx/html
COPY index.html /usr/share/nginx/html/index.html
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80