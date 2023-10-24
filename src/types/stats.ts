import { TestType } from "./game-types"
import { IVariant } from "./question-type"

export interface DataStat {
  content: string, world: number, ussr: number, rus: number
}

export interface TestsStat {
  testType: TestType, world: number, ussr: number, rus: number
}

export interface TestStats {
  tests: IVariant[]
}
