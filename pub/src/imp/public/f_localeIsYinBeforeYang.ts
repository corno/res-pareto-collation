import * as api from "api-pareto-collation"
import { lessThan } from "../private/lessThan"

export const f_localeIsYinBeforeYang: api.FIsYinBeforeYang = ($) => {
    return lessThan($.yin.localeCompare($.yang), 0)
}