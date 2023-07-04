import React, { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import CardContent from "./CardContent";
import Map from "./Map";

const key = import.meta.env.VITE_GEO_KEY;
const App = () => {
    const [currentUserIp, setCurrentUserIp] = useState(0);
    const [userInfo, setUserInfo] = useState({});

    let position = [userInfo?.location?.lat, userInfo?.location?.lng];

    const getCurrentUserIp = async () => {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        setCurrentUserIp(data.ip);
    };
    const getIPInfo = useCallback(async () => {
        const res = await fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${currentUserIp}`
        );
        const data = await res.json();
        setUserInfo(data);
    }, [currentUserIp]);

    useEffect(() => {
        getCurrentUserIp();
        getIPInfo();
    }, []);

    return (
        <Wrapper>
            <img src="images/pattern-bg-desktop.png" alt="hero image" className="hero-image desktop" />
            <img src="images/pattern-bg-mobile.png" alt="hero image" className="hero-image mobile" />

            <div className="map-container"></div>
            {position[0] && <Map position={position} />}

            <div className="container">
                <h1 className="heading-primary">IP Address Tracker</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        getIPInfo();
                    }}
                    className="input-group"
                >
                    <input
                        type="text"
                        value={currentUserIp}
                        onChange={(e) => {
                            setCurrentUserIp(e.target.value);
                        }}
                        placeholder="Search for any IP address or domain"
                    />
                    <button type="submit" className="arrow">
                        <img src="images/icon-arrow.svg" alt="arrow" />
                    </button>
                </form>
                {userInfo && <CardContent userInfo={userInfo} />}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    .hero-image {
        width: 100%;
        height: 40vh;
        display: block;
    }

    .map {
        width: 100%;
        height: 700px;
    }
    .input-group {
        display: flex;
        align-items: center;
        height: 3rem;
        margin-bottom: 2rem;
        border-radius: 10px;
        width: 30rem;
    }
    .arrow {
        background-color: #000;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border-radius: 0 10px 10px 0;
        transition: 0.2s all;
        cursor: pointer;
        border: none;
    }
    .arrow:hover {
        background-color: var(--clr-gray-2);
    }
    .arrow:focus {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
    .input-group input {
        height: 100%;
        width: 100%;
        padding: 1rem;
        border-radius: 10px 0 0 10px;
        border: none;
    }
    .input-group input:focus {
        outline: none;
        box-shadow: 0 0 10px hsl(0, 0%, 59%);
    }
    .card {
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px hsl(0, 0%, 59%, 0.5);
        background-color: #fff;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
    }
    .card-item {
        padding-right: 5rem;
        user-select: none;
    }
    .card-item:not(:last-of-type) {
        border-right: 1px solid var(--clr-gray-1);
    }

    .mobile {
        display: none;
    }

    @media only screen and (max-width: 1200px) {
        .card-item {
            padding-right: 3rem;
        }
    }
    @media only screen and (max-width: 900px) {
        .card-item {
            padding-right: 2rem;
        }
    }
    @media only screen and (max-width: 704px) {
        .hero-image {
            height: 55vh;
            display: block;
        }
        .input-group {
            width: 100%;
        }
        .card {
            grid-template-columns: 1fr;
            width: 100%;
        }
        .card-item {
            text-align: center;
            padding: 0;
        }
        .card-item:not(:last-of-type) {
            border-right: none;
        }
        .desktop {
            display: none;
        }
        .mobile {
            display: block;
        }
    }
`;
export default App;
