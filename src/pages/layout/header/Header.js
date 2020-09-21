import React,{useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Text } from '../../../language/Text';

import styles from './Header.module.css';

import LanguageSelector from './language/LanguageSelector';

export default function Header() {
  const [state, setState] = useState("")
  const _mouseOver = (e) => {
    setState("")
  }
  const _mouseOut = (e) => {
  }
  return (
    <header >
      <div id="debug" style={{ backgroundColor: "rgb(155,155,155)" }}>
        <div >현재경로 : {useLocation().pathname}</div>
      </div>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLogo}>
            <NavLink className={styles.headerLogo} to="/">LOGO</NavLink>
          </div>
          <div className={styles.headerOption}>
            <div><input placeholder={Text({ location: "header_menu", word: "검색창" })} /></div>
            <div>
              <LanguageSelector />
            </div>
            <div><Text location="header_menu" word="맴버십"/></div>
            <div className={styles.headerOption_Login}>
              <div><Text location="header_menu" word="로그인" /></div>
              <div><Text location="header_menu" word="무료회원가입"/></div>
              {/* <div>유저 아이콘</div> */}
            </div>
          </div>
        </div>
        <div className={styles.menuContainer}>
          <ul className={styles.menuList}>
            <li onMouseOver={_mouseOver} onMouseOut={_mouseOut} className={styles.menuItemWrapper}>
              <NavLink
                className={styles.menuItem}
                to="/channelranking"
                activeClassName={styles.menuItem_active}>
                <span><Text location="header_menu" word="채널순위"/></span>
                <span className={styles.menuItemIcon}>▼</span>
                <span className={styles.menuItemIcon_hover}>▲</span>
              </NavLink>
            </li>
            <li className={styles.menuItemWrapper}>
              <NavLink
                className={styles.menuItem}
                to={{ pathname: "/todayvideos" }}
                activeClassName={styles.menuItem_active}>
                <Text location="header_menu" word="영상순위"/>
                <span className={styles.menuItemIcon}>▼</span>
                <span className={styles.menuItemIcon_hover}>▲</span>
              </NavLink>
            </li>
            <li className={styles.menuItemWrapper}>
              <NavLink
                className={styles.menuItem}
                to="/post"
                activeClassName={styles.menuItem_active}>
                <Text location="header_menu" word="인사이트"/>
                <span className={styles.menuItemIcon}>▼</span>
                <span className={styles.menuItemIcon_hover}>▲</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
