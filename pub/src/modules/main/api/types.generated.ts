import * as pt from "pareto-core-types"

export type TStringPair = {
    readonly "a": string
    readonly "b": string
}

export type FIsABeforeB = ($: TStringPair) => boolean