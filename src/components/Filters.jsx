import React from 'react';
import '../App.scss';

class Filters extends React.Component {
    constructor(props){
    super(props);
		this.state = {
			search: ''
      }
    }
      
    //Search function
    setSearch(e) {
      let value = e.target.value
      this.setState({ textSearch: value})
      this.props.filterBy(value);
	  };

    //Function to change the value of input
    emitChange = (e) => {
      this.props.onChange(this.handleSearch());
    };

    render() { 
        return ( 
          <div className="container">
            <section className="filters">
              <div className="filters__search">

                <input type="text" className="filters__search__input" placeholder="Pesquisar"
                data-testid="value-field"
                value={this.state.search}
                onChange={this.setSearch.bind(this)}/>
        
                <button className="filters__search__icon" type="submit">
                  <i className="fa fa-search"/>
                </button>
                </div>
                
                <button className="filters__item" type="submit" 
                data-testid="btn-lp">
                  Linha princípal <i className="fa fa-sort-down"/>
                </button>
          
                <button className="filters__item" type="submit">
                  Linhas secundárias <i className="fa fa-sort-down"/>
                </button>
          
                <button className="filters__item" type="submit">
                  Paradas <i className="fa fa-sort-down"/>
                </button>
          
                <button className="filters__item" type="submit">
                  Previsão de chegada <i className="fa fa-sort-down"/>
                </button>
            </section>
            <ul>

            </ul>
          </div>
         );
    }
}
 
export default Filters;