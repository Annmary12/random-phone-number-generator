// react library
import React, { Component } from 'react';

// components
import Table from '../Table';
import Form from '../Form';

// utils
import { maxGeneratedNumber, minGeneratedNumber, sortByAscending, sortByDescending } from '../../utils/actions';

// style
import './GenerateNumber.scss';

class GenerateNumber extends Component{
  constructor(props){
    super(props);
    this.state = {
      generatedNumber: [],
      maxNumber: '',
      minNumber:''
    }
  }

  /**
   * Gets generated numbers and sets the state
   *
   * @param {Array} generateNumber
   *
   * @returns {void}
   */
  getGeneratedNumbers = (generatedNumber) => {
    const maxNumber = maxGeneratedNumber(generatedNumber);
    const minNumber = minGeneratedNumber(generatedNumber);

    this.setState({
      generatedNumber,
      maxNumber,
      minNumber
    })
  }

  /**
   * Sorts numbers in ascending or descending order
   *
   * @param {event} event
   *
   * @returns {void}
   */
  sortNumbers = (event) => {
    let sortNumbers;

    if (event.target.value === 'ascending') {
      sortNumbers = sortByAscending(this.state.generatedNumber);
      this.setState({
        generateNumber: sortNumbers
      });
    } else if(event.target.value === 'descending') {
      sortNumbers = sortByDescending(this.state.generatedNumber);
      console.log('descending')
      this.setState({
        generateNumber: sortNumbers
      })
    }
  }


  render() {
    const { generatedNumber, maxNumber, minNumber } = this.state;
    return (
      <div className="section">
      <Form getGeneratedNumbers={this.getGeneratedNumbers}/>
      { generatedNumber.length > 0 &&
        <Table
          generatedNumbers={ generatedNumber }
          maxNumber={ maxNumber }
          minNumber={ minNumber }
          onChange={this.sortNumbers}
        />
      }
    </div>
    )
  }
}

export default GenerateNumber;
