import * as api from "../../interface"
import { lessThan } from "../private/lessThan.p"

export const fLocaleIsYinBeforeYang: api.FIsABeforeB = ($) => {
    return lessThan($.a.localeCompare($.b), 0)
}