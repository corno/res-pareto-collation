import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as mtest from "lib-pareto-test"
import * as mapi from "../api"
import * as mpub from "../../../../../pub"

export const $$: mapi.CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<mtest.T.TestElement>()
    function createTest(name: string, a: string, b: string) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', mpub.$a.localeIsABeforeB({ a: a, b: b })]
            }]
        })
    }
    createTest("a,b", "a", "b")

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}