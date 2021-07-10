/* eslint-disable no-use-before-define */
import React, {useState, useEffect } from 'react'
import axios from '../../utils/axiosGovRequest.js'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import LinearIndeterminate from '../Progress/LinearIndeterminate'
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
  }
}))



export default function SearchInput({}) {

  const classes = useStyles()
  
  // Search term
  const [ schoolName, setSchoolName ] = useState("")
  // API search results & Searching status (whether there is pending API request)
  const { schools, load, isSearching, setIsSearching } = useSchoolsContext()
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
          load(results)
        })
      } else {
        load([])
        setIsSearching(false)
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  )

  const searchSchools = (name:string) => {
    const apiKey = process.env.API_KEY
    console.log({apiKey})
    return axios()
      .get("/", {
        params: {
          "api_key": apiKey,
          "school.name": name,
          "per_page": 10,
          _fields: "_fields=school.id,school.name,school.alias,school.city,school.state,school.zip,school.school_url,latest.student.size"
        }
      })
      .then((r) => {
        console.log({r})
        return r.data.results
      })
      .catch((error) => {
        console.error("catch error: ", error)
        console.log("catch error: ", error)
        return []
      })
  }


  return (
    <div className={classes.inputDiv}>
      <Autocomplete
        className={classes.input} 
        id="free-solo-demo"
        freeSolo
        options={schools ? schools.map(option => option["school.name"]) : []}
        renderInput={(params) => (
          <TextField
          onChange={(e) => setSchoolName(e.currentTarget.value)}
          className={ classes.inputTextField } {
            ...params} label="Search School Name" margin="normal" variant="filled" />
        )}
      />
      {isSearching && <LinearIndeterminate />}
    </div>
  )
}


