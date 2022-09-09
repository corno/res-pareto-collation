
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../../interface"


import * as pub from "../../../../pub/dist"

export const f_createGetTestset: api.FCreateGetTestset = ($d) => {
    return () => {

        const builder = pm.createDictionaryBuilder<test.TTestElement>(
            ["ignore", {}],
            () => {
                pl.panic("duplicate key")
            }
        )
        function createTest(name: string, a: string, b: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["boolean", {
                        test: pub.f_localeIsYinBeforeYang({ yin: a, yang: b})
                    }]
                }]
            })
        }
        createTest("a,b", "a", "b")

        return pa.value({
            elements: builder.getDictionary()
        })
    }
}