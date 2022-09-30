create table roles
(
    id   uuid default uuid_generate_v4() not null
        constraint "k_idRole"
            primary key,
    name varchar(30)
);

