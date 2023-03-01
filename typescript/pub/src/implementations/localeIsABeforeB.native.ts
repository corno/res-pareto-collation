import { ClocaleIsABeforeB } from "../api"

export const $$:ClocaleIsABeforeB = ($) => {
    return $.a.localeCompare($.b) < 0
}