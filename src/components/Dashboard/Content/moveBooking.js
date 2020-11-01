export const moveBooking = (
	source,
	destination,
	droppableSource,
	droppableDestination,
	updatedStatus
) => {
	const sourceClone = Array.from(source);
	const destClone = Array.from(destination);
	let [removed] = sourceClone.splice(droppableSource.index, 1);
	if (updatedStatus) {
		removed.content.status = updatedStatus;
	}
	destClone.splice(droppableDestination.index, 0, removed);
	const result = {};
	result[droppableSource.droppableId] = sourceClone;
	result[droppableDestination.droppableId] = destClone;
	return result;
};
