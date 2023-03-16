import axios from 'axios'
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { API_URL } from '../api/API'
import breackPoint from '../style/breackPoint.json'
import JobPost from '../components/JobPost'
import Tab from '../components/Tab'
import LoadingView from '../components/LoadingView'

export default function JobsApiCall() {

    const [apiCall, setApiCall] = useState({
        loading: false,
        error: "",
        jobs: []
    })


    useEffect(() => {
        setApiCall(prev => ({ ...prev, loading: true }))
        axios.get(API_URL + "jobs")
            .then(({ data }) => setApiCall(prev => ({ ...prev, jobs: data, loading: true })))
            .catch(({ data }) => setApiCall(prev => ({ ...prev, error: data, loading: true })))

        setApiCall(prev => ({ ...prev, loading: false }))
    }, [])

    const tabs = [
        { label: "Best Matches", component: JobPost, content: apiCall.jobs },
        { label: "Most Resent", component: JobPost, content: apiCall.jobs },
        { label: "Saved Jobs", component: JobPost, content: apiCall.jobs },
    ]



    return (
        <>
            {
                apiCall.loading ?
                    <>
                        {
                            apiCall.error ?
                                <h5>{apiCall.error}</h5>
                                : <>
                                    <Typography sx={{ ["@media " + breackPoint.mainPage.mx]: { fontSize: "18px" } }} padding={2} fontWeight="500" variant='h5' children={"Jobs you might like"} />
                                    <Tab tabsGroup={tabs} />
                                </>
                        }
                    </> : <LoadingView />
            }
        </>
    )
}
