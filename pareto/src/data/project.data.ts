import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"

const d = pr.wrapRawDictionary

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "a pareto wrapper around collation functions as Pareto lacks them. collation functions are used for ordering strings",
    'license': "ISC",

    'pubdependencies': d({
        "glo-pareto-common": {},
    }),
    'type': ['resource', {
        'definition': api,
        'devDependencies': d({
            "@types/node": {},
        }),
        'test': {
            'dependencies': d({
            }),
        }
    }],
}