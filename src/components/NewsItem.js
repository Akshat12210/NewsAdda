import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'
const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source}) => {

    const theme = useContext(ThemeContext);
    const mode = theme.mode;
    return (
        <div className="my-3">
            <div className={`card text-${mode === 'light' ? 'dark' : 'light'}  bg-${mode} border-${mode === 'light' ? 'dark' : 'light'}`}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
                    {source}
                </span>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className={`text-${mode === 'light' ? 'muted' : 'white'}`}>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem