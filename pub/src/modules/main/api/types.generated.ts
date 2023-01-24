import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"

export type TStringPair = {
    readonly 'a': string
    readonly 'b': string
}

export type FIsABeforeB = ($: TStringPair,) => mcommon.TBoolean