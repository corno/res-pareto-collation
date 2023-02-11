import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace T {
    
    export namespace StringPair {
        
        export type a = string
        
        export type b = string
    }
    
    export type StringPair = {
        readonly 'a': string
        readonly 'b': string
    }
}