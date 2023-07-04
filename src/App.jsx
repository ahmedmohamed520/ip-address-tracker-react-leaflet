import React from "react";
import { styled } from "styled-components";

const App = () => {
    return (
        <Wrapper>
            <div>
                <img src="images/pattern-bg-desktop.png" alt="hero image" className="hero-image" />
                <h1 className="heading-primary">IP Address Tracker</h1>
                <div>
                    <input type="text" placeholder="Search for any IP address or domain" />
                    <div className="arrow">
                        <img src="images/icon-arrow.svg" alt="arrow" />
                    </div>
                    <div>
                        <div>
                            <h3 className="heading-secondary">Ip address</h3>
                            <p className="text">192.212.174.101</p>
                        </div>
                        <div>
                            <h3 className="heading-secondary">Location</h3>
                            <p className="text">Brooklyn, NY 10001</p>
                        </div>
                        <div>
                            <h3 className="heading-secondary">Timezone</h3>
                            <p className="text">UTC -05:00</p>
                        </div>
                        <div>
                            <h3 className="heading-secondary">ISP</h3>
                            <p className="text">SpaceX Starlink</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    .hero-image {
        position: absolute;
        z-index: -2;
    }
`;
export default App;
