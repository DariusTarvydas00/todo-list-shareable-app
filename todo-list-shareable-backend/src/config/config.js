const application = {
    env: 'development',
    port: 5000,
};

const database = {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    name: 'skeleton_app_db_local',
};

module.exports = {
    application,
    database,
};