import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
const wd = pr.wrapRawDictionary
export const project: NProject.TProject = {
    'type': ['resource', null],
    'modules': wd({
        "main": {
            'definition': {
                'glossary': {
                    'imports': wd({
                        // "project": "../../project",
                        // "common": "glo-pareto-common",
                        // "main": "glo-pareto-main",
                    }),
                    'types': types({
                        "StringPair": group({
                            "a": member(str()),
                            "b": member(str()),
                        })
                    }),
                    'functions': wd({
                        "IsABeforeB": {
                            'data': reference("StringPair"),
                            'return value': boolean()
                        }
                    }),
                    'interfaces': wd({}),
                    'callbacks': wd({}),
                    'pipes': wd({}),
                },
                'api': {
                    'imports': wd({
                        // "main": "glo-pareto-main",
                    }),
                    'algorithms': wd({
                        "localeIsABeforeB": {
                            'definition': ['function', {
                                'function': "IsABeforeB"
                            }],
                            'type': ['reference', null],
                        },
                    })
                },
            },
            'implementation': {}

        },
    }),
    'main': "main"
}