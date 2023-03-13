import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "a pareto wrapper around collation functions as Pareto lacks them. collation functions are used for ordering strings",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
    }),
    'type': ['resource', {
        'glossary': {
            'root': glossary,
            'imports': d({
                "common": external("glo-pareto-common"),
            }),
        },
        'api': {
            'root': api,

            'imports': d({
                "this": this_(),
            }),
        },
        'nativeDependencies': d({}),
        'devDependencies': d({
            "@types/node": null,
        }),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'parameters': d({}),
                'types': d({}),
                'type': ['synchronous', {
                    'builders': d({}),
                    'functions': d<g_glossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({}),
                }],
            },
            'imports': d({}),
        }
    }],
}