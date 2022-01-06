import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href="#">
                    <img src="/images/home-icon.svg" />
                    <span>Home</span>
                </a>
                <a href="#">
                    <img src="/images/search-icon.svg" />
                    <span>search</span>
                </a>
                <a href="#">
                    <img src="/images/watchlist-icon.svg" />
                    <span>Watchlist</span>
                </a>
                <a href="#">
                    <img src="/images/original-icon.svg" />
                    <span>originals</span>
                </a>
                <a href="#">
                    <img src="/images/movie-icon.svg" />
                    <span>movies</span>
                </a>
                <a href="#">
                    <img src="/images/series-icon.svg" />
                    <span>series</span>
                </a>
            </NavMenu>
            <UserImg src="/images/user.jpg" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0px 36px;
`

const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`

    display:flex;
    align-items: center;
    flex: 1;
    margin-left: 20px;

    a {
        display: flex;
        align-items: center;
        padding: 0 10px;
        color: #FFF;
        text-decoration: none;
        text-transform: uppercase;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: #FFF;
                position: absolute;
                left:0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);

            }
        }

        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }

    }
`


const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`