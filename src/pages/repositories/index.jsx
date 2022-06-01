import React, { useState, useEffect, useContext } from 'react'
import AppLayout from '@components/Layout'
import User from '@components/User'
import Finder from '@components/Finder'
import NotFoundData from '@components/NotFoundData'
import ListRepositories from '@components/ListRepositories'
import { getUsersData } from '@services/users'
import { isObjEmpty } from '@utils/isObjempty'
import { SearchContext } from '@context/SearchContext'
import Skeleton from '@components/Skeleton'

const index = () => {

    const [loading, setLoading] = useState(false)

    const { userSearched, setUserSearched, setEventSearch, eventSearch } = useContext(SearchContext)
    console.log(" page repo repos ", userSearched);

    useEffect(() => {
        if (eventSearch) {
            const getUser = async () => {
                try {
                    setLoading(true)
                    console.log("A BUSCAR");
                    const data = await getUsersData('repositories')
                    setLoading(false)
                    console.log("data repo ", data);
                    setUserSearched(data.data.items)

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
                !isObjEmpty(userSearched) ? <ListRepositories repositories={userSearched} /> : <NotFoundData />
            }
        </AppLayout>
    )
}

export default index