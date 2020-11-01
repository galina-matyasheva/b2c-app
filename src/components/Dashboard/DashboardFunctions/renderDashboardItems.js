import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { SearchPanel } from "components/SearchPanel/SearchPanel";
import DateRangeIcon from "@material-ui/icons/DateRange";
import _ from "underscore";

export const RenderDashboardItems = ({
	classes,
	list,
	hasMore,
	fetchMoreData,
}) => {
	const IN_RENTAL = "inRental";
	const UPCOMING_RENTALS = "upcomingRentals";
	const IN_STOCK = "inStock";
	const renderDate = (rentDate) => {
		const isSameDate = moment(rentDate.startDate).isSame(
			rentDate.endDate,
			"day"
		);
		const startDate = moment(rentDate.startDate).format("DD MMM");
		const endDate = moment(rentDate.endDate).format("DD MMM");

		return (
			<>
				{isSameDate
					? startDate
					: `${
							moment(startDate).format("DD MMM") +
							" " +
							"-" +
							" " +
							moment(endDate).format("DD MMM")
					  }`}
			</>
		);
	};
	const setStatusStyle = ({ columnKey, status }) => {
		const style = {
			damaged: { backgroundColor: "#ec3e60" },
			dirty: { backgroundColor: "#e8c938" },
			ready: { backgroundColor: "#3dbd8a" },
			inInspection: { backgroundColor: "#ccc" },
		};
		if (columnKey === UPCOMING_RENTALS) {
			return { display: "none" };
		} else {
			for (let key in style) {
				if (status === key) return style[key];
			}
		}
	};
	const getItemStyle = (isDragging, draggableStyle) => ({
		boxShadow: isDragging
			? "24px 18px 39px 0px rgba(184,180,184,1)"
			: "0 0 8px rgba(0,0,0,0.12)",
		backgroundColor: isDragging ? "#f9fafb" : "white",
		// needs to apply on draggables
		...draggableStyle,
	});

	const getListStyle = (isDraggingOver, key) => ({
		borderTop:
			key === UPCOMING_RENTALS
				? "10px #2ccb8c solid"
				: key === IN_RENTAL
				? "10px #3f70e2 solid"
				: "10px #c0c6cc solid",
	});

	return _.map(list, (booking, key) => {
		let columnTitle = key
			.replace(/([A-Z])/g, (match) => ` ${match}`)
			.replace(/^./, (match) => match.toUpperCase());

		return (
			<Droppable droppableId={key} key={key}>
				{(provided, snapshot) => (
					<div className={classes.columnContainer}>
						<div
							ref={provided.innerRef}
							style={getListStyle(snapshot.isDraggingOver, key)}
							className={classes.listStyle}
							id={key}
						>
							<Grid container className={classes.columnHeader}>
								<Grid
									item
									style={
										key === UPCOMING_RENTALS
											? { backgroundColor: "#2ccb8c" }
											: key === IN_RENTAL
											? { backgroundColor: "#3f70e2" }
											: { backgroundColor: "#c0c6cc" }
									}
									className={classes.columnHeaderTitle}
								>
									{columnTitle}
								</Grid>
								<Grid
									item
									className={classes.countItems}
								>{`${list[key].length} items`}</Grid>
							</Grid>
							<SearchPanel />
							<InfiniteScroll
								dataLength={list[key].length}
								next={() => fetchMoreData(key)}
								hasMore={list[key].length === 0 ? false : hasMore}
								loader={
									<h4 className={classes.infiniteScrollLoadingText}>
										Loading...
									</h4>
								}
								scrollableTarget={key}
								style={{ overflow: "visible" }}
							>
								{booking.map((item, index) => {
									let isValidDates =
										item.content.rentDate &&
										(moment(item.content.rentDate.startDate).isValid() ||
											moment(item.content.rentDate.endDate ?? "").isValid());
									return (
										<Draggable
											key={item.id}
											draggableId={item.id.toString()}
											index={index}
										>
											{(provided, snapshot) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													style={getItemStyle(
														snapshot.isDragging,
														provided.draggableProps.style
													)}
													className={classes.listElement}
												>
													<Grid
														container
														justify="space-between"
														alignItems="center"
													>
														<Grid
															item
															className={
																item.content.status
																	? classes.limitedWidthCategoryText
																	: classes.categoryText
															}
														>
															{item.content.category}
														</Grid>
														<Grid
															item
															style={
																item.content.status
																	? setStatusStyle({
																			status: item.content.status.value,
																			columnKey: key,
																	  })
																	: {}
															}
															className={classes.gearStatus}
														>
															{item.content.status
																? item.content.status.label
																: ""}
														</Grid>
													</Grid>

													<Grid container alignItems="center">
														<Grid
															item
															style={
																item.content.imgUrl
																	? { display: "block" }
																	: { display: "none" }
															}
															className={classes.imgItem}
														>
															<img
																alt="gear_logo"
																className={classes.gearPic}
																src={item.content.imgUrl}
																style={
																	item.content.rentDate || item.content.date
																		? {}
																		: { margin: "15px 0px 0px" }
																}
															></img>
														</Grid>
														<Grid
															item
															component={Link}
															to={
																key === IN_STOCK
																	? `/dashboard/edit-booking/${item.id}`
																	: `/dashboard/booking/${item.id}`
															}
															className={classes.titleText}
														>
															{item.content.title}
															<p className={classes.rentalText}>
																{item.content.rental}
															</p>
														</Grid>
														<Grid
															container
															direction="row"
															className={classes.dateBlock}
															style={
																isValidDates
																	? { display: "flex" }
																	: { display: "none" }
															}
														>
															<DateRangeIcon className={classes.calendarIcon} />
															<p className={classes.rentalText}>
																{item.content.rentDate
																	? renderDate(item.content.rentDate)
																	: null}
															</p>
														</Grid>
													</Grid>
												</div>
											)}
										</Draggable>
									);
								})}
							</InfiniteScroll>
							{provided.placeholder}
						</div>
					</div>
				)}
			</Droppable>
		);
	});
};

export default RenderDashboardItems;
