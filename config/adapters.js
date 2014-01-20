/**
 * Connections / Adapters / Models
 *
 * The `connections` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which
 * "saved setting" should be used if a model doesn't have a connection specified.
 *
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, not here, in case you inadvertently push them up to your repository.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.connections = {

  // Local disk storage for DEVELOPMENT ONLY
  //
  // Installed by default-
  // see `module.exports.model` below to change this.
  //
  dev_db: {
    adapter: 'sails-disk'
  },
  local_postgresql_database: {
    adapter   : 'sails-postgresql',
    host      : 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user      : 'YOUR_POSTGRES_USER',
    password  : 'YOUR_POSTGRES_PASSWORD',
    database  : 'YOUR_POSTGRES_DB'
  }


  // More adapters here:
  // https://github.com/balderdashy/sails-docs/blob/0.9/api.adapter-interface.md#offcially-supported-adapters

};
module.exports.model = {

  // The default connection(s) to use with your models
  // i.e. your app's primary database
  connections: [ 'dev_db' ]
};



