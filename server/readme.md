make migration: knex migrate:make create_movies_table

run migration: knex migrate:latest --env development

migration rollback: knex migrate:rollback --env development
