import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import { test as main_localeIsABeforeB } from "../modules/main/localeIsABeforeB.p"

const x = pr.wrapRawDictionary({
    "main": pr.wrapRawDictionary({
        "localeIsABeforeB": main_localeIsABeforeB,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))