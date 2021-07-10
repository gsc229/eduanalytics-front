import styles from '../styles/Home.module.scss'
import axiosRequest from '../utils/axiosRequest'
import BasicLayout from '../layouts/BasicLayout'
import Container from '@material-ui/core/Container'
import { useSchoolsContext, SchoolSearchResultType } from '../src/store'

export async function getServerSideProps() {

  let schoolsData:SchoolSearchResultType[] = []

  const resposne = await axiosRequest().get("/", {
    params: {
      "school.state": "Tx",
      "per_page": 1,
      _fields: "school.name,school.degrees_awarded,school.faculty_salary,latest.admissions.admission_rate,shcool.size"
    }
  })
  
  schoolsData = resposne.data.results

  return {
    props: {
      schoolsData
    }, // will be passed to the page component as props
  }
}


export default function Home({ schoolsData }:{ schoolsData:SchoolSearchResultType[] }) {
 

  const { load, schools } = useSchoolsContext()

  load(schoolsData)

  return (
    <BasicLayout>
      <div className="page-container">
        <pre>{JSON.stringify({schools}, null, 4)}</pre>
      </div>
    </BasicLayout>
  )
}
