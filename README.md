# Social-Network

 A simple social-network demo (Next.js frontend + Express/MongoDB backend) with file uploads, user profiles, posts, comments, and basic rate-limiting + Redis caching support.

## Features
- User registration & login
- Create posts with optional media uploads
- Commenting and liking posts
- Connection (follow/request) system between users
- Profile upload and download (resume/pdf)
- Basic request rate-limiting with Redis support

## Tech stack
- Frontend: Next.js (React)
- Backend: Node.js, Express
- Database: MongoDB (mongoose)
- Cache: Redis (optional; falls back if unavailable)
- File uploads: multer, served from `/uploads`

## Repository structure

- `backend/` — Express API, controllers, models, routes, and uploads
- `frontend/` — Next.js application (pages, components, styles)

Key backend files:
- `backend/server.js` — app entry (connects Redis and MongoDB, listens on port 8000)
- `backend/routes/` — API route definitions (`user.routes.js`, `posts.routes.js`)
- `backend/config/redis.js` — Redis connection and fallback behavior
- `uploads/` — static files uploaded by users (served at `/uploads`)

## Environment / configuration

Create a `.env` file in `backend/` with at least:

- `MONGODB_URI` — MongoDB connection string (required)
- `REDIS_URL` — optional Redis URL, e.g. `redis://127.0.0.1:6379` (if omitted, code will try local Redis and continue without cache on failure)

The backend listens on port `8000` by default (this is currently hard-coded in `server.js`).

Frontend environment:
- The frontend reads its API base from `frontend/src/environment.js` (set `IS_PROD` to `false` for local development to use `http://localhost:8000`).

## Install & run

Backend (development):

```bash
cd backend
npm install
npm run dev
```

Backend (production-like):

```bash
cd backend
npm install --production
npm run prod
```

Frontend (development):

```bash
cd frontend
npm install
npm run dev
```

Frontend (build & start):

```bash
cd frontend
npm run build
npm run start
```

## API overview

Base URL (local): `http://localhost:8000`

User routes (examples):
- `POST /register` — register a new user
- `POST /login` — login
- `POST /update_profile_picture` — upload profile image (multipart/form-data, field name `profile_picture`)
- `GET /user/get_all_user` — list users
- `GET /user/get_profile_based_on_username` — fetch profile by username
- Connection endpoints: `/user/send_connection_request`, `/user/getConnectionRequest`, `/user/acceptConnectionRequest`

Post routes (examples):
- `POST /posts` — create a post with optional media (multipart/form-data, field name `media`)
- `GET /all_posts` — get paginated/all posts
- `POST /comment` — add a comment
- `POST /increment_post_likes` — increment likes for a post

Static uploads are served from `/uploads` (the backend includes `app.use('/uploads', express.static('uploads'))`).

## Notes and gotchas
- The backend currently binds to port `8000` in `server.js` — update if you need a different port.
- Redis is optional: if it's unavailable the server will continue without cache (see `backend/config/redis.js`).
- File uploads are stored locally in `uploads/` — for production you should switch to cloud storage (S3, Cloud Storage, etc.).

## Contributing
- Open issues or PRs for bug fixes and small improvements.
- If adding a new endpoint, update the README API overview and add tests where appropriate.

## License
This repository does not include a license file. Add one (for example, `MIT`) if you intend to open-source this project.

---
If you'd like, I can also:
- Add `README` badges (build, license)
- Generate a minimal `.env.example`
- Commit the README and open a PR branch

Created by automated README generation.
