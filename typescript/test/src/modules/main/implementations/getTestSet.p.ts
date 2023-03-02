import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"

import * as gpub from "../../../../../pub"

import { CgetTestSet } from "../definition/api.generated"

export const $$:CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
    function createTest(name: string, a: string, b: string) {
        builder.add(name, {
            type: ['test', {
                type: ['boolean', gpub.$r.localeIsABeforeB({ a: a, b: b })]
            }]
        })
    }
    createTest("a,b", "a", "b")

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}