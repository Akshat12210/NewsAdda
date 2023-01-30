import React from "react";

const TopNews = ({ data }) => {
    return (
        <>
            <div className="container-fluid border border-primary" >
                <div className="row">
                    <div className="col-3 p-0 ">
                        <div className="col-sm border border-success">
                            <div className="card bg-dark text-primary">
                                <img className="card-img" src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title ">Card title</h5>
                                    <p className="card-text ">This is</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm border border-danger ">
                        <div className="card bg-dark text-primary">
                                <img className="card-img" src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title ">Card title</h5>
                                    <p className="card-text ">This is</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 p-0">
                        <div className="card bg-dark text-white">
                            <img className="card-img" src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="Card image" />
                            <div className="card-img-overlay">
                                <h5 className="card-title text-primary">Card title</h5>
                                <p className="card-text text-primary">This is</p>
                                <p className="card-text text-primary">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 p-0">
                        <div className="col-sm border border-success ">
                            <div className="card bg-dark text-primary">
                                <img className="card-img" src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title ">Card title</h5>
                                    <p className="card-text ">This is</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm border border-danger ">
                        <div className="card bg-dark text-primary">
                                <img className="card-img" src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title ">Card title</h5>
                                    <p className="card-text ">This is</p>
                                    <p className="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopNews;
