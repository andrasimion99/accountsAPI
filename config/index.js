const port = parseInt(process.env.PORT, 10) || 3002;
module.exports = {
  PORT: port,
  MONGO_CONNECTION_STRING:
    "mongodb+srv://andra-raluca:Bisl2k5pczRc4kPK@ip-project-yau3a.mongodb.net/auth_management?authSource=admin&replicaSet=ip-project-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true",
};
