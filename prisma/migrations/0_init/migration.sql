-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "description" VARCHAR(2000) NOT NULL,
    "status" VARCHAR(255) DEFAULT 'New',
    "response" VARCHAR(2000),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

