import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './Skeleton.module.scss'

const index = ({ type = 'users' }) => {
    let size = 400
    let count = 1
    if (type === 'repos') {
        size = 150
        count = 5
    }
    console.log("size ", size);
    return (
        <SkeletonTheme baseColor="#2b365e" highlightColor="#1d253f">
            <p className={styles.Skeleton} >
                <Skeleton className={styles.marginSk} count={count} height={size} />
            </p>
        </SkeletonTheme>


    )
}

export default index