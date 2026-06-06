"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import {CodeBlock} from "@/components/ui/code-block";

// Real code from the framework README — not pseudo-code.
const DX_TABS = [
    {
        key: "Routing",
        file: "routes/api/test.ts",
        summary: "Grouping, prefixes, middleware chaining, and Laravel-style resource routes.",
        code: `import Router from "@bejibun/core/facades/Router";
import YourController from "@/app/controllers/YourController";
import TestMiddleware from "@/app/middlewares/TestMiddleware";

export default Router.prefix("test")
    .middleware(new TestMiddleware())
    .group([
        Router.get("get", "TestController@get"),
        Router.get("detail/:id", "TestController@detail"),
        Router.post("add", "TestController@add"),
        Router.post("edit", "TestController@edit"),
        Router.delete("delete/:id", "TestController@delete"),
        Router.get("restore/:id", "TestController@restore"),

        Router.resource("path", YourController),
        Router.resource("path", YourController, {
            only: ["index", "store"] // "index" | "store" | "show" | "update" | "destroy"
        }),
        Router.resource("path", YourController, {
            except: ["index", "store"] // "index" | "store" | "show" | "update" | "destroy"
        })
    ]);`
    },
    {
        key: "Middleware",
        file: "app/middlewares/TestMiddleware.ts",
        summary: "Inspect, transform, and guard requests before they reach your application.",
        code: `import type {HandlerType} from "@bejibun/core/types";
import Logger from "@bejibun/logger";

export default class TestMiddleware {
    public handle(handler: HandlerType): HandlerType {
        return async (request: Bun.BunRequest, server: Bun.Server<any>) => {
            Logger.setContext("TestMiddleware").debug(request.url);

            return handler(request, server);
        };
    }
}`
    },
    {
        key: "Validator",
        file: "app/validators/TestValidator.ts",
        summary: "VineJS powered validators with database aware rules like exists() and unique().",
        code: `import type {ValidatorType} from "@bejibun/core/types/ValidatorType";
import BaseValidator from "@bejibun/core/bases/BaseValidator";
import TestModel from "@/app/models/TestModel";

export default class TestValidator extends BaseValidator {
    public static get detail(): ValidatorType {
        return super.validator.create({
            id: super.validator.number().min(1).exists(TestModel, "id")
        });
    }

    public static get add(): ValidatorType {
        return super.validator.create({
            name: super.validator.string()
        });
    }
}`
    },
    {
        key: "Controller",
        file: "app/controllers/TestController.ts",
        summary: "Parse, validate, respond — the request lifecycle you already know.",
        code: `import BaseController from "@bejibun/core/bases/BaseController";
import TestModel from "@/app/models/TestModel";
import TestValidator from "@/app/validators/TestValidator";

export default class TestController extends BaseController {
    public async detail(request: Bun.BunRequest): Promise<Response> {
        const body = await super.parse(request);
        await super.validate(TestValidator.detail, body);

        const test = await TestModel.findOrFail(body.id);

        return super.response.setData(test).send();
    }
}`
    },
    {
        key: "Model",
        file: "app/models/TestModel.ts",
        summary: "Eloquent-style models with soft deletes, withTrashed, and restore built in.",
        code: `import type {Timestamp, NullableTimestamp} from "@bejibun/core/bases/BaseModel";
import BaseModel from "@bejibun/core/bases/BaseModel";

export default class TestModel extends BaseModel {
    public static tableName: string = "tests";
    public static idColumn: string = "id";

    declare id: bigint;
    declare name: string;
    declare created_at: Timestamp;
    declare updated_at: Timestamp;
    declare deleted_at: NullableTimestamp;
}

// Familiar, chainable API:
await TestModel.all();
await TestModel.findOrFail(id);
await TestModel.create({name: "Bejibun"});
await TestModel.find(id).update({name: "Updated"});
await TestModel.find(id).delete();   // soft delete
await TestModel.onlyTrashed();
await TestModel.withTrashed().find(id).restore();`
    },
    {
        key: "WebSocket",
        file: "app/websockets/ChatWebSocket.ts",
        summary: "Real-time events and persistent connections without the ceremony.",
        code: `import BaseWebSocket from "@bejibun/core/bases/BaseWebSocket";

export default class ChatWebSocket extends BaseWebSocket {
    public async handle(
        ws: Bun.ServerWebSocket<any>,
        message: string | Buffer<ArrayBuffer>
    ): Promise<void> {
        for (const connection of super.connections) {
            if (connection.data.id !== ws.data.id) {
                if (connection.readyState === 1) {
                    connection.send(message);
                }
            }
        }
    }
}`
    },
    {
        key: "Command",
        file: "app/commands/HelloWorldCommand.ts",
        summary: "Build custom CLI commands with arguments, options, and scheduled automation.",
        code: `import Logger from "@bejibun/logger";

export default class HelloWorldCommand {
    /**
     * The name and signature of the console command.
     *
     * @var $signature string
     */
    protected $signature: string = "hello:world";

    /**
     * The console command description.
     *
     * @var $description string
     */
    protected $description: string = "Run hello world";

    /**
     * The options or optional flag of the console command.
     *
     * @var $options Array<Array<string>>
     */
    protected $options: Array<Array<string>> = [];

    /**
     * The arguments of the console command.
     *
     * @var $arguments Array<Array<string>>
     */
    protected $arguments: Array<Array<string>> = [];

    public async handle(options: any, args: Array<string>): Promise<void> {
        Logger.debug("Hello World!");
    }
}`
    },
    {
        key: "Migration",
        file: "database/migrations/20250929_000001_tests.ts",
        summary: "Evolve your database schema safely with reversible, versioned migrations.",
        code: `import type {Knex} from "knex";
import TestModel from "@/app/models/TestModel";

export function up(knex: Knex): Knex.SchemaBuilder {
    return knex.schema.createTable(TestModel.tableName, (table: Knex.TableBuilder) => {
        table.bigIncrements("id");
        table.string("name");
        table.timestamps(true, true);
        table.timestamp("deleted_at");
    });
}

export function down(knex: Knex): Knex.SchemaBuilder {
    return knex.schema.dropTable(TestModel.tableName);
}`
    },
    {
        key: "Seeder",
        file: "database/seeders/20250929_000001_seeder_test.ts",
        summary: "Seed realistic data for development, testing, and fresh deployments.",
        code: `import type {Knex} from "knex";
import TestModel from "@/app/models/TestModel";

export async function seed(knex: Knex): Promise<void> {
    for (const name of ["Name 1", "Name 2", "Name 3"]) {
        await TestModel.query(knex).insert({
            name: name
        });
    }
}`
    },
    {
        key: "CLI",
        file: "bun ace",
        summary: "Scaffolding, migrations, queues, maintenance mode — artisan, reborn as ace.",
        code: `$ bun ace
Usage: ace [options] [command]

Ace for your commander
Author: Havea Crenata <havea.crenata@gmail.com>

Options:
  -v, --version                Show the current version
  -h, --help                   display help for command

Commands:
  db:seed [options]            Run database seeders

  install <packages...>        Install package dependencies

  maintenance:down [options]   Turn app into maintenance mode
  maintenance:up               Turn app into live mode

  make:command <file>          Create a new command file
  make:controller <file>       Create a new controller file
  make:job <file>              Create a new job file
  make:middleware <file>       Create a new middleware file
  make:migration <file>        Create a new migration file
  make:model <file>            Create a new model file
  make:seeder <file>           Create a new seeder file
  make:validator <file>        Create a new validator file

  migrate:fresh [options]      Rollback all migrations and re-run migrations
  migrate:latest               Run latest migration
  migrate:rollback [options]   Rollback the latest migrations
  migrate:status [options]     List migrations status

  package:configure [options]  Configure package after installation

  queue:flush                  Flush all of the failed queue jobs
  queue:retry                  Retry a failed queue job
  queue:work                   Start processing jobs on the queue as a daemon

  route:list                   List all registered routes

  schedule:work                Start the schedule worker

  help [command]               display help for command

Examples:
  $ bun ace --help
  $ bun ace --version
  $ bun ace migrate:latest
`
    }
];

