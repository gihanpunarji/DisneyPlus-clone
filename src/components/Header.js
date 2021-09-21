import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href="#">
                    <img src="/images/home-icon.svg" alt="" />
                    <span>Home</span>
                </a>
                <a href="#">
                    <img src="/images/search-icon.svg" alt="" />
                    <span>Search</span>
                </a>
                <a href="#">
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WatchList</span>
                </a>
                <a href="#">
                    <img src="/images/original-icon.svg" alt="" />
                    <span>Original</span>
                </a>
                <a href="#">
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>Movies</span>
                </a>
                <a href="#">
                    <img src="/images/series-icon.svg" alt="" />
                    <span>Series</span>
                </a>
                
            </NavMenu>

            <UserImg src="https://lh3.googleusercontent.com/a-/AOh14GgptPDAydxKS7dLk5GDbQSTn1pv-cBkVar_vwAklw=s96-c-rg-br100"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    margin-left: 20px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-transform: uppercase;
        cursor: pointer;
        img {
            height: 20px;
        }
    }

    span {
        font-size: 13px;
        letter-spaceing: 1.42px;
        position: relative;

        &:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            height: 2px;
            background: white;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
            transform: scaleX(0)
        }
    }

    a:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`