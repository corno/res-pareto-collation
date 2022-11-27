import * as api from "../../interface"
import { lessThan } from "../private/lessThan.p"

export const fLocaleIsYinBeforeYang: api.FIsYinBeforeYang = ($) => {
    return lessThan($.yin.localeCompare($.yang), 0)
}