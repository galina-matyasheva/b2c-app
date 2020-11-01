import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid";
import _ from "underscore";
import { withStyles } from "@material-ui/core/styles";
import DehazeOutlinedIcon from "@material-ui/icons/DehazeOutlined";
import IconButton from "@material-ui/core/IconButton";

import { setRootStyle } from "components/Dashboard/DashboardFunctions/setResponsiveRoot";
import { styles } from "./styles";
import { RenderDashboardItems } from "components/Dashboard/DashboardFunctions/renderDashboardItems";
import { ModalWindow } from "./ModalWindow/ModalWindow";
import onDragEnd from "components/Dashboard/DashboardFunctions/onDragEnd";

const DashboardPage = (props) => {
	let {
		store,
		classes,
		history,
		move,
		getList,
		reorder,
		updateBookingData,
	} = props;
	const [open, setOpen] = useState(false);
	const [isModalOpen, setOpenModal] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	window.onresize = _.debounce(() => setRootStyle(open), 100);
	useEffect(() => {
		setRootStyle(open);
	}, [open]);

	const handleDialogAction = () => setOpenModal(!isModalOpen);
	const goBackHandle = () => {
		store.setDroppableItem({ destination: {}, source: {} });
		setOpenModal(!isModalOpen);
	};
	const submitHandle = (updatedStatus) => {
		const result = move(
			getList(store.droppableItem.source.droppableId),
			getList(store.droppableItem.destination.droppableId),
			store.droppableItem.source,
			store.droppableItem.destination,
			updatedStatus
		);
		let [removed] = getList(store.droppableItem.source.droppableId).splice(
			store.droppableItem.source.index,
			1
		);
		let bookingFind = [
			_.find(store.bookingData, (item) => item.id === removed.id) ?? [],
		];
		bookingFind[0].orderDetails.status = updatedStatus;
		bookingFind[0].userDetails = {};
		store.setList(result);
		store.setBookingData([...bookingFind]);
		store.setDroppableItem({ destination: {}, source: {} });
		setOpenModal(!isModalOpen);
	};

	const fetchMoreData = (currentList) => {
		if (store.list[currentList].length >= 50) {
			setHasMore(false);
			return;
		}
		setTimeout(() => {
			store.setList({
				[currentList]: store.list[currentList].concat(
					Array.from(store.list[currentList], (item) => ({
						...item,
						id: Math.random(),
					}))
				),
			});
		}, 1500);
	};
	const isLogged = JSON.parse(sessionStorage.getItem("isLogged"));
	return (
		<>
			{isLogged ? (
				<div
					className={classes.container}
					style={isModalOpen ? { filter: "blur(8px)" } : {}}
				>
					<ModalWindow
						dialogTitleText="Confirm your action"
						modalWindowType="confirmationDashboard"
						goBackHandle={goBackHandle}
						submitHandle={submitHandle}
						isOpen={isModalOpen}
						handleDialogAction={handleDialogAction}
						history={history}
					/>
					<IconButton
						className={classes.expandIcon}
						onClick={() => setOpen(!open)}
						disableRipple={true}
					>
						<DehazeOutlinedIcon fontSize="default" />
					</IconButton>
					<h1 className={classes.dashboardTitle}>Bookings</h1>
					<DragDropContext
						className={classes.dndContext}
						onDragEnd={(result) =>
							onDragEnd(
								result,
								setOpenModal,
								isModalOpen,
								store.setDroppableItem,
								reorder,
								getList,
								store.setList,
								move,
								store.list,
								history
							)
						}
					>
						<div className={classes.rootDiv}>
							<div className={classes.horizontalScrollContainer}>
								<RenderDashboardItems
									list={store.list}
									classes={classes}
									hasMore={hasMore}
									fetchMoreData={fetchMoreData}
								/>
							</div>
						</div>
					</DragDropContext>
				</div>
			) : (
				<div className={classes.container} style={{ filter: "blur(8px)" }}>
					<ModalWindow
						updateBookingData={updateBookingData}
						modalWindowType="loggedOutUser"
						isOpen={true}
						handleDialogAction={handleDialogAction}
						history={history}
					/>
				</div>
			)}
		</>
	);
};
export const Dashboard = withStyles(styles)(DashboardPage);
