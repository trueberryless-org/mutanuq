FROM nginx:latest AS runtime
COPY /starlight/lunaria/nginx.conf /etc/nginx/nginx.conf
COPY /starlight/dist/lunaria /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
