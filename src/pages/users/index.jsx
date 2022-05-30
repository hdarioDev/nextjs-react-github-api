import React, { useEffect, useState } from 'react'
import AppLayout from '@components/Layout'
import User from '@components/User'
import Finder from '@components/Finder'
import NotFoundData from '@components/NotFoundData'
import { getUsersData } from '@services/users'
import { isObjEmpty } from '@utils/isObjempty'

const index = () => {

    const [users, setUsers] = useState({})
    useEffect(() => {
        (async () => {
            try {
                const data = await getUsersData()
                console.log("data ", data);
                setUsers(data.data)
            } catch (error) {
                console.log("Error al traer usuarios");
            }
        })()
    }, [])

    return (
        <AppLayout>

            <Finder />
            {isObjEmpty(users) ? <User user={users} /> : <NotFoundData />}
            {/* {users.map((item) => ( */}

            {/* ))} */}
        </AppLayout>
    )
}

export default index