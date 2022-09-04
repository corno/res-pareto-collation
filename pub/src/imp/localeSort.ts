import * as api from "api-pareto-collation"

export const localeIsYinBeforeYang: api.FIsYinBeforeYang = ($) => {
    return $.yin.localeCompare($.yang) < 0
}