const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
	// This error should crash whole process

	throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
module.exports = {
  PORT: parseInt(process.env.PORT, 10),
  MONGO_CONNECTION_STRING:
    "mongodb+srv://andra-raluca:Bisl2k5pczRc4kPK@ip-project-yau3a.mongodb.net/auth_management?authSource=admin&replicaSet=ip-project-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true",
};
