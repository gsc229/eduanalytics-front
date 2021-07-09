import * as React from "react"

export interface SchoolType {
  id: number
  name: string
  alias: string
  city: string
  state:	string
  zip:	string
  school_url:	string
  size: number
}

const initialState = {
    id: 0,
    name: "",
    alias: "",
    city: "",
    state: "",
    zip: "",
    school_url: "",
    size: 0
}


export const useSchools = ( initial:SchoolType[] ) => {
  const [schools, schoolsSet] = React.useState<SchoolType[]>(initial)
  const [currentSchool, currentSchoolSet] = React.useState("")

  return {
    schools,
    currentSchool, 
    currentSchoolSet,
    load(fetchedSchools: SchoolType[]){
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