import React, { useEffect, useState, useContext } from 'react'
import AppLayout from '@components/Layout'
import User from '@components/User'
import Finder from '@components/Finder'
import NotFoundData from '@components/NotFoundData'
import { getDataApi } from '@services/users'
import { isObjEmpty } from '@utils/isObjempty'
import { SearchContext } from '@context/SearchContext'
import Skeleton from '@components/Skeleton'

const Index = () => {

    const [loading, setLoading] = useState(false)

    const { dataSearched, setDataSearched, setEventSearch, eventSearch } = useContext(SearchContext)

    useEffect(() => {
        if (eventSearch) {
            const getUser = async () => {
                try {
                    setLoading(true)
                    const data = await getDataApi(dataSearched, 'users')
                    setLoading(false)
                    setDataSearched(data.data)

                } catch (error) {
                    setLoading(false)
                }
            }
            getUser()
            setEventSearch(false)
        }
    }, [eventSearch])// eslint-disable-line react-hooks/exhaustive-deps


    return (

        <AppLayout>
            <Finder />
            {(loading) ?
                <Skeleton /> :
                !isObjEmpty(dataSearched) ? <User user={dataSearched} /> : <NotFoundData />
            }
        </AppLayout>

    )
}

export default Index