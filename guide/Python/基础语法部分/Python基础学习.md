# python的基础学习笔记

- 字面量

  在 Python 中，字面量（Literal）指的是直接表示某种固定值的语法。Python 支持多种类型的字面量，常见的包括：

  ### 1. **数字字面量**
     包含整数、浮点数和复数。
     - **整数**：例如 `42`，`-10`
     - **浮点数**：例如 `3.14`，`-0.001`
     - **复数**：例如 `3+4j`，`1j`

     ```python
     x = 42         # 整数字面量
     y = 3.14       # 浮点数字面量
     z = 3 + 4j     # 复数字面量
     ```

  ### 2. **字符串字面量**
     以单引号 `'` 或双引号 `"` 包裹的字符序列。
     - **单行字符串**：`'hello'`，`"world"`
     - **多行字符串**：使用三引号包裹，`'''` 或 `"""`

     ```python
     single_line = "Hello, World!"
     multi_line = """This is a
     multi-line string"""
     ```

  ### 3. **布尔字面量**
     布尔值只有两个字面量：`True` 和 `False`。

     ```python
     a = True
     b = False
     ```

  ### 4. **None 字面量**
     `None` 表示空值或无效的值，在 Python 中表示“什么也没有”。

     ```python
     nothing = None
     ```

  ### 5. **集合字面量**
     集合是无序、不可重复的元素集合。可以通过花括号 `{}` 来表示集合字面量。

     ```python
     fruits = {"apple", "banana", "cherry"}
     ```

  ### 6. **列表字面量**
     使用方括号 `[]` 表示的有序、可变的数据结构。

     ```python
     numbers = [1, 2, 3, 4]
     ```

  ### 7. **元组字面量**
     使用小括号 `()` 表示的有序、不可变的数据结构。

     ```python
     coordinates = (10, 20)
     ```

  ### 8. **字典字面量**
     字典是键值对的集合，使用花括号 `{}` 并通过冒号 `:` 分割键和值。

     ```python
     person = {"name": "John", "age": 30}
     ```

  ### 9. **二进制、八进制、十六进制字面量**
     Python 支持不同进制的数字字面量。
     - **二进制**：前缀 `0b`，如 `0b1010`
     - **八进制**：前缀 `0o`，如 `0o12`
     - **十六进制**：前缀 `0x`，如 `0x1F`

     ```python
     bin_num = 0b1010  # 二进制
     oct_num = 0o12    # 八进制
     hex_num = 0x1F    # 十六进制
     ```
   ::: info
  这些字面量是 Python 程序中最基本的组成部分，允许你直接在代码中表达数据。
   :::
- 注释

  在 Python 中，注释用于向代码添加说明性文本，帮助开发者理解代码的目的或逻辑。Python 支持单行注释和多行注释。

  ### 1. **单行注释**
     单行注释以井号（`#`）开头，后面跟随的内容会被 Python 解释器忽略。通常用于对某行或某段代码进行简单说明。

     ```python
     # 这是一个单行注释
     x = 42  # 定义一个变量并赋值为 42
     ```

  ### 2. **多行注释**
     Python 没有专门的多行注释符号，但可以通过多行字符串（`'''` 或 `"""`）来实现多行注释，虽然它在语法上是字符串，但如果不赋值给任何变量，也可以起到注释作用。

     ```python
     '''
     这是一个多行注释
     它可以跨越多行
     通常用于大段注释说明
     '''
     ```

     或者也可以用多个单行注释来表示多行注释：

     ```python
     # 这是一个多行注释的第一行
     # 这是多行注释的第二行
     # 这是多行注释的第三行
     ```

  ### 3. **文档字符串（docstring）**
     文档字符串是用于函数、类或模块的注释，通常用于描述其功能。文档字符串使用三引号（`'''` 或 `"""`）包裹，并放在函数、类或模块的开头。不同于普通注释，docstring 可以通过运行时访问，通常通过 `help()` 函数调用。

     ```python
     def greet(name):
         """
         这是一个用于问候的函数。
         参数:
         name (str): 被问候的人的名字。
  
         返回:
         str: 问候语。
         """
         return f"Hello, {name}!"
     ```

  在实际开发中，注释对于维护和理解代码至关重要。合理的注释可以帮助团队成员理解复杂的逻辑，也方便自己在日后回顾代码时快速理解。
   ::: tip
  程序员最讨厌两件事：别人代码不写注释，自己代码要写注释！
   :::
