import React from 'react'

function TableHelper({columns, tbody}){

	return(
	<div className="" style={{height : "62vh", overflowY : "auto"}}>
		<table className="table tablesorter table-hover" id="">
			<thead className=" text-primary">
				<tr>
					{
						columns.map(column => <th className = "header text-center">{column}</th>)
					}       
				</tr>
			</thead>
			<tbody>
				{tbody}
			</tbody>
		</table>
	</div>

		)
}

export default TableHelper;