interface Ability {
  uniqueName: string
  name: string
  description: string
}

interface Component {
  uniqueName: string
  name: string
  description: string
  itemCount: number
  imageName: string
  tradable: boolean
  masterable: boolean
  drops: any[]
}

interface Patchlog {
  name: string
  date: string
  url: string
  additions: string
  changes: string
  fixes: string
}

export default interface WarframeInterface {
  [x: string]: any
  abilities: Ability[]
  armor: number
  buildPrice: number
  buildQuantity: number
  buildTime: number
  category: string
  components: Component[]
  consumeOnBuild: boolean
  description: string
  health: number
  imageName: string
  isPrime: boolean
  masterable: boolean
  masteryReq: number
  name: string
  patchlogs: Patchlog[]
  power: number
  productCategory: string
  shield: number
  skipBuildTimePrice: number
  sprintSpeed: number
  stamina: number
  tradable: boolean
  type: string
  uniqueName: string
}
