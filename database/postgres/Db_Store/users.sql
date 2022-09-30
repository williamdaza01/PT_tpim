create table users
(
    id        uuid default uuid_generate_v4() not null
        constraint k_iduser
            primary key,
    name      varchar(30),
    last_name varchar(30),
    document  varchar(20),
    role_id   uuid                            not null
        constraint "fk_idRole"
            references roles
);

