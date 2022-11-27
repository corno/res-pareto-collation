import * as pt from "pareto-core-types"

export type FIsABeforeB = pt.Function<{
    readonly "a": string,
    readonly "b": string,
}, boolean>