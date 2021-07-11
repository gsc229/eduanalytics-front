import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import BasicLayout from '../layouts/BasicLayout'
import { useSchoolsContext } from '../src/store'
import SchoolCard from '../components/Search/SchoolCard'
import CircularIndeterminate from '../components/Progress/CircularIndeterminate'

export default function Home() {

  const { schools, isSearching, currentSchoolSet, loadFromLocalStorage } = useSchoolsContext()
  
  useEffect(() => {

    

    const lsSchools = localStorage.getItem("schools")

    if(lsSchools){
      return loadFromLocalStorage(JSON.parse(lsSchools))
    }

    return loadFromLocalStorage([])
  }, [])

  return (
    <BasicLayout>
      <div className="page-container">
      {!isSearching &&
        <div
        className={styles.school_card_container}>
          {schools?.map((school, idx) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      }
      {isSearching && <div style={{marginTop: "20%"}}><CircularIndeterminate  /></div> }
      </div>
    </BasicLayout>
  )
}
