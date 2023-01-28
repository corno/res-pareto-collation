import * as pr from 'pareto-core-raw'

import {
    string,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
            "StringPair": group({
                "a": member(string()),
                "b": member(string()),
            })
        }),
        'interfaces': d({}),
        'functions': d({
            "IsABeforeB": _function(typeReference("StringPair"), typeReference("common", "Boolean"))
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