import React from "react";
import Form from "react-bootstrap/cjs/Form";
import FormLabel from "react-bootstrap/cjs/FormLabel";

class Search extends React.Component {

    state = {
        searchTerm: ''
    };
    onFormSubmit = event => {
        event.preventDefault();

        //TODO add callback

    };
    onInputChange = event => {


        this.setState({searchTerm: event.target.value})
    };

    render() {
        return (
            <div>

                <Form onSubmit={this.onFormSubmit}>
                    <FormLabel>Search </FormLabel>
                    <input type="text"
                           value={this.state.searchTerm}
                           onChange={this.onInputChange}/>
                </Form>
            </div>
        )
    }
}

export default Search;