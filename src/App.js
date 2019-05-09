import React, { Component } from 'react';
import { save } from 'save-file'
import axios from 'axios';
import pdf from './pdf';


class App extends Component {

    decode = async () => {      
       
        const response = await axios.get('http://localhost:4000/file');
        const file = response.data.file;
        const name = response.data.fileName;
        
        await save(file, name)
    }




    render() {
        return (
            <>
                <button onClick={this.decode}>Baixar PDF</button>
            </>
        )
    }
}

export default App;