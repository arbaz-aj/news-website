import React from 'react';
import NewsCards from './NewsCards';
import axios from 'axios';

class SourcesDropdown extends React.Component {
    constructor() {
        super();
        this.state = {
           news:'',
           flag:false,
           selectedChannel: "Select News Channel"
        }
    }

    onSelectChannel(source,name){
        axios.get(`http://localhost:8000/news/`+source  ).then(res=>{
                this.setState({
                news: (res.data.articles),
                flag: true,
                selectedChannel: name
            })        
        })
    }
    render () {
        
        let sources = this.props.sources.sources||[];
        let card = ''
        let optionItems = sources.map((source) =>
                <button className="dropdown-item" onClick={() => this.onSelectChannel(source.id,source.name)} key={source.id} type="button">{source.name}</button>
            );
         if(this.state.flag){
             card = <NewsCards id={this.state.news}/>
         }
        return (
         <div className="dropdown">
         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           {this.state.selectedChannel}
         </button>
         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           {optionItems}
         </div>
         
         {card}
       </div>
        )
    }
}

export default SourcesDropdown;