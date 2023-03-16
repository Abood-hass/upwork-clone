import React, { useEffect, useState } from 'react'
import Layout from '../../layout/SearchLayout'
import SearchBar from '../../components/MainViewSearchBar'
import JobPost from '../../components/JobPost'
import LoadingView from '../../components/LoadingView'
import FilterBody from '../../components/SearchFilters'
import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { searchJobsAPI, getAllJobsAPI } from "../../redux/slice";
import { Filters } from './filtersData'
import { useNavigate } from 'react-router-dom'
import routes from '../../routes/pagesRoutes.json'

export default function Index() {
    const [searchWord, setSearchWord] = useState("")
    const [FiltersValues, setFilterValues] = useState([])
    const nav = useNavigate()

    const dispatch = useDispatch()

    const { jobs, isLoading } = useSelector(state => state.data)


    function onChangeOpiton({ target }) {
        setFilterValues((prev) =>
            prev.map((filter) =>
            ({
                ...filter,
                options: filter.options.map((f) =>
                    (f.label === target.name) ?
                        ((f.checked) ?
                            ({ ...f, checked: false }) :
                            { ...f, checked: true }) : (f)
                )
            })
            ))
    }

    useEffect(() => {
        setFilterValues(Filters)
        dispatch(getAllJobsAPI())
        console.log(jobs)

    }, [])

    useEffect(() => {
    }, [FiltersValues])





    function onSearch() {
        dispatch(searchJobsAPI(searchWord))
    }

    function changeSearchWord({ target: { value } }) {
        setSearchWord(value)
    }


    return (
        <Layout
            filterSide={<>
                <Typography mb={3} variant='h5' >Filter By</Typography>

                <Box>
                    {Filters?.map((filter, index) =>
                        <FilterBody onChange={onChangeOpiton} {...filter} key={index} />
                    )}
                </Box>
            </>}

            resultSide={<>
                <SearchBar value={searchWord} onChange={changeSearchWord} onClick={onSearch} hideKeyWords />
                <Box display={"flex"}>
                    {FiltersValues.map(filter =>
                        filter.options.map(({ label, checked }, index) =>
                            checked ? <Typography variant='body2' key={index}>{label + " ,"}</Typography> : <></>))}
                </Box>
                <Box>
                    {
                        jobs ?
                            (!isLoading ?
                                jobs?.map((job, index) => <JobPost onClick={() => nav("../" + routes.jobDeatils + "/" + job.id)} {...job} key={index} />)
                                : <LoadingView />)
                            : (<>Search</>)
                    }
                </Box>
            </>}
        />
    )
}

