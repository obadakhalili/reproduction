import ERMLParser, {API} from "@erml/parser"

console.log(ERMLParser(`ENTITY Example { SIMPLE "foo" }`), API.ATOMIC)
