import * as pt from "pareto-core-types"
import * as pi from "pareto-core-internals"

import * as api from "api-pareto-collation"


function imp<T>(
    $d: {
        isYinBeforeYang: api.FIsYinBeforeYang
    }
): api.PSortedForEach {

    return <T>(
        $: pt.Dictionary<T>,
        $i: ($: {
            readonly "entry": T;
            readonly "key": string;
        }) => void
    ) => {
        const temp: { key: string, value: T }[] = []

        $.map(($, key) => {
            temp.push({
                key: key,
                value: $,
            })
        })
        temp.sort((a, b) => $d.isYinBeforeYang({ yin: b.key, yang: a.key }) ? 1 : -1).forEach(($) => {
            $i({
                key: $.key,
                entry: $.value,
            })
        })

        //     (a, b) => $d.isYinBeforeYang({ yin: b, yang: a }),
        //     $i
        // )
    }
}

export const f_createSortedForEach: api.FCreateSortedForEach = ($d) => {
    return imp($d)
}