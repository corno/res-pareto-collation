
import * as ps from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as mtest from "lib-pareto-test"

import * as api from "../api"


import * as pub from "../../../../../pub"

export const $$: api.CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<mtest.T.TestElement>()
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