- 变量

  在 Python 中，变量用于存储数据。变量的值可以随着程序的运行而改变，因此称为“变量”。Python 中的变量是动态类型的，这意味着你不需要在声明变量时指定其类型，解释器会自动根据赋值的类型来推断。

  ### 1. **变量的声明和赋值**
     Python 通过简单的赋值操作符 `=` 来声明变量并赋值。等号左边是变量名，右边是变量的值。

     ```python
     x = 10  # 将整数 10 赋值给变量 x
     name = "Alice"  # 将字符串 "Alice" 赋值给变量 name
     ```

  ### 2. **变量命名规则**
     - 变量名必须以字母（A-Z，a-z）或下划线 `_` 开头，后面可以是字母、数字或下划线的组合。
     - 变量名对大小写敏感，即 `myVar` 和 `myvar` 是两个不同的变量。
     - 不能使用 Python 的关键字（如 `if`, `for`, `True`, `False` 等）作为变量名。

     **有效的变量名：**
     ```python
     my_var = 10
     _var = "hello"
     var123 = 3.14
     ```

     **无效的变量名：**
     ```python
     1st_var = 10    # 错误，变量不能以数字开头
     for = "loop"    # 错误，for 是关键字
     ```

  ### 3. **变量类型**
     Python 是动态类型语言，变量不需要事先声明类型，赋值时 Python 会根据值的类型自动推断。例如：

     ```python
     x = 10          # 整数 (int)
     y = 3.14        # 浮点数 (float)
     name = "Alice"  # 字符串 (str)
     is_active = True # 布尔值 (bool)
     ```

     可以通过 `type()` 函数查看变量的类型：

     ```python
     print(type(x))  # <class 'int'>
     print(type(y))  # <class 'float'>
     print(type(name))  # <class 'str'>
     ```

  ### 4. **变量的重新赋值**
     变量可以被重新赋值为不同类型的值，Python 允许变量的类型在运行时改变。

     ```python
     x = 10
     print(x)  # 输出 10
  
     x = "Now I am a string"
     print(x)  # 输出 "Now I am a string"
     ```

  ### 5. **多变量赋值**
     Python 允许在一行中给多个变量赋值。

     ```python
     a, b, c = 1, 2, 3  # 一次性给 a, b, c 赋值
     ```

     还可以将相同的值赋给多个变量：

     ```python
     x = y = z = 0  # 将 0 赋给 x, y, z
     ```

  ### 6. **变量的内存管理**
     Python 中的变量是对对象的引用，当你将一个值赋给变量时，实际上该变量是指向了内存中的对象。Python 通过引用计数机制和垃圾回收来自动管理内存。

     ```python
     a = 10
     b = a  # b 也指向 10
     ```

  ### 7. **全局变量和局部变量**
     - **局部变量**：在函数内部定义的变量，只能在该函数内部访问。
     - **全局变量**：在函数外部定义的变量，可以在整个模块中访问。如果需要在函数内部修改全局变量，可以使用 `global` 关键字。

     ```python
     x = 10  # 全局变量
  
     def my_function():
         global x
         x = 20  # 修改全局变量
         y = 5  # 局部变量
  
     my_function()
     print(x)  # 输出 20
     ```

  ### 8. **常量**
     Python 没有真正的常量概念，但可以通过约定来使用全大写的变量名表示常量，通常表示值不应该被修改。

     ```python
     PI = 3.14159  # 约定 PI 是一个常量
     ```

