import styles from '../styles/Home.module.scss'
import BasicLayout from '../layouts/BasicLayout'
import { useSchoolsContext } from '../src/store'
import SchoolCard from '../components/Search/SchoolCard'

export default function Home() {

  const { schools } = useSchoolsContext()
  console.log({schools})

  return (
    <BasicLayout>
      <div className="page-container">
        <div
        className={styles.school_card_container}>
          {schools?.map(school => (
            <SchoolCard key={school['school.id']} school={school} />
          ))}
        </div>
      </div>
    </BasicLayout>
  )
}
