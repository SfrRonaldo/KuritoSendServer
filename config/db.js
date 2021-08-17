const moongose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
	try {
		await moongose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log("DB Conectada");
	} catch (error) {
		console.log("Hubo un error");
		console.log(error);
		process.exit(1);
	}
};

module.exports = conectarDB;
