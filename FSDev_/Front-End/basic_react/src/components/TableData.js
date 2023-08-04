import React from 'react'

const TableData = (props) => {
    const {profile} = props;
    const {id, name, hobby} = profile;
  return (
    <>
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{hobby}</td>
        </tr>
    </>
  )
}

export default TableData;