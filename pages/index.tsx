import styles from '../styles/Home.module.scss'
import BasicLayout from '../layouts/BasicLayout'
import { useSchoolsContext } from '../src/store'
import SchoolCard from '../components/Search/SchoolCard'
import CircularIndeterminate from '../components/Progress/CircularIndeterminate'

export default function Home() {

  const { schools, isSearching } = useSchoolsContext()
  

  return (
    <BasicLayout>
      <div className="page-container">
      {!isSearching &&
        <div
        className={styles.school_card_container}>
          {schools?.map((school, idx) => {
            return <SchoolCard key={school.id} school={school} />
          })}
        </div>
      }
      {isSearching && <CircularIndeterminate /> }
      </div>
    </BasicLayout>
  )
}
