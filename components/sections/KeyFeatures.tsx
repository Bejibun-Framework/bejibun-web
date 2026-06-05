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
    {title: "Eloquent-style ORM", detail: "Objection.js + Knex: soft deletes, migrations, seeders. PostgreSQL, MySQL, SQLite."},
    {title: "Validation & Security", detail: "VineJS validators, rate limiter, cache system."},
    {title: "Queues, Scheduler & WebSocket", detail: "Job.dispatch().delay().send(), cron-style kernel, Router.websocket()."},
    {title: "Storage & Utilities", detail: "Multi-disk storage facade, CORS, logging, @ApiDoc swagger decorator."}
];

export function KeyFeatures() {
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
                        Everything you know from Laravel. In TypeScript.
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
