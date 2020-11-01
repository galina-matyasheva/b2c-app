import _ from "underscore";
export const updateBookingData = (list, data) => {
	let resultData = {};
	let result = list;
	let foundBooking = _.find(
		list,
		(item) => data[0]["id"] && data[0]["id"] === item.id
	);
	let index = _.indexOf(list, foundBooking);
	if (foundBooking) {
		for (let key in data[0]) {
			switch (key) {
				case "orderDetails":
					resultData = {
						...foundBooking,
						content: {
							...foundBooking.content,
							status: data[0][key].status ?? "",
							rentDate: {
								startDate: data[0][key].startDate,
								endDate: data[0][key].endDate,
							},
							rental: "",
						},
					};
					break;
				default:
					break;
			}
		}
		result.splice(index, 1, resultData);
		return result;
	}
};
