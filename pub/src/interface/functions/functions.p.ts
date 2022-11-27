import * as pt from "pareto-core-types"
import { TKeyValuePair } from "../types/types.p"

export type FIsYinBeforeYang = (
    $: {
        readonly "yin": string,
        readonly "yang": string,
    }
) => boolean
