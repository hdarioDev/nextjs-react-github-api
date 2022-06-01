import React, { useEffect, useState, useContext } from 'react'
import AppLayout from '@components/Layout'
import User from '@components/User'
import Finder from '@components/Finder'
import NotFoundData from '@components/NotFoundData'
import { getDataApi } from '@services/users'
import { isObjEmpty } from '@utils/isObjempty'
import { SearchContext } from '@context/SearchContext'
import Skeleton from '@components/Skeleton'

const index = () => {

    const [loading, setLoading] = useState(false)

    const { dataSearched, setDataSearched, setEventSearch, eventSearch } = useContext(SearchContext)

    console.log(" page user dataSearched CLEAN", dataSearched);


    useEffect(() => {
        if (eventSearch) {
            const getUser = async () => {
                try {
                    setLoading(true)
                    console.log("A BUSCAR");
                    const data = await getDataApi(dataSearched, 'users')
                    setLoading(false)
                    console.log("data ", data);
                    setDataSearched(data.data)

                } catch (error) {
                    setLoading(false)
                    console.log("Error al traer usuarios");
                }
            }
            getUser()
            setEventSearch(false)
        } else {
            console.log("NO DEBO BUSCAR ");
        }

    }, [eventSearch])


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

export default index