import React, { Component } from 'react'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
                userName :""
        }

    }

    handleChnage() {
        
    }

    render() {
        return (
            <div>
              <form>
                  <input type="text" name="text" onChange={}id="text"/>
              </form>
                
            </div>
        )
    }
}

export default Search;
 