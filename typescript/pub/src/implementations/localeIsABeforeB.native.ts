import { A } from "../api.generated"

export const $$: A.localeIsABeforeB = ($) => {
    return $.a.localeCompare($.b) < 0
}