import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference, externalTypeReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mproject from "lib-pareto-typescript-project/dist/modules/project"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            // "project": "../../project",
            "common": "glo-pareto-common",
            // "main": "glo-pareto-main",
        }),
        'namespace': {
            'types': types({
                "StringPair": group({
                    "a": member(str()),
                    "b": member(str()),
                })
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "IsABeforeB": _function(typeReference("StringPair"), externalTypeReference("common", "Boolean"))
        }),
    },
    'api': {
        'imports': d({
            // "main": "glo-pareto-main",
        }),
        'algorithms': d({
            "localeIsABeforeB": {
                'definition': {
                    'function': "IsABeforeB"
                },
                'type': ['reference', null],
            },
        })
    },
}