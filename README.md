# Codex Server

This application acts as the backend for [**codex**](https://github.com/s-varun22/codex) application.

A minimal API server that:

- Runs an Express app in TypeScript
- Mounts **json-server** for a file-based REST API
- Adds **json-server-auth** (register, login, JWT + resource rules)

## Project structure

```text
src/
  index.ts           # Entrypoint (Express + json-server + auth wiring)
  authRules.ts       # Simple permission rules mapping
db.json              # Fake DB storage (file-based)
```
