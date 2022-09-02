
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as pub from "../../../pub"

export function createGetTestSet($d: {}): test.GetTestSet {
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
                        test: pub.localeIsYinBeforeYang({ yin: a, yang: b})
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