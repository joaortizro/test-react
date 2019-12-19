FROM nginx

#copy nginx config file (default3) to container
COPY default3.conf /etc/nginx/conf.d/default.conf

#react app
COPY ./build/ /usr/share/nginx/html

#HEROKU Specific
#EXPOSE 80

#CMD nginx -g 'daemon off'

#HEROKU Specific

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

