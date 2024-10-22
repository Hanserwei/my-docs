# SQL简介以及基础语法

## 数据库简介

1. **定义**：数据库是一个有组织的数据集合，通常以电子形式存储和管理。它允许用户高效地存储、检索和管理数据。

2. **类型**：
   - **关系数据库**：以表格形式存储数据，表与表之间可以通过关系连接。常见的关系数据库管理系统（RDBMS）有MySQL、PostgreSQL、Oracle等。
   - **非关系数据库**：也称为NoSQL数据库，支持多种数据模型，如键值存储、文档存储、列族存储和图数据库。常见的有MongoDB、Cassandra、Redis等。

3. **数据库管理系统（DBMS）**：用于创建、管理和操作数据库的软件。DBMS提供了数据定义、数据操控和数据控制等功能。

## SQL语言简介

1. **定义**：SQL（结构化查询语言）是一种用于与关系数据库交互的标准语言。它用于执行各种操作，如查询、插入、更新和删除数据。

2. **基本操作**：
   - **数据查询**：使用`SELECT`语句从数据库中检索数据。
   - **数据插入**：使用`INSERT`语句向数据库中添加新数据。
   - **数据更新**：使用`UPDATE`语句修改已有的数据。
   - **数据删除**：使用`DELETE`语句删除不需要的数据。

3. **其他功能**：
   - **数据定义**：使用`CREATE`、`ALTER`和`DROP`语句定义和修改数据库结构。
   - **数据控制**：通过`GRANT`和`REVOKE`语句管理用户权限。

4. **事务处理**：SQL支持事务的概念，确保一组操作要么全部成功，要么全部失败，从而保持数据的一致性。

## DDL（数据定义语言）基础语句

### 1. CREATE

**作用**：用于创建数据库、表、视图等对象。

- **语法**：
  ```sql
  CREATE TABLE table_name (
      column1 datatype constraints,
      column2 datatype constraints,
      ...
  );
  ```

- **示例**：
  ```sql
  CREATE TABLE employees (
      id INT PRIMARY KEY,
      name VARCHAR(100),
      hire_date DATE
  );
  ```

### 2. ALTER

**作用**：用于修改已有数据库对象的结构。

- **语法**：
  - **添加列**：
    ```sql
    ALTER TABLE table_name ADD column_name datatype;
    ```
  - **修改列**：
    ```sql
    ALTER TABLE table_name MODIFY column_name new_datatype;
    ```
  - **删除列**：
    ```sql
    ALTER TABLE table_name DROP COLUMN column_name;
    ```

- **示例**：
  ```sql
  ALTER TABLE employees ADD salary DECIMAL(10, 2);
  ```

### 3. DROP

**作用**：用于删除数据库、表或其他对象。

- **语法**：
  ```sql
  DROP TABLE table_name;
  ```

- **示例**：
  ```sql
  DROP TABLE employees;
  ```

### 4. TRUNCATE

**作用**：用于快速删除表中的所有记录，但保留表结构。

- **语法**：
  ```sql
  TRUNCATE TABLE table_name;
  ```

- **示例**：
  ```sql
  TRUNCATE TABLE employees;
  ```

**注意**：`TRUNCATE`比`DELETE`更快，因为它不生成单独的行删除日志，并且无法使用`WHERE`子句。

## DML（数据操控语言）基础语句

### 1. SELECT

**作用**：用于从数据库中查询数据。

- **基本语法**：
  ```sql
  SELECT column1, column2 FROM table_name WHERE condition;
  ```

- **示例**：
  ```sql
  SELECT name, email FROM users WHERE id = 1;
  ```

- **常用选项**：
  - `DISTINCT`：去除重复记录。
  - `ORDER BY`：对结果进行排序。
  - `GROUP BY`：分组统计数据。

### 2. INSERT

**作用**：用于向表中插入新数据。

- **基本语法**：
  ```sql
  INSERT INTO table_name (column1, column2) VALUES (value1, value2);
  ```

- **示例**：
  ```sql
  INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
  ```

- **批量插入**：
  ```sql
  INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com'), ('Charlie', 'charlie@example.com');
  ```

### 3. UPDATE

**作用**：用于修改表中已有的数据。

- **基本语法**：
  ```sql
  UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
  ```

- **示例**：
  ```sql
  UPDATE users SET email = 'alice@newdomain.com' WHERE name = 'Alice';
  ```

- **注意**：未使用`WHERE`子句时，将更新表中所有记录。

### 4. DELETE

**作用**：用于删除表中的数据。

- **基本语法**：
  ```sql
  DELETE FROM table_name WHERE condition;
  ```

- **示例**：
  ```sql
  DELETE FROM users WHERE name = 'Alice';
  ```

- **注意**：未使用`WHERE`子句时，将删除表中所有记录。

## SQL的DQL基础查询
## SQL的DQL分组聚会
## SQL的DQL排序分页