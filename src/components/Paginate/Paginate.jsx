import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import { ReactComponent as KeyboardArrowRight } from 'icons/keyboard_arrow_right.svg';
import { ReactComponent as KeyboardArrowLeft } from 'icons/keyboard_arrow_left.svg';

import './Paginate.scss';

class Paginate extends Component {
  static propTypes = {
    previousLabel: PropTypes.string,
    nextLabel: PropTypes.string,
    items: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    rowsPerPageDefault: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    rowsPerPageOptions: PropTypes.oneOfType([PropTypes.array]).isRequired,
  };

  static defaultProps = {
    previousLabel: 'Prev',
    nextLabel: 'Next',
  };

  state = {
    currentPage: 1,
    selectCurrentValue: '',
  };

  componentDidMount = () => {
    const { rowsPerPageDefault } = this.props;
    this.setState({ selectCurrentValue: rowsPerPageDefault });
  };

  onClickPrev = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }));
  };

  onClickNext = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
  };

  onChangeInput = (e) => {
    const currentPage = parseFloat(e.target.value);
    this.setState({ currentPage });
  };

  onChangeSelect = (e) => {
    const selectCurrentValue = parseFloat(e.target.value);
    this.setState({ selectCurrentValue, currentPage: 1 });
  };

  render() {
    const { currentPage, selectCurrentValue } = this.state;
    const { items, nextLabel, previousLabel, rowsPerPageOptions } = this.props;

    const totalPages =
      selectCurrentValue &&
      Math.ceil(items.length / parseFloat(selectCurrentValue));

    const selectOptions = rowsPerPageOptions.map((item) => (
      <option key={item} value={item}>{`${item} rows`}</option>
    ));

    // Logic for display data
    const indexOfLastItem = currentPage * selectCurrentValue;
    const indexOfFirstItem = indexOfLastItem - selectCurrentValue;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const itemsList = currentItems.map((item, index) => (
      <div key={index}>{item}</div>
    ));

    return (
      <div className="ui-library paginate-wrapper">
        {/** Section to render data */}
        <div>{itemsList}</div>
        {/** Pagination section */}
        <div className="paginate-section">
          <Button
            className="btn-primary button prev"
            onClick={this.onClickPrev}
            disabled={currentPage === 1}
          >
            <KeyboardArrowLeft className="arrow-icon" />
            {previousLabel}
          </Button>
          <span className="static-text">Page</span>
          <input
            type="number"
            className="input"
            value={currentPage}
            max={totalPages}
            min={1}
            onChange={this.onChangeInput}
          />
          <span className="static-text">{`of ${totalPages}`}</span>
          <span className="select-container">
            <select
              value={selectCurrentValue}
              className="select"
              onChange={this.onChangeSelect}
            >
              {selectOptions}
            </select>
          </span>
          <Button
            className="btn-primary button next"
            onClick={this.onClickNext}
            disabled={currentPage === totalPages}
          >
            {nextLabel}
            <KeyboardArrowRight className="arrow-icon" />
          </Button>
        </div>
      </div>
    );
  }
}

export default Paginate;
