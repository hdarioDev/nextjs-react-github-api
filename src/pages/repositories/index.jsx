import React, { useState, useEffect, useContext } from 'react'
import AppLayout from '@components/Layout'
import Finder from '@components/Finder'
import NotFoundData from '@components/NotFoundData'
import ListRepositories from '@components/ListRepositories'
import { getDataApi } from '@services/users'
import { isObjEmpty } from '@utils/isObjempty'
import { SearchContext } from '@context/SearchContext'
import Skeleton from '@components/Skeleton'

const index = () => {

    const [loading, setLoading] = useState(false)

    const { dataSearched, setDataSearched, setEventSearch, eventSearch } = useContext(SearchContext)

    useEffect(() => {
        if (eventSearch) {
            const getUser = async () => {
                try {
                    setLoading(true)
                    console.log("A BUSCAR");
                    const data = await getDataApi(dataSearched, 'repositories')
                    setLoading(false)
                    console.log("data repo ", data);
                    setDataSearched(data.data.items)

                } catch (error) {
                    setLoading(false)
                    console.log("Error al traer repos");
                }
            }
            getUser()
            setEventSearch(false)
        } else {
            console.log("NO DEBO BUSCAR repos ");
        }

    }, [eventSearch])

    return (
        <AppLayout>
            <Finder placeholderText='Search repositories' />
            {(loading) ?
                <Skeleton type="repos" /> :
                !isObjEmpty(dataSearched) ? <ListRepositories repositories={dataSearched} /> : <NotFoundData />
            }
        </AppLayout>
    )
}

export default index