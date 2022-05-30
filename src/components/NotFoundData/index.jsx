import React from 'react'
import Image from 'next/image'
import ImgData from '../../public/image-no-data.png'
import styles from './NotFoundData.module.scss'

const index = () => {
    return (
        <section className={styles.NotFound}>
            <Image alt="Not found data" src={ImgData} width={200} height={200} />
        </section>
    )
}

export default index