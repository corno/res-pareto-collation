import { IsYinBeforeYang } from "api-pareto-collation"
import * as pt from "pareto-core-types"

export type XSortedForEach = <T>(
    $: pt.Dictionary<T>,
    $i: ($: T) => void
) => void


export type XCreateSortedForEach = (
    $d: {
        isYinBeforeYang: IsYinBeforeYang
    }
) => XSortedForEach