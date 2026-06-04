# Bejibun — Product Knowledge

> Sources: landing page content + github.com/Bejibun-Framework/bejibun README (2026-06-04).

## What is Bejibun

Bun-native TypeScript framework for building fast APIs and Web3 backends. MIT license, created Oct 2025, latest release **v0.4.24** (2026-06-03). Author: Havea Crenata.

- **Positioning:** "Fastest Framework for Web3 Builders" — modular by design, powerful out of the box, ready for blockchain workflows.
- **Install:** `bunx @bejibun/cli your-project` → `bun dev` (development) / `bun start` (production)
- **Token:** $BJBN on Solana — CA `CQhbNnCGKfDaKXt8uE61i5DrBYJV7NPsCDD9vQgypump` (pump.fun; listed CoinGecko)

## Tech Stack

| Layer | Tool |
|---|---|
| Runtime | Bun |
| Migrations & seeders | Knex |
| Models/ORM | Objection.js (Eloquent-style) |
| Validation | VineJS |
| Date/time | Luxon |
| Homepage | React |

## Framework Architecture (Laravel-inspired)

- **Controllers** — extend `BaseController`; `super.parse(request)`, `super.validate(validator, body)`, `super.response.setData(...).send()`.
- **Routing** — `Router` facade: `Router.get/post/delete("path/:id", "Controller@method")`, `Router.prefix().middleware().group([...])`, `Router.resource(path, Controller, {only/except})`.
- **Middlewares** — class with `handle(handler): HandlerType`, chainable on route groups.
- **Validators** — extend `BaseValidator`; static getters returning `super.validator.create({...})`; rules incl. `.exists(Model, column)`.
- **Models** — extend `BaseModel` (`tableName`, `idColumn`); API: `all()`, `find()`, `findOrFail()`, `create()`, `update()`, soft delete (`delete()`, `forceDelete()`, `withTrashed()`, `onlyTrashed()`, `restore()`).
- **Migrations/Seeders** — Knex `up`/`down` & `seed(knex)`.
- **Exception Handler** — extend `ExceptionHandler`, override `handle(error)`.
- **Storage** — facade with disk management: `exists/missing/get/put/delete`, `Storage.disk("public")`, runtime disk via `Storage.build({driver, root})` (driver: local).
- **Queue** — background jobs: `Job.dispatch(params).send()`, `.delay(seconds)`; worker via `queue:work`, `queue:retry`, `queue:flush`.
- **Scheduler** — `commands/Kernel.ts`: `schedule.command("hello:world").everyMinute()`.
- **WebSocket** — `Router.websocket("/", "ChatWebSocket@handle")`, class extends `BaseWebSocket` with access to `super.connections`.
- **Decorators** — `@ApiDoc({...})` for OpenAPI/Swagger route docs.
- **Globals** — `config("disk.default")`, `env("APP_KEY")`; bootstrap via `import "@bejibun/core/bootstrap"`.

## Ace CLI (`bun ace`)

- **make:** command, controller, job, middleware, migration, model, seeder, validator
- **migrate:** latest, rollback, fresh, status · **db:seed**
- **queue:** work, retry, flush
- **maintenance:** up, down · **install**, **package:configure**, **help**

## Core Capabilities (marketing claims)

- **Performance** — Bun runtime, concurrent requests, minimal overhead; for real-time Web3 (DeFi, NFT marketplaces). Claims: 5x faster builds, <10ms cold start, 100% TypeScript.
- **Validation & Security** — VineJS, rate limiter, Redis TTL caching.

## Web3 SDK (`@bejibun/web3`) — Coming Soon

- **Wallet Connect** — `WalletService`: connect (metamask), sign messages.
- **RPC Calls** — `Rpc`: network/provider config, `eth_blockNumber`, `getBalance`.
- **Contract Calls** — `Contract`: type-safe ABI, read (`balanceOf`) & write (`transfer`).

## Ecosystem Repos (github.com/Bejibun-Framework)

| Repo | Description |
|---|---|
| bejibun | Main framework (starter app) |
| bejibun-core | Framework core |
| bejibun-cli | Installation CLI |
| bejibun-app | App package |
| bejibun-database | Database |
| bejibun-redis / -cache / -cors / -x402 | Redis, cache, CORS, x402 protocol |
| bejibun-logger | "Beauty logger" |
| bejibun-utils | Utilities |
| bejibun-web / -docs | Website & documentation |

## Roadmap

| Quarter | Status | Items |
|---|---|---|
| Q4 2025 | ✅ done | CLI, core framework, Command, Router, Rate Limiter, cors/redis/cache/x402 packages, Storage (local), CoinGecko listing |
| Q1 2026 | ✅ done | Website Phase 1, Storage S3, Queue (job dispatch + worker) |
| Q2 2026 | partial | ✅ Scheduler/Cron, Route List (Swagger), WebSocket, Unit Test · ⏳ HTTP Requests, DB Transaction, Memcached, Disk Management, Archive, Cross Disks |
| Q3 2026 | planned | Website Phase 2, MySQL & MongoDB support, Model Relations, CoinMarketCap listing |
| Q4 2026 | planned | Mail Service, own ORM (Bun SQL), Authentication, SEO, Token Utility, CEX listing |

## Links

- Docs: https://docs.bejibun.com (homepage: bejibun.com)
- GitHub: https://github.com/Bejibun-Framework/bejibun
- X: https://x.com/bjbnframework · Telegram: https://t.me/BejibunPortal
