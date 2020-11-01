import picJuniorAtomic from "../../../img/gears/ski1.jpg";
import picFreestyleJunior from "../../../img/gears/ski2.jpg";
import picRossignolExperience from "../../../img/gears/ski3.jpg";
import picAtomicCloud from "../../../img/gears/ski4.jpg";
import picProcessFlying from "../../../img/gears/snowboard.jpg";
export const staticDataBooking = [
	{
		id: 21,
		title: "Deuter CHILDREN’S BACKPACK",
		orderId: "00-000011",
		orderDetails: {
			startHour: "",
			endHour: "",
			startDate: "",
			endDate: "",
			state: "Returned",
			status: { value: "ready", label: "Ready" },
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/3478/Screenshot-2020-04-08-at-11.34.22-AM_200408_093957.png",
			amount: { hourly: 12, daily: 25, total: "" },
		},
		userDetails: {},
	},
	{
		id: 3,
		title: "Jackson Figure Skates Mystique Ladies JS1490",
		orderId: "00-000003",
		orderDetails: {
			startHour: "",
			endHour: "",
			startDate: "",
			endDate: "",
			state: "Returned",
			status: { value: "inInspection", label: "In inspection" },
			imgUrl:
				"https://images-na.ssl-images-amazon.com/images/I/611vH4jM8RL._AC_SX425_.jpg",
			amount: { hourly: 25, daily: 35, total: 72 },
		},
		userDetails: {},
	},
	{
		id: 4,
		title: "MSR Lightning™ Ascent M25 Schneeschuhe",
		orderId: "00-000003",
		orderDetails: {
			startHour: "12:00",
			endHour: "14:00",
			startDate: "06.21.2020",
			endDate: "06.21.2020",
			state: "Upcoming",
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13794/_imageResults/406094_3106280.jpg",
			amount: { hourly: 15, daily: 25, total: 75 },
		},
		userDetails: {
			id: 121,
			countryCode: "DE",
			postCode: 55128,
			country: "Germany",
			city: "Mainz",
			street: "Ackermannweg",
			streetNumber: "10",
			name: "Winston McCall",
		},
	},
	{
		id: 23,
		title: "Kalkhoff Endeavour 8 - 2019 - 28 Zoll",
		orderId: "00-000023",
		orderDetails: {
			startHour: "12:00",
			endHour: "14:00",
			startDate: "04.05.2020",
			endDate: "04.25.2020",
			state: "Upcoming",
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13108/_imageResults/34323686.jpg",
			amount: { hourly: 15, daily: 15, total: 35 },
		},
		userDetails: {
			id: 121,
			countryCode: "DE",
			postCode: 55128,
			country: "Germany",
			city: "Mainz",
			street: "Ackermannweg",
			streetNumber: "10",
			name: "Jeff Ling",
		},
	},
	{
		id: 1231,
		title: "Junior Atomic Punx 2021 ",
		orderId: "00-00001121",
		orderDetails: {
			startHour: "12:00",
			endHour: "14:00",
			startDate: "2020-12-12",
			endDate: "2020-12-17",
			state: "Rental",
			imgUrl: picJuniorAtomic,
			amount: { hourly: 25, daily: 30, total: 45 },
		},
		userDetails: {
			id: 121,
			countryCode: "DE",
			postCode: 70192,
			country: "Germany",
			city: "Stuttgart",
			street: "Lenbachstraße",
			streetNumber: "2-26",
			name: "Lisa Maier",
		},
	},
	{
		id: 12312,
		title: "Freestyle Junior Head Caddy",
		orderId: "00-000011213",
		orderDetails: {
			startHour: "12:00",
			endHour: "14:00",
			startDate: "12.23.2020",
			endDate: "12.25.2020",
			state: "Rental",
			imgUrl: picFreestyleJunior,
			amount: { hourly: 25, daily: 30, total: 45 },
		},
		userDetails: {
			id: 121,
			countryCode: "AT",
			postCode: 5020,
			country: "Austria",
			city: "Salzburg",
			street: "Eniglstraße",
			streetNumber: "7",
			name: "Thomas Müller",
		},
	},
	{
		id: 111,
		title: "Rossignol Experience 80 CI",
		orderId: "00-000011",
		orderDetails: {
			startDate: "01.08.2020",
			endDate: "01.15.2020",
			state: "Rental",
			imgUrl: picRossignolExperience,
			amount: { hourly: 25, daily: 30, total: 50 },
		},
		userDetails: {
			id: 121,
			countryCode: "DE",
			postCode: 60486,
			country: "Germany",
			city: "Frankfurt am Main",
			street: "Elisabethebstrasse",
			streetNumber: "8",
			name: "Dagmar Koller",
		},
	},
	{
		id: 2131,
		title: "Atomic Cloud Nine 9",
		orderId: "00-002131",
		orderDetails: {
			startDate: "03.07.2020",
			endDate: "03.18.2020",
			state: "Rental",
			imgUrl: picAtomicCloud,
			amount: { hourly: 25, daily: 30, total: 50 },
		},
		userDetails: {
			id: 121,
			countryCode: "CH",
			postCode: 4058,
			country: "Switzerland",
			city: "Basel",
			street: "Mattenstrasse",
			streetNumber: "24a",
			name: "Frank Rosin",
		},
	},
	{
		id: 214,
		title: "Process Flying V",
		orderId: "00-00214",
		orderDetails: {
			startDate: "01.25.2020",
			endDate: "01.28.2020",
			state: "Rental",
			imgUrl: picProcessFlying,
			amount: { hourly: 25, daily: 30, total: 55 },
		},
		userDetails: {
			id: 121,
			countryCode: "DE",
			postCode: 79576,
			country: "Germany",
			city: "Weil am Rhein",
			street: "Colmarer Str.",
			streetNumber: "6",
			name: "Sara Herring",
		},
	},
	{
		id: 1110,
		title: "Patagonia SnowDrifter 30L",
		orderId: "00-001",
		orderDetails: {
			startDate: "2019.06.20",
			endDate: "2019.06.20",
			status: { label: "Ready", value: "ready" },
			state: "Upcoming",
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13028/gray.jpg",
			amount: { hourly: 15, daily: 30, total: 30 },
		},
		userDetails: {
			name: "Rafal Sandmaster",
			id: 121,
			countryCode: "DE",
			postCode: 79576,
			country: "Germany",
			city: "Weil am Rhein",
			street: "Colmarer Str.",
			streetNumber: "6",
		},
	},
	{
		id: 2,
		title: "ASP Down Winter 195",
		orderId: "00 - 002",
		orderDetails: {
			startDate: "03.09.2020",
			endDate: "03.09.2020",
			status: { label: "Ready", value: "ready" },
			state: "Upcoming",
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13108/_imageResults/Bauer_Goalie_Schlittschuh_Reactor9000_1045833_ml.jpg",
			amount: { hourly: 15, daily: 30, total: 35 },
		},
		userDetails: {
			name: "Molly Week",
			id: 121,
			countryCode: "DE",
			postCode: 79576,
			country: "Germany",
			city: "Weil am Rhein",
			street: "Colmarer Str.",
			streetNumber: "6",
		},
	},
	{
		id: 41,
		title: "IronBaltic Cargo Sled",
		orderId: "00 - 003",
		orderDetails: {
			startDate: "",
			endDate: "",
			status: { label: "Damaged", value: "damaged" },
			state: "Returned",
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13028/KajakHartschaleTobago3Sitzer2Erwachsene1Kind.webp",
			amount: { hourly: 15, daily: 30 },
		},
		userDetails: {},
	},
	{
		id: 32,
		title: "Husqvarna Hard Cross HC8 27.5 Zoll Modell 2020",
		orderId: "00-0000003",
		orderDetails: {
			startDate: "",
			endDate: "",
			status: { label: "Dirty", value: "dirty" },
			state: "Returned",
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13028/_squareImage/das-husqvarna-mc5-allmountain-e-mtb-im-praxistest.jpg",
			amount: { hourly: 15, daily: 30, total: "" },
		},
		userDetails: {},
	},
];
