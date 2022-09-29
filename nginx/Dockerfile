# Installs nginx alpine version
FROM nginx:1.23.1-alpine

# sets the working directory for any RUN, CMD, COPY command

WORKDIR /etc/nginx

COPY ./includes/ /etc/nginx/includes

EXPOSE 80 443

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]