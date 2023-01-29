import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/modules/project"

import { $ as api } from "./api.p"

const d = pr.wrapRawDictionary

export const $: mproject.TProject = {
    'name': "res-pareto-collation",

    'author': "Corno",
    'description': "a pareto wrapper around collation functions as Pareto lacks them. collation functions are used for ordering strings",
    'license': "ISC",

    'type': ['resource',  {
        'devDependencies': d({
            "@types/node": {},
        }),
    }],
    'modules': d({
        "main": {
            'definition': api,

        },
    }),
    'main': "main",
    'pubdependencies': d({
        "glo-pareto-common": {},
    }),
    'testdependencies': d({}),
}