- 数据类型

  Python 中的数据类型定义了变量或对象可以存储的数据的类型。Python 支持多种内置数据类型，涵盖了数值、序列、集合、映射等不同类别。以下是 Python 中常见的数据类型：

  ### 1. **数值类型**
     数值类型用于表示数值，包含三种主要类型：整数、浮点数和复数。

     - **整数 (`int`)**：表示没有小数部分的整数，可以是正数、负数或零。
       ```python
       x = 42
       y = -10
       ```

     - **浮点数 (`float`)**：表示带有小数部分的数值。
       ```python
       pi = 3.14159
       ```

     - **复数 (`complex`)**：表示由实数和虚数部分组成的数值。形式为 `a + bj`，其中 `a` 是实数部分，`b` 是虚数部分，`j` 表示虚数单位。
       ```python
       z = 3 + 4j
       ```

  ### 2. **布尔类型 (`bool`)**
     布尔类型用于表示 `True` 和 `False`，常用于条件判断。
     ```python
     is_active = True
     is_valid = False
     ```

  ### 3. **序列类型**
     序列是按顺序存储的元素的集合，Python 支持三种常见的序列类型：字符串、列表和元组。

     - **字符串 (`str`)**：用于表示文本数据。字符串由一系列字符组成，可以用单引号或双引号定义。
       ```python
       name = "Alice"
       message = 'Hello, World!'
       ```

     - **列表 (`list`)**：表示有序、可变的元素集合。列表中的元素可以是不同类型，并且可以通过索引访问或修改。
       ```python
       fruits = ["apple", "banana", "cherry"]
       fruits[1] = "blueberry"  # 修改第二个元素
       ```

     - **元组 (`tuple`)**：表示有序、不可变的元素集合。与列表类似，但元组的元素一旦定义就不能修改。
       ```python
       coordinates = (10, 20)
       ```

  ### 4. **集合类型 (`set`)**
     集合是无序、不重复元素的集合，支持集合运算，如交集、并集等。

     - **集合 (`set`)**：由花括号 `{}` 定义，元素不重复，且集合中的元素无序。
       ```python
       unique_numbers = {1, 2, 3, 4, 4}  # 4 只会出现一次
       ```

     - **冻结集合 (`frozenset`)**：与 `set` 类似，但其元素是不可变的，定义后不能修改。
       ```python
       frozen_numbers = frozenset([1, 2, 3, 4])
       ```

  ### 5. **映射类型 (`dict`)**
     字典是键值对的无序集合，键必须是唯一的，且通常是不可变类型（如字符串、整数等）。值可以是任何数据类型。

     - **字典 (`dict`)**：用花括号 `{}` 表示，键和值用冒号 `:` 分隔。
       ```python
       person = {"name": "Alice", "age": 30, "city": "New York"}
       print(person["name"])  # 输出 "Alice"
       ```

  ### 6. **None 类型**
     `NoneType` 是一种特殊类型，只有一个值 `None`，用于表示空或无效值。
     ```python
     value = None
     ```

  ### 7. **字节类型**
     用于表示二进制数据。常见的字节类型包括 `bytes` 和 `bytearray`。

     - **字节 (`bytes`)**：不可变的二进制序列。
       ```python
       b = b'hello'
       ```

     - **字节数组 (`bytearray`)**：可变的二进制序列。
       ```python
       b_array = bytearray(b'hello')
       b_array[0] = 97  # 修改字节内容
       ```

  ### 8. **类型转换**
     Python 支持多种数据类型之间的转换，可以使用内置的类型转换函数进行显式转换：

     - **`int()`**：转换为整数
     - **`float()`**：转换为浮点数
     - **`str()`**：转换为字符串
     - **`list()`**：转换为列表
     - **`tuple()`**：转换为元组
     - **`set()`**：转换为集合
     - **`dict()`**：**创建字典**

     ```python
     x = int("42")  # 将字符串 "42" 转换为整数 42
     y = float("3.14")  # 将字符串 "3.14" 转换为浮点数 3.14
     z = str(100)  # 将整数 100 转换为字符串 "100"
     ```

  ### 9. **用户自定义数据类型**
     Python 支持通过类（`class`）来自定义数据类型。用户可以根据需要定义自己的类型。

     ```python
     class Person:
         def __init__(self, name, age):
             self.name = name
             self.age = age
  
     p1 = Person("Alice", 30)
     ```

  ::: tip
  Python 提供了丰富的数据类型，包括基本类型（如整数、浮点数）、序列类型（如列表、元组、字符串）、集合类型、映射类型（字典）以及特殊类型（如 `None`）。这些类型让 Python 具有极大的灵活性，能够处理不同的数据操作需求。
  :::

- 标识符

  在 Python 中，**标识符**是用来标识变量、函数、类、模块或其他对象的名称。它由字母、数字、下划线（_）组成，并遵循特定的命名规则。正确使用标识符是编写可读性高、易于维护代码的重要部分。

  ### 标识符的命名规则：

  1. **首字符要求**：
     - 标识符的第一个字符必须是字母（A-Z 或 a-z）或下划线 `_`。
     - 不能以数字开头。

     ```python
     my_var = 10  # 合法
     _myVar = 20  # 合法
     1st_var = 30  # 非法，不能以数字开头
     ```

  2. **字母、数字和下划线**：
     - 标识符可以包含字母、数字和下划线，不能包含空格或特殊字符（如 `@`、`$`、`%` 等）。
     
     ```python
     variable1 = 5  # 合法
     my_variable_2 = 15  # 合法
     my-variable = 10  # 非法，不能包含减号
     ```

  3. **区分大小写**：
     - Python 中标识符是**区分大小写的**，即 `myVar` 和 `myvar` 是两个不同的标识符。
     
     ```python
     myVar = 10
     myvar = 20  # 这是不同的变量
     ```

  4. **不能使用关键字**：
     - Python 的关键字（保留字）不能作为标识符。Python 提供了 `keyword` 模块，可以用来查看当前版本中的所有关键字。

     ```python
     import keyword
     print(keyword.kwlist)  # 查看 Python 的关键字列表
     ```

     常见关键字包括：`if`、`else`、`for`、`while`、`True`、`False`、`None` 等。

     ```python
     if = 10  # 非法，'if' 是关键字
     ```

  5. **命名规范**：
     虽然 Python 没有强制的命名规范，但遵循 PEP 8 提倡的命名风格可以让代码更具可读性。

     - **变量名和函数名**：应使用小写字母和下划线，采用“蛇形命名法”。
       ```python
       my_variable = 10
       def my_function():
           pass
       ```

     - **类名**：应使用首字母大写的驼峰命名法（PascalCase）。
       ```python
       class MyClass:
           pass
       ```

     - **常量名**：使用全大写字母和下划线来表示常量。
       ```python
       MAX_SIZE = 100
       ```

  6. **特殊的标识符**：
     - **下划线开头的标识符**：单个下划线 `_` 开头的标识符通常表示这是一个**内部变量**，应避免直接访问。
       ```python
       _internal_variable = 42
       ```

     - **双下划线开头的标识符**：双下划线 `__` 开头的标识符通常用于类中的**私有属性或方法**，它们在类外不能直接访问。
       ```python
       class MyClass:
           def __init__(self):
               self.__private_variable = 100
       ```

     - **双下划线前后都有的标识符**：双下划线前后都有的标识符（如 `__init__`、`__name__`）是 Python 的**特殊方法或属性**，通常有特殊用途。
       ```python
       class MyClass:
           def __init__(self):
               pass
       ```

  ### 示例：
  ```python
  # 合法标识符
  my_var = 10
  _myVar = 20
  myVar2 = 30
  PI = 3.14159  # 常量，约定大写
  
  # 不合法标识符
  2nd_var = 40  # 以数字开头，不合法
  my-var = 50   # 使用减号，不合法
  ```
  ::: tip
  Python 的标识符命名遵循一定的规则（如不能以数字开头、不能使用关键字等），并且区分大小写。通过遵循 Python 命名规范（PEP 8），可以编写更清晰和易维护的代码。
  :::

