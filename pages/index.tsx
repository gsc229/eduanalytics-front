import styles from '../styles/Home.module.scss'
import BasicLayout from '../layouts/BasicLayout'
import { useSchoolsContext } from '../src/store'


export default function Home() {
 

  const { schools } = useSchoolsContext()
  console.log({schools})

  return (
    <BasicLayout>
      <div className="page-container">
        <pre style={{color: "red"}}>{JSON.stringify({schools}, null, 4)}</pre>
      </div>
    </BasicLayout>
  )
}
