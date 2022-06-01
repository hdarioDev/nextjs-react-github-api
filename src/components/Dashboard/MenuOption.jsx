import React from 'react'
import Image from 'next/image'
import { RiUserSearchLine } from 'react-icons/ri'
import { BiCodeBlock } from 'react-icons/bi'
import ImgDataUsers from '../../public/users.jpeg'
import ImgDataRespositories from '../../public/repositories.jpeg'
import Link from 'next/link'

const MenuOption = ({ title, link }) => {

    return (
        <article>
            <Link href={link}>
                <a>
                    {(title == "repositories")
                        ? <><BiCodeBlock size="100" />  <span>Search Repositories</span></>
                        : <><RiUserSearchLine size="100" />  <span>Search Users</span> </>}
                    {/* <Image alt={title} src={image} width={260} height={200} /> */}
                </a>
            </Link>
        </article>
    )
}

export default MenuOption
