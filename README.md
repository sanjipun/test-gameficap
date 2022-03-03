# How to run development environment

- Open Docker
- Go to Root Repo
- cd gameficap
- docker-compose up --build
- Go back to Root Repo
- yarn run dev or npm run dev

# .env file

- add .env.development file
- add NEXT_PUBLIC_WAGTAIL_URL=http://localhost:8000/graphql/

# How to build for production

- Go to Root Repo
- yarn run build or npm run build

# .env file

- add .env.production file
- add NEXT_PUBLIC_WAGTAIL_URL=http://ec2-3-237-8-137.compute-1.amazonaws.com/graphql/
