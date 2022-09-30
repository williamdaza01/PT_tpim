create table sales
(
    id         uuid default uuid_generate_v4() not null
        constraint "k_idSale"
            primary key,
    qty        integer,
    sales_at   timestamp,
    product_id uuid                            not null
        constraint fk_products
            references products,
    user_id    uuid                            not null
        constraint fk_users
            references users
);

