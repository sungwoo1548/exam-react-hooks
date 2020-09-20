import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './Header.module.css';

export default function Header() {
  const _mouseOver = (e) => {
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
            <div><input placeholder={"검색창"} /></div>
            <div>
              <span>언어선택</span>
            </div>
            <div>멥버십</div>
            <div className={styles.headerOption_Login}>
              <div>로그인</div>
              <div>무료 회원가입</div>
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
                <span>채널 순위</span>
                <span className={styles.menuItemIcon}>▼</span>
                <span className={styles.menuItemIcon_hover}>▲</span>
              </NavLink>
            </li>
            <li className={styles.menuItemWrapper}>
              <NavLink
                className={styles.menuItem}
                to={{ pathname: "/todayvideos" }}
                activeClassName={styles.menuItem_active}>
                영상 순위
                <span className={styles.menuItemIcon}>▼</span>
                <span className={styles.menuItemIcon_hover}>▲</span>
              </NavLink>
            </li>
            <li className={styles.menuItemWrapper}>
              <NavLink
                className={styles.menuItem}
                to="/post"
                activeClassName={styles.menuItem_active}>
                인사이트
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
