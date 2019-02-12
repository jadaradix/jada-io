cd src;
  npm i;
  npm run build;
cd ..;

docker stop jada-io;
docker rm jada-io;
docker build -t jada-io .;

docker tag jada-io eu.gcr.io/thegmc-219013/jada-io:latest;
docker push eu.gcr.io/thegmc-219013/jada-io:latest;
