import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    boolean,
    func,
    type,
    optional,
    reference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
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
}