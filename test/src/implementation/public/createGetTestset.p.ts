
import * as pm from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as test from "lib-pareto-test"

import * as api from "../../interface"


import * as pub from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset = ($d) => {
    return () => {

        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>( )
        function createTest(name: string, a: string, b: string) {
            builder.add(name, {
                type: ['test', {
                    type: ['boolean',pub.$a.localeIsABeforeB({ a: a, b: b})]
                }]
            })
        }
        createTest("a,b", "a", "b")

        return pl.asyncValue({
            elements: builder.getDictionary()
        })
    }
}