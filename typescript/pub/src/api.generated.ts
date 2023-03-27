import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
}

export namespace A {
    
    export type localeIsABeforeB = () => g_this.SYNC.A.F.IsABeforeB
}

export type API = {
    readonly 'localeIsABeforeB': A.localeIsABeforeB
}