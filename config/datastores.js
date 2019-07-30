/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */

module.exports.datastores = {


    /***************************************************************************
     *                                                                          *
     * Your app's default datastore.                                            *
     *                                                                          *
     * Sails apps read and write to local disk by default, using a built-in     *
     * database adapter called `sails-disk`.  This feature is purely for        *
     * convenience during development; since `sails-disk` is not designed for   *
     * use in a production environment.                                         *
     *                                                                          *
     * To use a different db _in development_, follow the directions below.     *
     * Otherwise, just leave the default datastore as-is, with no `adapter`.    *
     *                                                                          *
     * (For production configuration, see `config/env/production.js`.)          *
     *                                                                          *
     ***************************************************************************/

    default: {
        user: 'kozhuhctackfql',
        password: '77cca36468d6abca8d257a799d1eb343fffb0196d672f1ba765ff94c2af364eb',
        database: 'db06beraj2plep',
        dialect: 'postgres',
        dialectOptions: {
            ssl: true
        },
        ssl: true,
        options: {
            dialect: 'postgres',
            host: 'ec2-54-243-193-59.compute-1.amazonaws.com',
            port: 5432,
            logging: true,
            ssl: true,
            dialectOptions: {
                ssl: true
            }
        }
    }

};