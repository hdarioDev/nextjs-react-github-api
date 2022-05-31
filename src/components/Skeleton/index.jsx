import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './Skeleton.module.scss'

const index = () => {
    return (
        <SkeletonTheme baseColor="#2b365e" highlightColor="#1d253f">
            <p className={styles.Skeleton} >
                <Skeleton height={300} />
            </p>
        </SkeletonTheme>


    )
}

export default index