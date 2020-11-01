export const onDragEnd = (
	result,
	setOpenModal,
	isModalOpen,
	setDroppableItem,
	reorder,
	getList,
	setList,
	move,
	list,
	history
) => {
	const { source, destination } = result;
	const IN_RENTAL = "inRental";
	const UPCOMING = "upcomingRentals";
	const IN_STOCK = "inStock";
	let droppableBookingStatus = getList(source.droppableId)[source.index].content
		.status
		? getList(source.droppableId)[source.index].content.status.value
		: "";
	if (
		!destination ||
		(source.droppableId === IN_RENTAL && destination.droppableId === UPCOMING)
	) {
		return;
	} else if (source.droppableId === destination.droppableId) {
		const items = reorder(
			getList(source.droppableId),
			source.index,
			destination.index
		);
		setList({ [source.droppableId]: items });
	} else if (
		source.droppableId === IN_STOCK &&
		source.droppableId !== destination.droppableId
	) {
		if (droppableBookingStatus !== "ready") return;
		else {
			let droppableBookingId = getList(source.droppableId)[source.index].id;
			setDroppableItem({
				source: { index: source.index, droppableId: source.droppableId },
				destination: {
					index: destination.index,
					droppableId: destination.droppableId,
				},
			});
			history.push(`/dashboard/edit-booking/${droppableBookingId}`);
		}
	} else if (
		destination.droppableId === IN_STOCK &&
		source.droppableId !== destination.droppableId
	) {
		setOpenModal(!isModalOpen);
		setDroppableItem({
			source: { index: source.index, droppableId: source.droppableId },
			destination: {
				index: destination.index,
				droppableId: destination.droppableId,
			},
		});
	} else {
		const result = move(
			getList(source.droppableId),
			getList(destination.droppableId),
			source,
			destination
		);
		setList(result);
	}
};
export default onDragEnd;
