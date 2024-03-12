import React from 'react'
import styles from './headerComponent.module.css'
import Image from 'next/image'
import ChevronDownIcon from '../../../public/assets/chevron-down.svg'
import Link from 'next/link'
import AnimeNavListHover from './components/AnimeNavListHover'
import MangaNavListHover from './components/MangaNavListHover'
import UserSideMenu from './components/UserSideMenu'
import NavListMenu from './components/NavListMenu'
import SearchContainer from './components/SearchContainer'
import NewsNavListHover from './components/NewsNavListHover'

function Header() {

    return (
        <header id={styles.background}>

            <div id={styles.container} className='display_flex_row padding_16px'>

                <div id={styles.menu_and_logo_container} className='display_flex_row align_items_center'>

                    {/* MENU NAVIGATION -- SCREEN LEFT SIDE -- MOBILE*/}
                    <NavListMenu />

                    <Link href="/" id={styles.img_container}>
                        <Image id={styles.logo} src={'/logo.png'} alt='AniProject Website Logo' fill sizes='100%' />
                    </Link>
                </div>

                <div id={styles.navbar_container} className={`align_items_center`}>
                    <ul className='display_grid'>

                        <li className='display_flex_row align_items_center'>
                            Animes <ChevronDownIcon alt="Open Animes List" width={16} height={16} />

                            <AnimeNavListHover />

                        </li>

                        <li className='display_flex_row align_items_center'>
                            Mangas <ChevronDownIcon alt="Open Mangas List" width={16} height={16} />

                            <MangaNavListHover />
                        </li>
                        <li className='display_flex_row align_items_center'>
                            <Link href={'/news'}>News <ChevronDownIcon alt="Open News List" width={16} height={16} /></Link>

                            <NewsNavListHover />
                        </li>
                    </ul>
                </div>

                <div id={styles.user_and_search_container} className='display_flex_row align_items_center gap_16px'>

                    {/* SEARCH MOBILE AND DESKTOP, SEARCH RESULTS CONTAINER INSIDE*/}
                    <SearchContainer />

                    {/* USER MENU -- RIGHT SIDE OF SCREEN */}
                    <UserSideMenu />

                </div>
            </div>
        </header >
    )
}

export default Header