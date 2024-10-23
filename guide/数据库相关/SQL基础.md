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

## SQL数据类型总结
下面是一个MySQL数据类型的表格展示：

| 类型          | 描述                                         | 最大长度/范围                                      |
|---------------|--------------------------------------------|--------------------------------------------------|
| **数值类型**   |                                            |                                                  |
| INT           | 整数类型                                   | -2,147,483,648 到 2,147,483,647                   |
| TINYINT       | 小整数                                    | -128 到 127（或 0 到 255）                        |
| SMALLINT      | 小整数                                    | -32,768 到 32,767                                 |
| MEDIUMINT     | 中等大小整数                              | -8,388,608 到 8,388,607                           |
| BIGINT        | 大整数                                    | -9,223,372,036,854,775,808 到 9,223,372,036,854,775,807 |
| FLOAT         | 单精度浮点数                              | 根据实现而定                                      |
| DOUBLE        | 双精度浮点数                              | 根据实现而定                                      |
| DECIMAL(M, D) | 精确的定点数                              | M是总位数，D是小数位数                          |
| **字符串类型** |                                            |                                                  |
| CHAR(M)      | 固定长度字符串                            | 最大255字符                                       |
| VARCHAR(M)    | 可变长度字符串                            | 最大65,535字符                                    |
| TEXT          | 大文本                                    | 最大65,535字符                                    |
| MEDIUMTEXT    | 中等文本                                  | 最大16,777,215字符                                |
| LONGTEXT      | 长文本                                    | 最大4,294,967,295字符                             |
| BLOB          | 二进制大对象                              | 最大65,535字节                                    |
| ENUM          | 枚举类型                                  | 允许列出可能的值                                  |
| SET           | 集合类型                                  | 允许从一个列表中选择多个值                        |
| **日期和时间类型** |                                        |                                                  |
| DATE          | 日期                                      | 格式为 'YYYY-MM-DD'                             |
| DATETIME      | 日期和时间                                | 格式为 'YYYY-MM-DD HH:MM:SS'                    |
| TIMESTAMP     | 时间戳                                    | 自1970年1月1日以来的秒数                          |
| TIME          | 时间                                      | 格式为 'HH:MM:SS'                               |
| YEAR          | 年份                                      | 格式为 'YYYY'                                   |
| **其他类型**   |                                            |                                                  |
| JSON          | 存储JSON格式的数据                        | -                                                |
| BIT           | 位字段类型                                | -                                                |

这个表格概括了MySQL中常见的数据类型及其描述。

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
::: danger 注意！
`TRUNCATE`比`DELETE`更快，因为它不生成单独的行删除日志，并且无法使用`WHERE`子句。
:::
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
::: danger 注意！
GROUP BY中出现了哪个列，哪个列才可以出现在SELECT中的非聚合中。
:::

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

::: danger 注意！
未使用`WHERE`子句时，将更新表中所有记录。
:::

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

::: danger 注意！
未使用`WHERE`子句时，将删除表中所有记录。
:::

## SQL的DQL分组聚会

分组聚合是在SQL中对数据进行分组，并对每个组应用聚合函数的操作。这通常用于生成汇总信息，例如求和、计数或平均值。

### 常用聚合函数

1. **COUNT()**：计算行数。
   ```sql
   SELECT COUNT(*) FROM orders;
   ```

2. **SUM()**：计算总和。
   ```sql
   SELECT SUM(amount) FROM orders;
   ```

3. **AVG()**：计算平均值。
   ```sql
   SELECT AVG(amount) FROM orders;
   ```

4. **MAX()**：获取最大值。
   ```sql
   SELECT MAX(amount) FROM orders;
   ```

5. **MIN()**：获取最小值。
   ```sql
   SELECT MIN(amount) FROM orders;
   ```

### GROUP BY 子句

使用 `GROUP BY` 子句将结果集按一个或多个列进行分组。

- **基本语法**：
  ```sql
  SELECT column1, AGGREGATE_FUNCTION(column2)
  FROM table_name
  GROUP BY column1;
  ```

- **示例**：
  ```sql
  SELECT customer_id, COUNT(*) AS order_count
  FROM orders
  GROUP BY customer_id;
  ```

### HAVING 子句

`HAVING` 子句用于对聚合结果进行过滤，通常与 `GROUP BY` 一起使用。

- **示例**：
  ```sql
  SELECT customer_id, SUM(amount) AS total_spent
  FROM orders
  GROUP BY customer_id
  HAVING SUM(amount) > 1000;
  ```

### 组合示例

```sql
SELECT product_id, COUNT(*) AS sales_count, AVG(price) AS avg_price
FROM sales
GROUP BY product_id
HAVING COUNT(*) > 5;
```

## SQL的DQL排序分页
在SQL中，排序和分页操作常用于控制查询结果的显示顺序和数量，尤其在处理大量数据时尤为重要。

### 排序

使用 `ORDER BY` 子句对查询结果进行排序。
:::tip
默认升序排列
:::

- **基本语法**：
  ```sql
  SELECT column1, column2
  FROM table_name
  ORDER BY column1 [ASC|DESC];
  ```

- **示例**：
  ```sql
  SELECT name, age
  FROM users
  ORDER BY age ASC;  -- 按年龄升序排序
  ```

### 分页

分页操作可以通过 `LIMIT` 和 `OFFSET` 子句（在某些数据库中是 `FETCH` 和 `OFFSET`）来实现，控制返回的记录数。

- **基本语法**（MySQL/PostgreSQL）：
  ```sql
  SELECT column1, column2
  FROM table_name
  ORDER BY column1
  LIMIT page_size OFFSET offset_value;
  ```

- **示例**（获取第2页，每页10条记录）：
  ```sql
  SELECT *
  FROM users
  ORDER BY id
  LIMIT 10 OFFSET 10;  -- 获取第2页的记录
  ```
:::details LIMIT注意事项
### LIMIT 的介绍

`LIMIT` 子句用于限制查询结果中返回的行数，常用于实现分页效果。它在不同的数据库管理系统中的语法略有差异，但基本功能相同。

### 基本语法

在大多数数据库（如 MySQL 和 PostgreSQL）中，语法为：
```sql
SELECT column1, column2
FROM table_name
LIMIT number;
```

- **number**：要返回的最大行数。

### 示例

1. **限制返回行数**：
   ```sql
   SELECT name FROM users LIMIT 5;  -- 返回前5条记录
   ```

2. **结合 OFFSET 实现分页**：
   ```sql
   SELECT name FROM users LIMIT 10 OFFSET 20;  -- 获取第3页（每页10条记录）
   ```
:::danger 注意事项

- **在 SQL Server 中**，使用 `TOP` 关键字替代 `LIMIT`：
  ```sql
  SELECT TOP 5 name FROM users;
  ```

- **在 Oracle 中**，使用 `ROWNUM` 或 `FETCH FIRST`：
  ```sql
  SELECT name FROM users WHERE ROWNUM <= 5;
  ```
:::
使用 `LIMIT` 可以有效控制查询结果的数量，特别是在处理大量数据时。
:::

### 组合示例

结合排序和分页可以同时控制结果的顺序和数量：
```sql
SELECT name, email
FROM users
ORDER BY name DESC
LIMIT 5 OFFSET 0;  -- 获取前5条记录
```
