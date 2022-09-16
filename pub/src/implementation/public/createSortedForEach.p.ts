import * as pt from "pareto-core-types"

import * as api from "api-pareto-collation"

export const fCreateSortedForEach: api.FCreateSortedForEach = ($d) => {

    return <T>(
        $: pt.Dictionary<T>,
        $i: ($: api.TKeyValuePair<T>) => void
    ) => {
        const temp: { key: string, value: T }[] = []

        $.map(($, key) => {
            temp.push({
                key: key,
                value: $,
            })
        })
        temp.sort((a, b) => $d.isYinBeforeYang({ yin: b.key, yang: a.key }) ? 1 : -1).forEach(($) => {
            $i($)
        })

        //     (a, b) => $d.isYinBeforeYang({ yin: b, yang: a }),
        //     $i
        // )
    }
}