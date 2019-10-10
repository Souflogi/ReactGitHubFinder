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
                  <input placeholder="" type="text" name="text" value= {this.state.userName} onChange={}id="text"/>
              </form>
                
            </div>
        )
    }
}

export default Search;
 