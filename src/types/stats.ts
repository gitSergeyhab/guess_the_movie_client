import { TestType, Variant } from "./game-types"

export interface DataStat {
  content: string, world: number, ussr: number, rus: number
}

export interface TestsStat {
  testType: TestType, world: number, ussr: number, rus: number
}

export interface TestStats {
  tests: Variant[]
}