- 运算符

  Python 支持多种类型的运算符，用于执行数学运算、比较、逻辑运算等操作。以下是 Python 中的常见运算符分类及其用法：

  ### 1. **算术运算符**
     用于执行基本的数学运算。

  | 运算符 | 描述               | 示例     |
  | ------ | ------------------ | -------- |
  | `+`    | 加法               | `a + b`  |
  | `-`    | 减法               | `a - b`  |
  | `*`    | 乘法               | `a * b`  |
  | `/`    | 除法               | `a / b`  |
  | `//`   | 取整除（向下取整） | `a // b` |
  | `%`    | 取模（取余数）     | `a % b`  |
  | `**`   | 幂运算（次方）     | `a ** b` |

     **示例：**
     ```python
     a = 10
     b = 3
     print(a + b)  # 输出: 13
     print(a / b)  # 输出: 3.3333333333333335
     print(a // b)  # 输出: 3
     print(a % b)  # 输出: 1
     print(a ** b)  # 输出: 1000
     ```

  ### 2. **比较运算符**
     用于比较两个值，结果返回布尔值 `True` 或 `False`。

  | 运算符 | 描述     | 示例     |
  | ------ | -------- | -------- |
  | `==`   | 等于     | `a == b` |
  | `!=`   | 不等于   | `a != b` |
  | `>`    | 大于     | `a > b`  |
  | `<`    | 小于     | `a < b`  |
  | `>=`   | 大于等于 | `a >= b` |
  | `<=`   | 小于等于 | `a <= b` |

     **示例：**
     ```python
     a = 5
     b = 3
     print(a > b)  # 输出: True
     print(a == b)  # 输出: False
     print(a != b)  # 输出: True
     ```

  ### 3. **赋值运算符**
     用于给变量赋值或修改其值。

  | 运算符 | 描述                                      | 示例    |
  | ------ | ----------------------------------------- | ------- |
  | `=`    | 赋值                                      | `a = 5` |
  | `+=`   | 加法赋值，`a += b` 等价于 `a = a + b`     |         |
  | `-=`   | 减法赋值，`a -= b` 等价于 `a = a - b`     |         |
  | `*=`   | 乘法赋值，`a *= b` 等价于 `a = a * b`     |         |
  | `/=`   | 除法赋值，`a /= b` 等价于 `a = a / b`     |         |
  | `//=`  | 取整除赋值，`a //= b` 等价于 `a = a // b` |         |
  | `%=`   | 取模赋值，`a %= b` 等价于 `a = a % b`     |         |
  | `**=`  | 幂赋值，`a **= b` 等价于 `a = a ** b`     |         |

     **示例：**
     ```python
     a = 10
     a += 5  # 等价于 a = a + 5
     print(a)  # 输出: 15
     ```

  ### 4. **逻辑运算符**
     用于在布尔表达式中进行逻辑运算。

  | 运算符 | 描述                                                  | 示例      |
  | ------ | ----------------------------------------------------- | --------- |
  | `and`  | 逻辑与，当且仅当两个操作数都为 `True` 时结果为 `True` | `a and b` |
  | `or`   | 逻辑或，只要一个操作数为 `True`，结果为 `True`        | `a or b`  |
  | `not`  | 逻辑非，取反操作                                      | `not a`   |

     **示例：**
     ```python
     a = True
     b = False
     print(a and b)  # 输出: False
     print(a or b)  # 输出: True
     print(not a)  # 输出: False
     ```

  ### 5. **位运算符**
     用于对二进制位进行操作。

  | 运算符 | 描述     | 示例     |
  | ------ | -------- | -------- |
  | `&`    | 按位与   | `a & b`  |
  | `|`    | 按位或   | `a | b`  |
  | `^`    | 按位异或 | `a ^ b`  |
  | `~`    | 按位取反 | `~a`     |
  | `<<`   | 左移     | `a << n` |
  | `>>`   | 右移     | `a >> n` |

     **示例：**
     ```python
     a = 5  # 0101
     b = 3  # 0011
     print(a & b)  # 输出: 1 (0001)
     print(a | b)  # 输出: 7 (0111)
     print(a ^ b)  # 输出: 6 (0110)
     print(~a)  # 输出: -6
     print(a << 1)  # 输出: 10 (1010)
     print(a >> 1)  # 输出: 2 (0010)
     ```

  ### 6. **成员运算符**
     用于检查元素是否存在于序列或集合中。

  | 运算符   | 描述                                      | 示例         |
  | -------- | ----------------------------------------- | ------------ |
  | `in`     | 如果在指定序列中找到值，则返回 `True`     | `a in b`     |
  | `not in` | 如果在指定序列中没有找到值，则返回 `True` | `a not in b` |

     **示例：**
     ```python
     lst = [1, 2, 3, 4]
     print(2 in lst)  # 输出: True
     print(5 not in lst)  # 输出: True
     ```

  ### 7. **身份运算符**
     用于比较两个对象的内存地址，判断它们是否是同一个对象。

  | 运算符   | 描述                           | 示例         |
  | -------- | ------------------------------ | ------------ |
  | `is`     | 判断两个变量是否引用同一个对象 | `a is b`     |
  | `is not` | 判断两个变量是否引用不同的对象 | `a is not b` |

     **示例：**
     ```python
     a = [1, 2, 3]
     b = a
     c = [1, 2, 3]
     print(a is b)  # 输出: True
     print(a is c)  # 输出: False
     print(a == c)  # 输出: True（内容相同）
     ```

  ### 8. **三元运算符**
     又称为条件表达式，用于在一行中编写条件判断。

     ```python
     x = 10
     y = 20
     result = "x is greater" if x > y else "y is greater"
     print(result)  # 输出: "y is greater"
     ```
  ::: tip
  Python 提供了丰富的运算符，包括算术、比较、逻辑、位运算、成员运算、身份运算等，它们使得表达复杂的逻辑和数学运算变得更加简单和直观。
  :::

