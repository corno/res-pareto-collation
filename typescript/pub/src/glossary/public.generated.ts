import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace B {}

export namespace C {}

export namespace F {
    
    export type IsABeforeB = ($: T.StringPair) => g_common.T.Boolean
}