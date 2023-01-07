import * as api from "../api"

export const ilocaleIsABeforeB: api.ClocaleIsABeforeB = ($) => {
    return $.a.localeCompare($.b) < 0
}