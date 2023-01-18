
import * as pm from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as test from "lib-pareto-test"

import * as api from "../api"


import * as pub from "../../../../../pub/dist"

export const $$: api.CgetTestSet = () => {

    const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
    function createTest(name: string, a: string, b: string) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', pub.$a.localeIsABeforeB({ a: a, b: b })]
            }]
        })
    }
    createTest("a,b", "a", "b")

    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}