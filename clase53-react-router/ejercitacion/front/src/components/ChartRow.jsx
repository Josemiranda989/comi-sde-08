import React from 'react';


export function ChartRow(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.length}</td>
            <td>{props.rating}</td>
            <td>{props.genre?.name}</td>
            <td>{props.awards}</td>
        </tr>
    )
}


