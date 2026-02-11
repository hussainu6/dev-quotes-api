# Dev Quotes API

Free REST API for random developer & programming quotes. No auth, no rate limits.

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API info |
| GET | `/quote` | Random quote |
| GET | `/quote/:id` | Quote by ID (1–10) |
| GET | `/quotes` | All quotes |

## Quick Start

```bash
npm install && npm run dev
```

## Example

```bash
curl https://your-deployment.onrender.com/quote
```

```json
{"id":3,"quote":"Any fool can write code that a computer can understand...","author":"Martin Fowler"}
```

## Deploy

- **Render** / **Railway** / **Fly.io** — zero config
- Set `PORT` if required
