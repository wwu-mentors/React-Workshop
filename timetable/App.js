import React from 'react';
import View from './View';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      courses: require('./Courses.js'),
      term1: '',
      dept1: '',
      term2: '',
      dept2: '',
      search: false
    };
  }

  render() {
    return (
      <div>
        <h1>TimeTable</h1>
        <h3>Western Washington University</h3>
        <Form inline> 
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Term</ControlLabel>{' '}
            <FormControl componentClass="select" placeholder="" onChange={ (e) => this.setState({ term1: e.target.value })}>
              <option>select</option>
              <option>Fall 2018</option>
              <option>Winter 2019</option>
              <option>Spring 2019</option>
              <option>Fall 2019</option>
            </FormControl>{' '}
            <ControlLabel>Dept</ControlLabel>{' '}
            <FormControl componentClass="select" placeholder="" onChange={ (e) => this.setState({ dept1: e.target.value })}>
              <option>select</option>
              <option>Computer Science</option>
              <option>English</option>
            </FormControl>{' '}
          </FormGroup>
          <Button type="button" onClick={ () => {
                                                 this.setState({ search: true}); 
                                                 this.setState({ term2: this.state.term1});
                                                 this.setState({ dept2: this.state.dept1});
                                                 }}>Search</Button>
        </Form>
        {this.state.search && <View 
          courses={this.state.courses}
          view={this.state.view}
          term={this.state.term2}
          dept={this.state.dept2}
          />}
      </div>
    );
  }
}

export default App;

//         <Course courses={this.state.courses}/>
// save local copy of state and update on button click