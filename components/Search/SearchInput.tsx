/* eslint-disable no-use-before-define */
import React, { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import axios from '../../utils/axiosGovRequest.js'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import LinearIndeterminate from '../Progress/LinearIndeterminate'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { useSchoolsContext } from '../../src/store'
import { useDebounce } from './useDebounce'

const useStyles = makeStyles(theme => ({
  inputTextField: {
    margin: 0
  },
  input: {
    borderRadius: "5px",
    backgroundColor: 'white'
  },
  inputDiv: {
    borderRadius: "2px",
    padding: 0,
    backgroundColor: 'white',
    width: "95%",
    margin: "auto"
  },
  backArrow: {
    color: theme.palette.secondary.main,
    margin: theme.spacing(1)
  },
  backButon: {
    color: "white"
  }
}))

export default function SearchInput({}) {
  const router = useRouter()
  const classes = useStyles()
  
  // Search term
  const [ schoolName, setSchoolName ] = useState("")
  // API search results & Searching status (whether there is pending API request)
  const { schools, loadNewData, isSearching, setIsSearching, onSearchPage, setOnSearchPage, currentSchool } = useSchoolsContext()
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(schoolName, 500)

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        searchSchools(debouncedSearchTerm).then((results) => {
          setIsSearching(false)
          loadNewData(results)
        })
      } else {
        setIsSearching(false)
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  )
  
  const school_fields = "id,school.name,school.alias,school.city,school.state,school.zip,school.school_url,latest.student.size,"
  const latest_fields = "latest.student.size,latest.student.demographics.race_ethnicity,latest.academics.program_percentage"
  

  const searchSchools = (name:string) => {
    const apiKey = process.env.API_KEY
    return axios()
      .get("/", {
        params: {
          api_key: apiKey,
          "school.name": name,
          per_page: 10,
          keys_nested: true,
          _fields: school_fields + latest_fields
        }
      })
      .then((r) => {
        return r.data.results
      })
      .catch((error) => {
        console.error("catch error: ", error)
        return []
      })
  }

  const handleBackToSearch = () => {
    setOnSearchPage(true)
    router.push("/")
  }

  return (
    <Fragment>
      {onSearchPage &&
        <div className={classes.inputDiv}>
          <Autocomplete
            onInputChange={(e, value) => setSchoolName(value)}
            className={classes.input} 
            id="free-solo-demo"
            freeSolo
            autoSelect
            options={schools ? schools.map(option => option.school.name) : []}
            renderInput={(params) => (
              <TextField
              className={ classes.inputTextField } {
                ...params} label="Search School Name" margin="normal" variant="filled" />
            )}
          />
          {isSearching && <LinearIndeterminate />}
        </div>
      }
     {!onSearchPage &&
        <Button 
        onClick={handleBackToSearch}
        className={classes.backButon} >
          <ArrowBackIcon className={classes.backArrow} />
          Back To Search
        </Button>
      }
    </Fragment>
  )
}


