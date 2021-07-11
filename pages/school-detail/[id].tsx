import React, { useEffect } from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import PageContent from '../../components/SchoolDetail/PageContent'
import { useSchoolsContext } from '../../src/store'
import router from 'next/router'


 const SchoolDetail = () => {

  const { currentSchool, setIsSearching, setOnSearchPage } = useSchoolsContext()


  useEffect(() => {
    setIsSearching(false)
    setOnSearchPage(false)
    if(!currentSchool) router.push("/")
  }, [])



  return (
    <BasicLayout>
     {currentSchool && <PageContent />}
    </BasicLayout>
  )
}

export default SchoolDetail

