import React, { useState, useEffect, useContext } from 'react'
import AppLayout from '@components/Layout'
import Header from '@components/Layout/Header'
import NotFoundData from '@components/NotFoundData'
import ListRepositories from '@components/ListRepositories'
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
                    const data = await getDataApi(dataSearched, 'repositories')
                    setLoading(false)
                    setDataSearched(data.data.items)

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
            <Header placeholderText='Search repositories' />
            {(loading) ?
                <Skeleton type="repos" /> :
                !isObjEmpty(dataSearched) ? <ListRepositories repositories={dataSearched} /> : <NotFoundData />
            }
        </AppLayout>
    )
}

export default Index