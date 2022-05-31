import React from 'react'
import Image from 'next/image'
import ImgDataUsers from '../../public/users.jpeg'
import ImgDataRespositories from '../../public/repositories.jpeg'
import Link from 'next/link'

const MenuOption = ({ title, link }) => {
    let image = ImgDataUsers

    if (title == "repositories") {
        image = ImgDataRespositories
    }

    return (
        <article>
            <Link href={link}>
                <a>
                    <Image alt={title} src={image} width={260} height={200} />
                </a>
            </Link>
        </article>
    )
}

export default MenuOption
