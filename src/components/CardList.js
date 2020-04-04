import React from 'react';
import Card from './Card'

const CardList = ({ Robots }) => {
	return(
		<div>
		{
			Robots.map((user, index) => {
				return (
				<Card 
					key={Robots[index].id}
					id={Robots[index].id}
					name={Robots[index].name} 
					email={Robots[index].email}
				/>
			);
			})
		}
	</div> 
	);
} 

export default CardList;