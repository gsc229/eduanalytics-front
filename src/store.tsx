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
  const nomralizedSchools = schools.map((school:any) => {
      const normalizedSchool = { id: null, school: null, program_percentage: null, race_ethnicity: null, size: null }
      normalizedSchool.id = school.id
      normalizedSchool.school = school.school
      normalizedSchool.program_percentage = school.latest.academics.program_percentage
      normalizedSchool.race_ethnicity = school.latest.student.demographics.race_ethnicity,
      normalizedSchool.size = school.latest.student.size
      return normalizedSchool
  })

  localStorage.setItem("schools", JSON.stringify(nomralizedSchools))

  return nomralizedSchools
}

const getLSCurrentSchool = () => {
  if(typeof window !== "undefined"){
    const lsSchool = localStorage.getItem("currentSchool")
    if(lsSchool){
      return JSON.parse(lsSchool)
    }
  }

  return undefined
}





export const useSchools = ( initial:SchoolDataType[] ) => {

  const [schools, schoolsSet] = React.useState<SchoolDataType[]>(initial)
  const [isSearching, setIsSearching] = React.useState(false)
  const [onSearchPage, setOnSearchPage] = React.useState(true)
  const [currentSchool, setCurrentSchool] = React.useState<SchoolDataType | undefined>(getLSCurrentSchool)
  const [ drawerOpen, setDrawerOpen  ] = React.useState(false)
  const [ componentRef, setComponentRef] = React.useState<React.MutableRefObject<null>>()

  return {
    schools,
    schoolsSet,
    currentSchool, 
    setCurrentSchool,
    componentRef,
    setComponentRef,
    drawerOpen,
    setDrawerOpen,
    onSearchPage,
    setOnSearchPage,
    isSearching,
    setIsSearching,
    currentSchoolSet(school:any){
      localStorage.setItem("currentSchool", JSON.stringify(school))
      setCurrentSchool(school)
    },
    loadNewData(fetchedSchools: SchoolDataType[]){
      schoolsSet(normalizeData(fetchedSchools))
    },
    loadFromLocalStorage(schoolData:SchoolDataType[]){
      schoolsSet(schoolData)
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