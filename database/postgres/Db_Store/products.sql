create table products
(
    id          uuid default uuid_generate_v4() not null
        constraint key_name
            primary key,
    description varchar(30),
    name        varchar(30),
    price       integer
);

