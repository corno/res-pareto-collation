import * as pd from 'pareto-core-data'

import {
    string, member, group,
    typeReference,
    data,
    sfunction,
    type,
    externalTypeReference,
    imp,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters':d({}),
    'imports': d({
        "common": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "StringPair": type(group({
                "a": member(string()),
                "b": member(string()),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "IsABeforeB": sfunction(externalTypeReference("common", "Boolean"), data(typeReference("StringPair"))),
        }),
    },
}