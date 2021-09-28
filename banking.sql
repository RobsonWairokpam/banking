CREATE TABLE "branch" (
  "branch_id" varchar(100) PRIMARY KEY,
  "name" varchar(100),
  "address" varchar(100),
  "created_on" timestamp,
  "created_by" varchar(100),
  "is_active" boolean
);

CREATE TABLE "staff" (
  "staff_id" varchar(100) PRIMARY KEY,
  "name" varchar(100),
  "address" varchar(100),
  "email" varchar(100),
  "mobile" varchar(15),
  "gender" varchar(10),
  "branch_id" varchar(100),
  "role_id" varchar(100),
    "created_on" timestamp,
  "created_by" varchar(100),
  "is_active" boolean
);

CREATE TABLE "role" (
  "role_id" varchar(100) PRIMARY KEY,
  "role_name" varchar(100),
  "created_on" timestamp,
  "created_by" varchar(100),
  "is_active" boolean
);

CREATE TABLE "auth" (
  "staff_id" varchar(100),
  "email" varchar(100),
  "password" varchar(200),
  "status" varchar(20)
);


