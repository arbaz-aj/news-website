import React from 'react';
class NewsCards extends React.Component {

    render () {
        let sources =[]
        sources = this.props.id;
        let newsItems = sources.map((source) =>
                <div key={source.title} className="card w-100 mb-2">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="m-1 w-100 img-fluid"  src={source.urlToImage} alt="No Image"/>
                        </div>
                        <div className="card-body text-left col-md-9">
                            <h5 className="card-title"><a href={source.url} target="_blank">{source.title}</a> </h5>
                           <p>{source.description}</p>
                           <a href={source.url} target="_blank">Go to the channel</a>&nbsp;<small>{source.publishedAt}</small>
                        </div>
                    </div>
                </div> 
            );
        return (
        <div className="container">
            <div className="row">
            {newsItems}
            </div>
        </div>

        )
    }
}

export default NewsCards;