import * as pr from "pareto-core-raw"

import * as mproject from "lib-pareto-typescript-project/dist/modules/project"

import { $ as api } from "./api.p"

const d = pr.wrapRawDictionary

export const $: mproject.TProject = {
    'type': ['resource', null],
    'modules': d({
        "main": {
            'definition': api,
            'implementation': {}

        },
    }),
    'main': "main"
}