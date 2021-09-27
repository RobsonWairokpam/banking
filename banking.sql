CREATE TABLE "branch" (
  "branch_id" int PRIMARY KEY,
  "name" varchar(100),
  "address" varchar(100),
  "is_active" boolean
);

CREATE TABLE "staff" (
  "staff_id" int PRIMARY KEY,
  "name" varchar(100),
  "address" varchar(100),
  "email" varchar(100),
  "mobile" varchar(15),
  "gender" varchar(10),
  "branch_id" int,
  "role_id" int,
  "is_active" boolean
);

CREATE TABLE "role" (
  "role_id" int PRIMARY KEY,
  "role_name" varchar(100),
  "is_active" boolean
);

CREATE TABLE "auth" (
  "staff_id" int,
  "email" varchar(100),
  "password" varchar(200),
  "status" varchar(20)
);

ALTER TABLE "staff" ADD FOREIGN KEY ("branch_id") REFERENCES "branch" ("branch_id");

ALTER TABLE "staff" ADD FOREIGN KEY ("staff_id") REFERENCES "auth" ("staff_id");

ALTER TABLE "role" ADD FOREIGN KEY ("role_id") REFERENCES "staff" ("role_id");
