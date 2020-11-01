import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { BookingInfo } from "./BookingPage/BookingInfo";
import { Dashboard } from "./Dashboard";
import { ProfileSidebar } from "components/ProfileSidebar/ProfileSidebar";
import StoreContext from "components/Dashboard/Content/StoreContext";
import { staticDataList } from "./mocdata";
import { staticDataBooking } from "components/Dashboard/BookingPage/mocdata";
import _ from "underscore";
import {
	// Store,
	moveBooking,
	reorderBooking,
	updateBookingData,
} from "components/Dashboard/Content";
const App = () => {
	let orderedByColumnBooking = _.groupBy(staticDataList, "orderBy");
	const [list, setList] = useState(orderedByColumnBooking);
	const [bookingData, setBookingData] = useState(staticDataBooking);
	const [droppableItem, setDroppableItem] = useState({
		destination: {},
		source: {},
	});
	const [phoneValidation, setPhoneValidation] = useState({
		value: null,
		isValid: true,
	});
	let store = {
		list: list,
		bookingData: bookingData,
		droppableItem: droppableItem,
		phoneValidation: phoneValidation,
		setPhoneValidation: (payload) => setPhoneValidation({ ...payload }),
		setList: (result) => setList({ ...list, ...result }),
		setBookingData: (payload) =>
			setBookingData(
				bookingData.map((item) =>
					item.id === payload.id ? { ...payload } : item
				)
			),
		setDroppableItem: (payload) => setDroppableItem({ ...payload }),
	};
	let { path } = useRouteMatch();
	const getBookingList = (id) => store.list[id];
	return (
		<StoreContext.Provider value={store}>
			<ProfileSidebar />
			<Switch>
				<Route
					exact
					path={path}
					render={(props) => (
						<StoreContext.Consumer>
							{(store) => (
								<Dashboard
									store={store}
									{...props}
									move={moveBooking}
									getList={getBookingList}
									reorder={reorderBooking}
								/>
							)}
						</StoreContext.Consumer>
					)}
				/>
				<Route
					path={`${path}/booking/:id`}
					render={(props) => (
						<StoreContext.Consumer>
							{(store) => (
								<BookingInfo
									move={moveBooking}
									getList={getBookingList}
									isEdit={false}
									store={store}
									{...props}
								/>
							)}
						</StoreContext.Consumer>
					)}
				/>
				<Route
					path={`${path}/edit-booking/:id`}
					render={(props) => (
						<StoreContext.Consumer>
							{(store) => (
								<BookingInfo
									updateBookingData={updateBookingData}
									move={moveBooking}
									getList={getBookingList}
									isEdit={true}
									store={store}
									{...props}
								/>
							)}
						</StoreContext.Consumer>
					)}
				/>
			</Switch>
		</StoreContext.Provider>
	);
};
export default App;