## 第二部分 python中常见的操作

- 循环语句以及判断语句

  在 Python 中，**循环语句**用于重复执行一段代码，直到满足特定条件。Python 提供了两种主要的循环语句：`for` 循环和 `while` 循环。此外，Python 支持循环控制语句，如 `break`、`continue` 和 `else` 子句，用于进一步控制循环的执行流程。

  ### 1. **`for` 循环**
  `for` 循环用于遍历序列（如列表、元组、字符串）或其他可迭代对象，并对每个元素执行相同的操作。

  #### 语法：
  ```python
  for 变量 in 可迭代对象:
      代码块
  ```

  #### 示例：
  ```python
  # 遍历列表中的元素
  fruits = ["apple", "banana", "cherry"]
  for fruit in fruits:
      print(fruit)
  ```

  输出：
  ```
  apple
  banana
  cherry
  ```

  #### 遍历字符串：
  ```python
  for char in "hello":
      print(char)
  ```

  输出：
  ```
  h
  e
  l
  l
  o
  ```

  #### `range()` 函数：
  `range()` 用于生成一系列连续的整数，常与 `for` 循环配合使用。

  ```python
  for i in range(5):
      print(i)
  ```

  输出：
  ```:no-line-numbers
  0
  1
  2
  3
  4
  ```

  可以指定起始值、结束值和步长：

  ```python
  for i in range(2, 10, 2):  # 从 2 开始，间隔 2，直到 10（不包含）
      print(i)
  ```

  输出：
  ```:no-line-numbers
  2
  4
  6
  8
  ```

  ### 2. **`while` 循环**
  `while` 循环在给定条件为 `True` 的情况下反复执行代码块，当条件变为 `False` 时，循环结束。

  #### 语法：
  ```python
  while 条件:
      代码块
  ```

  #### 示例：
  ```python
  i = 0
  while i < 5:
      print(i)
      i += 1
  ```

  输出：
  ```:no-line-numbers
  0
  1
  2
  3
  4
  ```

  ### 3. **循环控制语句**

  #### 3.1 **`break` 语句**
  `break` 用于立即终止当前循环，无论循环条件是否仍为 `True`，程序将跳出循环并继续执行后续代码。

  ```python
  for i in range(5):
      if i == 3:
          break
      print(i)
  ```

  输出：
  ```:no-line-numbers
  0
  1
  2
  ```

  #### 3.2 **`continue` 语句**
  `continue` 用于跳过当前循环的剩余代码，立即开始下一次循环的迭代。

  ```python
  for i in range(5):
      if i == 3:
          continue
      print(i)
  ```

  输出：
  ```:no-line-numbers
  0
  1
  2
  4
  ```

  #### 3.3 **`else` 子句**
  `else` 子句可以与 `for` 或 `while` 循环一起使用。当循环正常结束（即没有被 `break` 终止），`else` 子句的代码将会执行。

  ```python
  for i in range(5):
      print(i)
  else:
      print("循环正常结束")
  ```

  输出：
  ```:no-line-numbers
  0
  1
  2
  3
  4
  循环正常结束
  ```

  如果循环被 `break` 终止，`else` 子句不会执行。

  ```python
  for i in range(5):
      if i == 3:
          break
      print(i)
  else:
      print("循环正常结束")
  ```

  输出：
  ```:no-line-numbers
  0
  1
  2
  ```

  ### 4. **`pass` 语句**
  `pass` 语句用于在循环或其他控制结构中占位，表示什么都不做。通常用于编写需要以后实现的循环或条件分支代码。

  ```python
  for i in range(5):
      if i == 3:
          pass  # 这里先不做任何操作
      else:
          print(i)
  ```

  输出：
  ```:no-line-numbers
  0
  1
  2
  4
  ```

  ### 5. **嵌套循环**
  在一个循环内部可以嵌套另一个循环（无论是 `for` 还是 `while` 循环），这种结构称为嵌套循环。

  #### 示例：
  ```python
  for i in range(3):
      for j in range(2):
          print(f"i = {i}, j = {j}")
  ```

  输出：
  ```
  i = 0, j = 0
  i = 0, j = 1
  i = 1, j = 0
  i = 1, j = 1
  i = 2, j = 0
  i = 2, j = 1
  ```

  ### 6. **无限循环**
  `while` 循环如果条件始终为 `True`，将形成一个无限循环，程序会不断重复执行相同的代码。通常情况下，需结合 `break` 语句或条件改变来终止循环。

  #### 示例：
  ```python
  while True:
      user_input = input("输入 'exit' 退出：")
      if user_input == "exit":
          break
  ```
  ::: tip
  Python 提供了 `for` 和 `while` 循环用于迭代数据结构和执行重复操作。通过结合 `break`、`continue`、`else` 和 `pass` 等控制语句，可以灵活地控制循环流程，满足不同的编程需求。
  :::

