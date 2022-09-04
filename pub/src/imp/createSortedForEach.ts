import * as api from "api-pareto-collation"

export const createSortedForEach: api.XCreateSortedForEach = ($d) => {
    return ($, $i) => {
        $.forEach(
            (a, b) => $d.isYinBeforeYang({ yin: b, yang: a }),
            $i
        )
    }
}