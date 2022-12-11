import * as api from "../../api"
import { lessThan } from "../private/lessThan.p"

export const localeIsABeforeB: api.FIsABeforeB = ($) => {
    return lessThan($.a.localeCompare($.b), 0)
}