const DX_POINTS = [
    {title: "Routing & Middleware", detail: "Groups, prefixes, guards, and resource routes for API-heavy dApps."},
    {title: "Controllers & Validation", detail: "Parse, validate, and respond with VineJS-powered validators, request helpers, and database-aware rules."},
    {title: "Eloquent-style ORM", detail: "Objection.js + Knex with soft deletes, query builders, migrations, seeders, and multi-database support."},
    {title: "Real-time & Background Jobs", detail: "WebSockets, queues, delayed jobs, retries, and cron-style task scheduling built into the framework."},
    {title: "CLI & Scaffolding", detail: `Generate controllers, models, validators, migrations, seeders, commands, and more with "bun ace".`},
    {title: "Storage & Utilities", detail: "Multi-disk storage, caching, logging, CORS, maintenance mode, and production-ready helpers."},
    {title: "API Documentation", detail: "Swagger/OpenAPI generation with decorators and automatic endpoint discovery."},
    {title: "Bun-Native Performance", detail: "Built from the ground up for Bun with fast startup times, minimal overhead, and TypeScript-first development."}
];

export function DeveloperExperiences() {
    const [active, setActive] = useState(0);
    const tab = DX_TABS[active];

    return (
        <section id="dx" className="py-[80px] md:py-[112px] border-b border-border">
            <div className="max-w-[1150px] mx-auto px-4 md:px-6">
                <motion.div
                    initial={{opacity: 0, y: 16}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-12 md:mb-16"
                >
                    <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-brand mb-4">
                        02 — Developer Experience
                    </p>
                    <h2 className="text-[32px] md:text-[44px] leading-[1.15] tracking-[-0.03em] font-medium max-w-[640px]">
                        Build features, not boilerplate.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-14">
                    {/* Feature list */}
                    <motion.div
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.1}}
                        className="flex flex-col"
                    >
                        {DX_POINTS.map((point) => (
                            <div key={point.title} className="py-4 border-b border-border last:border-b-0">
                                <h3 className="text-[15px] font-medium mb-1">{point.title}</h3>
                                <p className="text-[13.5px] leading-[1.6] text-muted-foreground">{point.detail}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Code tabs */}
                    <motion.div
                        initial={{opacity: 0, y: 16}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {DX_TABS.map((t, i) => (
                                <button
                                    key={t.key}
                                    onClick={() => setActive(i)}
                                    className={`h-[32px] px-4 rounded-full text-[13px] font-medium transition-colors cursor-pointer ${
                                        active === i
                                            ? "bg-foreground text-background"
                                            : "bg-shade hover:bg-shade-hover text-muted-foreground"
                                    }`}
                                >
                                    {t.key}
                                </button>
                            ))}
                        </div>
                        <p className="text-[14px] text-muted-foreground mb-4">{tab.summary}</p>
                        <CodeBlock code={tab.code} title={tab.file} plain={tab.key === "CLI"}/>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
