import * as api from "../api"

export const $$: api.ClocaleIsABeforeB = ($) => {
    return $.a.localeCompare($.b) < 0
}