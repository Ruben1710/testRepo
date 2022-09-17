import React from 'react'
import PropTypes from 'prop-types';

const MySelect = ({options, title, value, onChange}) => {
  return (
    <select 
    value={value}
    onChange={e => onChange(e.target.value)}    
    >
        <option selected>{title}</option>
        {options.map(option => 
            <option value={option.value} key={option.value}>
                {option.name}
            </option>
            )}
    </select>
  )
}

MySelect.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  value: PropTypes.string
}

MySelect.defaultProps = {
  options: [{name: 'option', value: 'option'}],
  title: 'Select',
  value: 'Select'
}

export default MySelect