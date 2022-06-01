import React from 'react'
import { RiUserSearchLine } from 'react-icons/ri'
import { BiCodeBlock } from 'react-icons/bi'
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
