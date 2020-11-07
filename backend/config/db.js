module.exports = {
  user: process.env.DB_USERNAME,

  // Get the password from the environment variable
  // NODE_ORACLEDB_PASSWORD.  The password could also be a hard coded
  // string (not recommended), or it could be prompted for.
  // Alternatively use External Authentication so that no password is
  // needed.
  password: process.env.DB_PASSWORD,

  // For information on connection strings see:
  // https://oracle.github.io/node-oracledb/doc/api.html#connectionstrings
  connectString: process.env.DB_URI,

  // Setting externalAuth is optional.  It defaults to false.  See:
  // https://oracle.github.io/node-oracledb/doc/api.html#extauth
  // TODO: do we need this??
  externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false,
};
