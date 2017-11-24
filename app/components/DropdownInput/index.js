import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-dropdown'
import { Row, Col } from 'react-flexbox-grid'

import DropdownWrapper from './DropdownWrapper'
import Label from './Label'

import './Dropdown.css'

class DropdownInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: null }

    this.handleSelect = this.handleSelect.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.state.value = nextProps.value
  }

  componentDidMount() {
    this.state.value = this.props.value
  }

  handleSelect(value) {
    this.setState({ value })
    this.props.handleChange(value)
  }

  render() {
    const { placeholder, options, label } = this.props
    const { value } = this.state
    return (
      <DropdownWrapper>
        <Row>
          <Col xs={12}>
            <Label>{label}</Label>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Dropdown
              className="dropdown-input"
              options={options}
              value={value}
              onChange={this.handleSelect}
              placeholder={placeholder}
            />
          </Col>
        </Row>
      </DropdownWrapper>
    )
  }
}

DropdownInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  handleChange: PropTypes.func
}

export default DropdownInput
