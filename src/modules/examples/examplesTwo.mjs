// При экспорте по умолчанию, импортируемые переменные можно называть как угодно.
// import sumNubers from "./examplesOne.mjs";

// При множественном экспорте, не получится называть переменные как угодно. Но переименовать их можно с помощью as
import { minus, mult as multNumbers, sum } from "./examplesOne.mjs";

console.log(minus(10, 2), sum(10, 2), multNumbers(10, 2));