- python中的函数

  在 Python 中，**函数**是用于组织和封装代码块的方式，可以多次调用以避免代码重复。函数通过 `def` 关键字来定义，并可以接受参数、返回值。Python 函数可以是带参数的，也可以不带参数，还可以有默认参数、可变长度参数等特性。

  ### 1. **定义函数的基本语法**

  ```python
  def 函数名(参数列表):
      """文档字符串，可选"""
      函数体
      return 返回值  # 可选
  ```

  - **`def`**：定义函数的关键字。
  - **函数名**：遵循 Python 标识符命名规则的名称。
  - **参数列表**：函数接收的参数，可选。
  - **函数体**：包含函数要执行的代码块，必须缩进。
  - **`return`**：用于返回函数的结果，函数可以返回一个或多个值，若没有 `return` 语句，默认返回 `None`。

  ### 2. **示例：定义一个简单的函数**

  ```python
  def greet():
      print("Hello, world!")
  ```

  - 这是一个没有参数和返回值的简单函数。
  - 调用函数时，只需使用函数名并加上括号即可：

  ```python
  greet()  # 输出: Hello, world!
  ```

  ### 3. **带参数的函数**

  可以通过在函数定义中指定参数，来向函数传递数据。调用函数时，必须提供对应的参数值。

  #### 示例：
  ```python
  def greet(name):
      print(f"Hello, {name}!")
  ```

  调用时传入参数：
  ```python
  greet("Alice")  # 输出: Hello, Alice!
  ```

  ### 4. **带返回值的函数**

  使用 `return` 语句返回函数执行的结果。

  #### 示例：
  ```python
  def add(a, b):
      return a + b
  ```

  调用函数并获取返回值：
  ```python
  result = add(3, 5)
  print(result)  # 输出: 8
  ```

  ### 5. **默认参数**

  在定义函数时，可以为参数提供默认值。如果调用函数时没有提供该参数，则使用默认值。

  #### 示例：
  ```python
  def greet(name="Guest"):
      print(f"Hello, {name}!")
  ```

  调用时可以使用默认值，也可以传入自己的参数：
  ```python
  greet()           # 输出: Hello, Guest!
  greet("Alice")    # 输出: Hello, Alice!
  ```

  ### 6. **可变参数**

  Python 支持函数接受任意数量的参数，可以通过在参数名前加 `*` 或 `**` 来实现：
  - **`*args`**：用于接受任意数量的位置参数，返回一个元组。
  - **`**kwargs`**：用于接受任意数量的关键字参数，返回一个字典。

  #### 示例：
  ```python
  # *args 示例：接收不定数量的位置参数
  def add(*args):
      return sum(args)
  
  print(add(1, 2, 3))  # 输出: 6
  print(add(5, 10))    # 输出: 15
  
  # **kwargs 示例：接收不定数量的关键字参数
  def display_info(**kwargs):
      for key, value in kwargs.items():
          print(f"{key}: {value}")
  
  display_info(name="Alice", age=25)  # 输出: name: Alice, age: 25
  ```

  ### 7. **传递可变对象和不可变对象**

  - 在函数调用时，如果传递的是**可变对象**（如列表、字典），在函数内部修改该对象时，会影响到原对象。
  - 如果传递的是**不可变对象**（如字符串、整数），函数内的修改不会影响到外部的原对象。

  #### 示例：
  ```python
  def modify_list(lst):
      lst.append(4)
  
  my_list = [1, 2, 3]
  modify_list(my_list)
  print(my_list)  # 输出: [1, 2, 3, 4]，原列表被修改了
  
  def modify_string(s):
      s = s + " world"
  
  my_string = "hello"
  modify_string(my_string)
  print(my_string)  # 输出: hello，原字符串没有变化
  ```

  ### 8. **嵌套函数**

  在 Python 中，可以在函数内部定义另一个函数，称为嵌套函数。

  #### 示例：
  ```python
  def outer():
      def inner():
          print("This is inner function.")
      print("This is outer function.")
      inner()
  
  outer()
  ```

  输出：
  ```
  This is outer function.
  This is inner function.
  ```

  ### 9. **Lambda 表达式（匿名函数）**

  Python 还支持使用 `lambda` 关键字创建匿名函数。Lambda 函数没有函数名，只能包含一个表达式。

  #### 语法：
  ```python
  lambda 参数列表: 表达式
  ```

  #### 示例：
  ```python
  add = lambda a, b: a + b
  print(add(3, 5))  # 输出: 8
  ```

  Lambda 通常用于简单的场景，如排序、过滤等：

  ```python
  nums = [1, 2, 3, 4, 5]
  squared_nums = list(map(lambda x: x ** 2, nums))
  print(squared_nums)  # 输出: [1, 4, 9, 16, 25]
  ```

  ### 10. **函数文档字符串（Docstring）**

  文档字符串用于为函数提供说明，可以通过 `"""..."""` 来编写多行注释，帮助他人理解函数的功能。

  #### 示例：
  ```python
  def greet(name):
      """这个函数用于问候用户"""
      print(f"Hello, {name}!")
  ```

  可以使用内置函数 `help()` 或 `.__doc__` 属性查看函数的文档字符串：
  ```python
  help(greet)
  print(greet.__doc__)
  ```
  ::: tip
  ### 总结：

  - 使用 `def` 定义函数，函数可以有参数和返回值。
  - 函数可以有默认参数、可变参数（`*args` 和 `**kwargs`），支持嵌套函数和 Lambda 函数。
  - 函数文档字符串有助于提高代码的可读性和可维护性。

  通过定义函数，可以将常用的代码封装起来，提高代码的复用性和模块化。
  :::
  
