# Migration `20200525210752-add-par-to-stock-item`

This migration has been generated by Terris Kremer at 5/25/2020, 9:07:52 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."StockItem" (
"cost" Decimal(65,30)  NOT NULL ,"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"id" SERIAL,"name" text  NOT NULL ,"par" integer  NOT NULL ,"quantity" integer  NOT NULL DEFAULT 0,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."StockCategory" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"id" SERIAL,"name" text  NOT NULL ,"stockItemId" integer   ,
    PRIMARY KEY ("id"))

ALTER TABLE "public"."User" ALTER COLUMN "role" SET DEFAULT 'USER';

ALTER TABLE "public"."StockCategory" ADD FOREIGN KEY ("stockItemId")REFERENCES "public"."StockItem"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200525210635-add-stock-and-stock-categories..20200525210752-add-par-to-stock-item
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -47,8 +47,9 @@
 model StockItem {
   id          Int       @id @default(autoincrement())
   name        String
   quantity    Int       @default(0)
+  par         Int
   cost        Float
   categories  StockCategory[]
   createdAt   DateTime  @default(now())
 }
```


