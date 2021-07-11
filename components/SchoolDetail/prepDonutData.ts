import { ProgramPercentageType, RaceEthnicityType } from '../../src/typedefs'

export const prepData = (dataObj:ProgramPercentageType | RaceEthnicityType) => {
  
  const programData = Object.entries(dataObj).map(([key, value]) => {
    return {
      id: key,
      label: key,
      value: value
    }
  })

  return programData

}