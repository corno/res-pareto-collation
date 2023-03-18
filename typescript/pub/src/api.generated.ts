import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"
export namespace A {
    
    export type localeIsABeforeB = g_this.SYNC.F.IsABeforeB
}

export type API = {
    localeIsABeforeB: A.localeIsABeforeB
}