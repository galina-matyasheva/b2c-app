import picJuniorAtomic from "../../img/gears/ski1.jpg";
import picFreestyleJunior from "../../img/gears/ski2.jpg";
import picRossignolExperience from "../../img/gears/ski3.jpg";
import picAtomicCloud from "../../img/gears/ski4.jpg";
import picProcessFlying from "../../img/gears/snowboard.jpg";

const IN_STOCK = "inStock";
const IN_RENTAL = "inRental";
const UPCOMING = "upcomingRentals";
export const staticDataList = [
	{
		id: 3,
		orderBy: IN_STOCK,
		content: {
			title: "Jackson Figure Skates Mystique Ladies JS1490",
			category: "Figure Skates",
			imgUrl:
				"https://images-na.ssl-images-amazon.com/images/I/611vH4jM8RL._AC_SX425_.jpg",
			status: { label: "In inspection", value: "inInspection" },
		},
	},
	{
		id: 21,
		orderBy: IN_STOCK,
		content: {
			title: "Deuter CHILDREN’S BACKPACK",
			category: "backpack",
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/3478/Screenshot-2020-04-08-at-11.34.22-AM_200408_093957.png",
			status: { label: "Ready", value: "ready" },
		},
	},
	{
		id: 32,
		orderBy: IN_STOCK,
		content: {
			title: "Husqvarna Hard Cross HC8 27.5 Zoll Modell 2020",
			category: "Bike",
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13028/_squareImage/das-husqvarna-mc5-allmountain-e-mtb-im-praxistest.jpg",
			status: { label: "Dirty", value: "dirty" },
		},
	},
	{
		id: 41,
		orderBy: IN_STOCK,
		content: {
			title: "IronBaltic Cargo Sled",
			category: "Sled",
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13028/KajakHartschaleTobago3Sitzer2Erwachsene1Kind.webp",
			status: { label: "Damaged", value: "damaged" },
		},
	},
	{
		id: 1110,
		orderBy: UPCOMING,
		content: {
			title: "Patagonia SnowDrifter 30L",
			category: "backpack",
			rental: "Rafal Sandmaster",
			rentDate: { startDate: "06.20.2020", endDate: "06.20.2020" },
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13028/gray.jpg",
		},
	},
	{
		id: 2,
		orderBy: UPCOMING,
		content: {
			title: "ASP Down Winter 195",
			category: "Sleep Bag",
			rental: "Molly Week",
			rentDate: { startDate: "09.03.2020", endDate: "09.03.2020" },
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13108/_imageResults/Bauer_Goalie_Schlittschuh_Reactor9000_1045833_ml.jpg",
		},
	},
	{
		id: 4,
		orderBy: UPCOMING,
		content: {
			title: "MSR Lightning™ Ascent M25 Schneeschuhe",
			category: "Road Bike",
			rental: "Winston McCall",
			rentDate: { startDate: "06.21.2020", endDate: "06.21.2020" },
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13794/_imageResults/406094_3106280.jpg",
		},
	},
	{
		id: 23,
		orderBy: UPCOMING,
		content: {
			title: "Kalkhoff Endeavour 8 - 2019 - 28 Zoll",
			category: "Road Bike",
			rental: "Jeff Ling",
			rentDate: { startDate: "2020-04-25", endDate: "2020-05-01" },
			imgUrl:
				"https://s3.us-east-1.amazonaws.com/gear-dev-site/ugc/13108/_imageResults/34323686.jpg",
		},
	},
	{
		id: 1231,
		orderBy: IN_RENTAL,
		content: {
			title: "Junior Atomic Punx 2021",
			category: "Ski",
			rental: "Lisa Maier ",
			rentDate: { startDate: "2020-12-12", endDate: "2020-12-17" },
			imgUrl: picJuniorAtomic,
		},
	},
	{
		id: 12312,
		orderBy: IN_RENTAL,
		content: {
			title: "Freestyle Junior Head Caddy",
			category: "Ski",
			rental: "Thomas Müller",
			rentDate: { startDate: "2020-12-23", endDate: "2020-12-25" },
			imgUrl: picFreestyleJunior,
		},
	},
	{
		id: 111,
		orderBy: IN_RENTAL,
		content: {
			title: "Rossignol Experience 80 CI",
			category: "Ski",
			rental: "Dagmar Koller",
			rentDate: { startDate: "2020-01-08", endDate: "2020-01-15" },
			imgUrl: picRossignolExperience,
		},
	},
	{
		id: 2131,
		orderBy: IN_RENTAL,
		content: {
			title: "Atomic Cloud Nine 9",
			category: "Ski",
			rental: "Frank Rosin",
			rentDate: { startDate: "2020-03-07", endDate: "2020-03-18" },
			imgUrl: picAtomicCloud,
		},
	},
	{
		id: 214,
		orderBy: IN_RENTAL,
		content: {
			title: "Process Flying V",
			category: "Snowboard",
			rental: "Sara Herring",
			rentDate: { startDate: "2020-01-25", endDate: "2020-01-28" },
			imgUrl: picProcessFlying,
		},
	},
];
