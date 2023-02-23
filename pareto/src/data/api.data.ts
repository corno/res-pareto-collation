import * as pd from 'pareto-core-data'

import {
    string,
    array, dictionary, group, member, taggedUnion, types, typeReference, func, data, type,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
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