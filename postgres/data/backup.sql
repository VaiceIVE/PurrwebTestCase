CREATE DATABASE trellodb;

\connect trellodb; 

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "users" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "email" varchar NOT NULL,
  "username" varchar NOT NULL,
  "hash_password" varchar NOT NULL,
  "is_verified" bool NOT NULL DEFAULT false
);

CREATE TABLE "lists" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "owner_id" uuid,
  "name" varchar NOT NULL,
  "description" varchar
);

CREATE TABLE "cards" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "list_id" uuid,
  "name" varchar NOT NULL,
  "description" varchar
);

CREATE TABLE "comments" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "card_id" uuid,
  "owner_id" uuid,
  "message" varchar NOT NULL
);

ALTER TABLE "lists" ADD FOREIGN KEY ("owner_id") REFERENCES "users" ("id");

ALTER TABLE "cards" ADD FOREIGN KEY ("list_id") REFERENCES "lists" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("card_id") REFERENCES "cards" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("owner_id") REFERENCES "users" ("id");