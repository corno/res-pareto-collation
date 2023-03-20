import { A } from "../api.generated"

export const $$: A.localeIsABeforeB = () => {
    return ($) => {
        return $.a.localeCompare($.b) < 0
    }
}