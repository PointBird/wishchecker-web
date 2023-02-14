# Start the server locally

## w/o Docker

In the project directory, you can run:

```
npm start
```

## with Docker

### Pre-requisites

Install Docker and create an account

### Build a Docker image and run it

```
docker build -t wishchecker-web-repo .
docker run -p 3001:80 wishchecker-web-repo
```

# Deployment

## Set up authentication and project

```
gcloud auth login
gcloud auth configure-docker
gcloud config set project wishchecker-web-prod
```

## Push to Google Cloud Build w/ Docker

```
docker tag wishchecker-web-repo gcr.io/wishchecker-web-prod/wishchecker-web-repo
docker push gcr.io/wishchecker-web-prod/wishchecker-web-repo
```
