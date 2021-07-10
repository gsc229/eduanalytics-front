import { bool } from "prop-types";
import * as React from "react"

export interface SchoolSearchResultType {
  "school.id": number
  "school.name": string
  "school.alias": string
  "school.city": string
  "school.state":	string
  "school.zip":	string
  "school.school_url":	string
  "latest.student.size": number
}


export const useSchools = ( initial:SchoolSearchResultType[] ) => {
  const [schools, schoolsSet] = React.useState<SchoolSearchResultType[]>(initial)
  const [isSearching, setIsSearching] = React.useState(false);
  const [currentSchool, currentSchoolSet] = React.useState("")
  const [ drawerOpen, setDrawerOpen  ] = React.useState(false)

  return {
    schools,
    currentSchool, 
    drawerOpen,
    setDrawerOpen,
    currentSchoolSet,
    isSearching,
    setIsSearching,
    load(fetchedSchools: SchoolSearchResultType[]){
      schoolsSet(fetchedSchools)
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