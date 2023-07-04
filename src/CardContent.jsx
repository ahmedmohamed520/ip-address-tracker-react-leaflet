import React from "react";

const CardContent = ({ userInfo }) => {
    return (
        <div className="card">
            <div className="card-item">
                <h3 className="heading-secondary">Ip address</h3>
                <p className="text">{userInfo?.ip}</p>
            </div>
            <div className="card-item">
                <h3 className="heading-secondary">Location</h3>
                <p className="text">{userInfo?.location?.region || userInfo?.location?.city}</p>
            </div>
            <div className="card-item">
                <h3 className="heading-secondary">Timezone</h3>
                <p className="text">{userInfo?.location?.timezone}</p>
            </div>
            <div className="card-item">
                <h3 className="heading-secondary">ISP</h3>
                <p className="text">{userInfo?.isp}</p>
            </div>
        </div>
    );
};

export default CardContent;
