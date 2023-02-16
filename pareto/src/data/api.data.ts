import * as pr from 'pareto-core-raw'

import {
    string,
    array, dictionary, group, member, taggedUnion, types, typeReference, func, data, type,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'types': d({
            "StringPair": type(group({
                "a": member(string()),
                "b": member(string()),
            })),
        }),
        'interfaces': d({}),
        'functions': d({
            "IsABeforeB": func(typeReference("StringPair"), null, null, data(typeReference("common", "Boolean"), false)),
        }),
    },
    'api': {
        'imports': d({
        }),
        'algorithms': d({
            "localeIsABeforeB": algorithm(definitionReference("IsABeforeB"))
        })
    },
}