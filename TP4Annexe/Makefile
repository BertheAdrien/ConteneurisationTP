up:
docker compose up --build -d

down:
docker compose down --remove-orphans

logs:
docker compose logs -f

scan:
trivy image todo-api:latest [cite: 218]

test:
docker build --target builder -t todo-api:test ./backend [cite: 208]
docker run --rm todo-api:test pytest -q
