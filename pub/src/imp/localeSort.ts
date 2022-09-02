import * as api from "api-pareto-collation"

export const localeIsYinBeforeYang: api.IsYinBeforeYang = ($) => {
    return $.yin.localeCompare($.yang) < 0
}