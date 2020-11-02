import React, {useState, useEffect, Fragment, useRef} from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import DehazeOutlinedIcon from "@material-ui/icons/DehazeOutlined";
import IconButton from "@material-ui/core/IconButton";
import { styles } from "./styles";
import _ from "underscore";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import { renderHeading } from "./renderHeading";
import { renderOrderDetails } from "./OrderDetails/renderOrderDetails";
import { RenderUserDetails } from "./UserDetails/RenderUserDetails";
import { setRootStyle } from "../DashboardFunctions/setResponsiveRoot";

export const BookingPage = (props) => {
	let {
		match,
		classes,
		isEdit = false,
		store,
		move,
		getList,
		updateBookingData,
	} = props;
	let id = +match.params.id.replace(":", "");
	let history = useHistory();
	const [bookingInfo, setBookingInfo] = useState([]);
	const [loading, setLoading] = useState(true);
	const [additionalNote, setNote] = useState("");
	const [open, setOpen] = useState(false);
	const [userDetails, setUserDetails] = useState({});

	const handleSetData = (data) => {
		let { tab, value, handle, type } = data;
		let newData = bookingInfo;
		for (let key in newData[0]) {
			if (key === tab) {
				switch (handle) {
					case "dates":
						newData[0][key]["startDate"] = value.startDate;
						newData[0][key]["endDate"] = value.endDate;
						break;
					case "hours":
						newData[0][key][type] = value;
						break;
					case "status":
						newData[0][key][handle] = { label: value, value: value };
						break;
					default:
						newData[0][key][handle] = value;
				}
			}
		}
		setBookingInfo([...newData]);
		store.setBookingData([...newData]);
	};
	const endDateRef = useRef(null)

	const handleAddNote = (value) => setNote(value);
	useEffect(() => {
		setBookingInfo([_.find(store.bookingData, (info) => info.id === id) ?? []]);
		if (_.find(store.bookingData, (info) => info.id === id)) {
			setUserDetails(
				_.find(store.bookingData, (info) => info.id === id).userDetails
			);
		}
	}, [id, store.bookingData]);
	useEffect(() => {
		setRootStyle(open);
	}, [open]);
	useEffect(() => {
		bookingInfo.hasOwnProperty("orderDetails") ||
		Object.keys(bookingInfo).length > 0
			? setLoading(false)
			: setLoading(true);
	}, [bookingInfo]);
	const handleOnClick = (action) => {
		if (
			(action === "submitted" && store.droppableItem.source.index) ||
			store.droppableItem.source.index === 0
		) {
			const editableBooking = updateBookingData(
				getList(store.droppableItem.source.droppableId),
				bookingInfo
			);
			const result = move(
				editableBooking,
				getList(store.droppableItem.destination.droppableId),
				store.droppableItem.source,
				store.droppableItem.destination
			);
			store.setList(result);
			store.setDroppableItem({ destination: {}, source: {} });
		} else if (action === "submitted") {
			let listKey = "";
			for (let key in store.list) {
				if (_.find(store.list[key], (item) => item.id === id)) {
					listKey = key;
				}
			}
			const editableBooking = updateBookingData(
				store.list[listKey],
				bookingInfo
			);
			let result = {
				[listKey]: [...editableBooking],
			};
			store.setList(result);
		} else {
			store.setPhoneValidation({
				value: null,
				isValid: true,
			});
		}
		history.push("/dashboard");
	};
	window.onresize = _.debounce(() => setRootStyle(open), 100);
	return (
		<div className={classes.container}>
			<IconButton
				className={classes.expandIcon}
				onClick={() => setOpen(!open)}
				disableRipple={true}
			>
				<DehazeOutlinedIcon fontSize="large" />
			</IconButton>
			{bookingInfo[0] && !loading ? (
				<Fragment>
					{renderHeading(bookingInfo, classes, history, store.setPhoneValidation)}
					<Grid container className={classes.bookingContainer}>
						<Grid item className={classes.orderDetailsPic}>
							<img src={`${bookingInfo[0].orderDetails.imgUrl}`} alt="Gear" />
						</Grid>
						{renderOrderDetails(
							isEdit,
							bookingInfo,
							classes,
							additionalNote,
							handleSetData,
							handleAddNote,
							endDateRef
						)}
						{
							<RenderUserDetails
							bookingInfo={bookingInfo}
								setBookingData={store.setBookingData}
								handleOnChange={handleSetData}
								setPhoneValidation={store.setPhoneValidation}
								phoneValidation={store.phoneValidation}
								isEdit={isEdit}
								classes={classes}
								userDetails={userDetails}
								history={history}
							/>
						}
					</Grid>
					<div
						style={!isEdit ? { display: "none" } : { display: "flex" }}
						className={classes.buttonsBlock}
					>
						<Button onClick={() => handleOnClick("cancelled")}>Cancel</Button>
						<Button onClick={() => handleOnClick("submitted")}>Submit</Button>
					</div>
				</Fragment>
			) : (
				<div>No data provided!</div>
			)}
		</div>
	);
};

export const BookingInfo = withStyles(styles)(BookingPage);