- python中数据容器的操作

  在 Python 中，**数据容器**是存储和管理数据的结构，常用的容器包括：**列表（List）**、**元组（Tuple）**、**集合（Set）**和**字典（Dictionary）**。这些容器各有特点，支持不同类型的数据存储与操作。下面对这些常见数据容器及相关操作进行总结。

  ---

  ### 1. **列表（List）**
  列表是 Python 中最常用的可变序列类型，可以存储任意类型的数据，且允许元素重复。

  #### 定义与操作：
  ```python
  # 定义一个列表
  my_list = [1, 2, 3, "apple", True]
  
  # 访问元素
  print(my_list[0])  # 输出: 1
  print(my_list[-1])  # 输出: True
  
  # 修改元素
  my_list[1] = "banana"
  print(my_list)  # 输出: [1, 'banana', 3, 'apple', True]
  
  # 列表长度
  print(len(my_list))  # 输出: 5
  
  # 添加元素
  my_list.append("new")  # 在末尾添加
  my_list.insert(1, "inserted")  # 在索引1处插入
  print(my_list)
  
  # 删除元素
  my_list.remove("apple")  # 移除指定元素
  popped = my_list.pop()  # 弹出最后一个元素
  print(popped)
  
  # 切片
  print(my_list[1:3])  # 输出: ['inserted', 'banana']
  
  # 列表合并
  another_list = [4, 5, 6]
  combined = my_list + another_list  # 直接用 + 号
  print(combined)
  
  # 列表排序
  num_list = [3, 1, 2, 5]
  num_list.sort()
  print(num_list)  # 输出: [1, 2, 3, 5]
  ```

  ---

  ### 2. **元组（Tuple）**
  元组是不可变的序列类型，一旦定义，元素无法修改。与列表类似，但因为其不可变特性，通常用于保存不需要改变的数据。

  #### 定义与操作：
  ```python
  # 定义一个元组
  my_tuple = (1, 2, 3, "apple", True)
  
  # 访问元素
  print(my_tuple[0])  # 输出: 1
  
  # 元组长度
  print(len(my_tuple))  # 输出: 5
  
  # 元组不可变，不能修改元素
  # my_tuple[1] = "banana"  # 这会引发错误
  
  # 元组的切片
  print(my_tuple[1:3])  # 输出: (2, 3)
  
  # 元组可以通过索引获取单个元素
  print(my_tuple[-1])  # 输出: True
  ```

  #### 元组的解包：
  ```python
  # 元组解包
  a, b, c = (1, 2, 3)
  print(a, b, c)  # 输出: 1 2 3
  ```

  #### 特殊情况：单元素元组
  ```python
  single_element_tuple = (1,)  # 注意逗号
  print(type(single_element_tuple))  # 输出: <class 'tuple'>
  ```

  ---

  ### 3. **集合（Set）**
  集合是一个无序且元素唯一的容器，常用于去重和集合运算（如交集、并集等）。

  #### 定义与操作：
  ```python
  # 定义集合
  my_set = {1, 2, 3, "apple", True}
  
  # 集合中不允许重复元素
  my_set = {1, 2, 2, 3, 3, 4}  # 重复的元素会自动去重
  print(my_set)  # 输出: {1, 2, 3, 4}
  
  # 添加元素
  my_set.add(5)
  print(my_set)  # 输出: {1, 2, 3, 4, 5}
  
  # 删除元素
  my_set.remove(3)
  print(my_set)  # 输出: {1, 2, 4, 5}
  
  # 检查元素是否存在
  print(2 in my_set)  # 输出: True
  
  # 集合的交集、并集、差集等操作
  set_a = {1, 2, 3}
  set_b = {3, 4, 5}
  
  # 并集
  print(set_a | set_b)  # 输出: {1, 2, 3, 4, 5}
  
  # 交集
  print(set_a & set_b)  # 输出: {3}
  
  # 差集
  print(set_a - set_b)  # 输出: {1, 2}
  ```

  #### 冻结集合（frozenset）：
  `frozenset` 是不可变的集合，定义后无法修改。
  ```python
  frozen_set = frozenset([1, 2, 3])
  # frozen_set.add(4)  # 这会引发错误
  ```

  ---

  ### 4. **字典（Dictionary）**
  字典是一种键值对存储的数据结构，允许通过键访问值。字典中的键是唯一的，值可以是任何类型。

  #### 定义与操作：
  ```python
  # 定义字典
  my_dict = {"name": "Alice", "age": 25, "city": "New York"}
  
  # 访问值
  print(my_dict["name"])  # 输出: Alice
  
  # 添加或修改键值对
  my_dict["age"] = 26  # 修改
  my_dict["job"] = "Developer"  # 添加新键值对
  print(my_dict)
  
  # 删除键值对
  del my_dict["city"]
  print(my_dict)
  
  # 字典长度
  print(len(my_dict))  # 输出: 3
  
  # 检查键是否存在
  print("name" in my_dict)  # 输出: True
  
  # 遍历字典
  for key, value in my_dict.items():
      print(f"{key}: {value}")
  ```

  #### 字典方法：
  ```python
  # 获取键对应的值，若键不存在则返回默认值
  print(my_dict.get("city", "Not Found"))  # 输出: Not Found
  
  # 获取字典中所有键
  print(my_dict.keys())  # 输出: dict_keys(['name', 'age', 'job'])
  
  # 获取字典中所有值
  print(my_dict.values())  # 输出: dict_values(['Alice', 26, 'Developer'])
  
  # 获取所有键值对
  print(my_dict.items())  # 输出: dict_items([('name', 'Alice'), ('age', 26), ('job', 'Developer')])
  ```

  ---

  ### 5. **容器类型的常见操作**

  #### 通用操作：
  无论是列表、元组、集合还是字典，都可以进行一些通用的操作：

  - **遍历**：通过 `for` 循环遍历元素或键值对。
  - **`in` 运算符**：检查某个元素或键是否存在于容器中。
  - **长度**：使用 `len()` 函数获取容器的长度。
  - **删除**：通过 `del` 或特定方法（如 `remove()`、`pop()`）删除元素。

  #### 容器类型的转换：
  可以通过类型转换函数将一种容器转换为另一种容器类型：
  ```python
  # 列表转集合
  my_list = [1, 2, 2, 3]
  my_set = set(my_list)
  print(my_set)  # 输出: {1, 2, 3}
  
  # 集合转列表
  new_list = list(my_set)
  print(new_list)  # 输出: [1, 2, 3]
  
  # 列表转元组
  my_tuple = tuple(my_list)
  print(my_tuple)  # 输出: (1, 2, 2, 3)
  ```

  ---

  ### 总结：

  | 特点     | 列表                         | 元组                           | 字符串             | 集合                   | 字典                                     |
  | -------- | ---------------------------- | ------------------------------ | ------------------ | ---------------------- | ---------------------------------------- |
  | 元素数量 | 支持多个                     | 支持多个                       | 支持多个           | 支持多个               | 支持多个                                 |
  | 元素类型 | 任意                         | 任意                           | **仅字符**         | 任意                   | 键：除字典外任意类型<br/>值：任意类型    |
  | 下标索引 | 支持                         | 支持                           | 支持               | **不支持**             | **不支持**                               |
  | 重复元素 | 支持                         | 支持                           | 支持               | **不支持**             | 键不允许重复，值可以重复                 |
  | 可修改性 | 支持                         | **不支持**                     | **不支持**         | 支持                   | 支持                                     |
  | 数据有序 | 是                           | 是                             | 是                 | **否**                 | **否**（Python 3.7+ 插入顺序保留）       |
  | 使用场景 | 可修改，记录可重复数据的场景 | 不可修改，记录可重复数据的场景 | 一串字符的记录场景 | 不可重复数据的记录场景 | 通过键快速检索值，适合映射关系的存储场景 |
