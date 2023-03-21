import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as g_test from "lib-pareto-test"

import * as g_pub from "../../../../../pub"

import { A } from "../api.generated"

export const $$: A.getTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
    function createTest(name: string, a: string, b: string) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', g_pub.$r.localeIsABeforeB()({ a: a, b: b })]
            }]
        })
    }
    createTest("a,b", "a", "b")

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}