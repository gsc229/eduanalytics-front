import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import BasicLayout from '../layouts/BasicLayout'
import { useSchoolsContext } from '../src/store'
import SchoolCard from '../components/Search/SchoolCard'
import CircularIndeterminate from '../components/Progress/CircularIndeterminate'
import Grid from '@material-ui/core/Grid'

export default function Home() {

  const { schools, isSearching, loadFromLocalStorage } = useSchoolsContext()
  
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
        <Grid container
        className={styles.school_card_container}>
          {schools?.map((school, idx) => (
            <Grid item key={school.id}>
              <SchoolCard school={school} />
            </Grid>
          ))}
        </Grid>
      }
      {isSearching && <div style={{marginTop: "20%"}}><CircularIndeterminate  /></div> }
      </div>
    </BasicLayout>
  )
}
