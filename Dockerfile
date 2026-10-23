# Site estático do Grupo Orth servido pelo nginx.
# Construir:  docker build -t grupo-orth-site .
# Rodar:      docker run -d -p 8080:80 --name grupo-orth-site grupo-orth-site
FROM nginx:1.27-alpine

COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
