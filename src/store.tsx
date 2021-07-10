import * as React from "react"
import { SchoolType, RaceEthnicityType, ProgramPercentageType, SchoolIdType, SizeType  } from "./typedefs"

export interface SchoolDataType {
  id: SchoolIdType
  school: SchoolType
  race_ethnicity: RaceEthnicityType
  program_percentage: ProgramPercentageType
  size: SizeType

}


const normalizeData = (schools:any) => {
  return schools.map((school:any) => {
      const normalizedSchool = { id: null, school: null, program_percentage: null, race_ethnicity: null, size: null }
      normalizedSchool.id = school.id
      normalizedSchool.school = school.school
      normalizedSchool.program_percentage = school.latest.academics.program_percentage
      normalizedSchool.race_ethnicity = school.latest.student.demographics.race_ethnicity,
      normalizedSchool.size = school.latest.student.size
      return normalizedSchool
  })
}

export const useSchools = ( initial:SchoolDataType[] ) => {
  const [schools, schoolsSet] = React.useState<SchoolDataType[]>(initial)
  const [isSearching, setIsSearching] = React.useState(false);
  const [currentSchool, currentSchoolSet] = React.useState<SchoolDataType>()
  const [ drawerOpen, setDrawerOpen  ] = React.useState(false)

  return {
    schools,
    currentSchool, 
    drawerOpen,
    setDrawerOpen,
    currentSchoolSet,
    isSearching,
    setIsSearching,
    load(fetchedSchools: SchoolDataType[]){
      schoolsSet(normalizeData(fetchedSchools))
    }
  }

}

type UseSchoolsType = ReturnType<typeof useSchools>

// Context: 
export const SchoolsContext = React.createContext<UseSchoolsType | null>(null)

export const useSchoolsContext = () => React.useContext(SchoolsContext)! // << the ! is important. We'll always have something at runtime. It coerces useContext so we don't always have to do null checks.

export const SchoolsProvider = ({ children } : { children: React.ReactNode }) => (
  <SchoolsContext.Provider value={ useSchools([]) }>
    { children }
  </SchoolsContext.Provider>
)