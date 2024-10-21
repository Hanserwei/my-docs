# python进阶学习笔记
## 一、对文件的读、写、追加操作

在 Python 中，文件的读写和追加操作可以通过内置的 `open()` 函数进行，结合不同的模式来实现对文件的读取、写入或追加。以下是如何使用 Python 进行文件读写和追加的详细说明：

### 1. **文件的打开与关闭**

Python 使用 `open()` 函数打开文件。它返回一个文件对象，并可以通过该对象执行读、写或追加操作。

```python
file = open('file.txt', 'r')  # 打开文件，'r' 表示读取模式
file.close()  # 用完文件后关闭它
```

文件打开模式有多种，常见的有：

- `'r'`：读取模式（默认），文件必须存在。
- `'w'`：写入模式，若文件不存在则创建；若文件存在，则清空内容。
- `'a'`：追加模式，若文件不存在则创建；若文件存在，则在文件末尾追加内容。
- `'b'`：以二进制模式打开文件（与上述模式一起使用，如 `'rb'`、`'wb'` 等）。
- `'+'`：读写模式（与其他模式一起使用，如 `'r+'`、`'w+'` 等）。

### 2. **读取文件**

可以通过多种方式从文件中读取内容：

- `read()`：一次读取整个文件。
- `readline()`：逐行读取文件。
- `readlines()`：读取所有行并返回一个列表。

#### 示例：
```python
# 读取整个文件内容
with open('file.txt', 'r') as file:
    content = file.read()
    print(content)

# 按行读取文件
with open('file.txt', 'r') as file:
    for line in file:
        print(line.strip())  # 去除行末的换行符
```

### 3. **写入文件**

写入模式 `'w'` 会清空文件的内容，然后写入新的内容。

#### 示例：
```python
# 写入文件，若文件不存在则创建
with open('file.txt', 'w') as file:
    file.write("Hello, world!\n")
    file.write("This is a new line.\n")
```

写入模式会覆盖现有内容，因此需要谨慎使用。

### 4. **追加文件**

追加模式 `'a'` 会在文件末尾添加新的内容，而不会覆盖现有内容。

#### 示例：
```python
# 追加内容到文件末尾
with open('file.txt', 'a') as file:
    file.write("This is an appended line.\n")
```

每次运行时，新内容会追加到文件的末尾。

### 5. **读写模式**

可以同时进行读和写操作，使用 `'r+'` 模式。

#### 示例：
```python
# 读写模式，同时读写文件
with open('file.txt', 'r+') as file:
    content = file.read()  # 先读取内容
    file.write("\nNew line added after reading.")  # 在读取后写入新内容
```

### 6. **二进制文件读写**

对于非文本文件（如图片、视频），需要以二进制模式打开文件。

#### 示例：
```python
# 以二进制模式读取文件
with open('image.jpg', 'rb') as file:
    content = file.read()

# 以二进制模式写入文件
with open('copy.jpg', 'wb') as file:
    file.write(content)
```

### 7. **常见操作示例**

#### 读取文件内容并写入新文件：
```python
with open('source.txt', 'r') as src_file, open('destination.txt', 'w') as dest_file:
    content = src_file.read()
    dest_file.write(content)
```

#### 逐行追加内容到文件：
```python
lines_to_append = ["Line 1", "Line 2", "Line 3"]
with open('file.txt', 'a') as file:
    for line in lines_to_append:
        file.write(line + "\n")
```

### 8. **`with` 语句的优势**

在文件操作中，使用 `with` 语句可以确保在文件操作完成后自动关闭文件，避免文件未及时关闭引起的资源泄漏问题。

```python
with open('file.txt', 'r') as file:
    content = file.read()
```

相比手动关闭文件：
```python
file = open('file.txt', 'r')
content = file.read()
file.close()
```

### 总结：
- **读取**：使用 `'r'` 模式，使用 `read()`、`readline()` 或 `readlines()` 读取文件内容。
- **写入**：使用 `'w'` 模式写入文件内容，覆盖文件原有内容。
- **追加**：使用 `'a'` 模式，在文件末尾追加内容。
- **读写**：使用 `'r+'` 模式，同时进行读和写操作。
- **二进制操作**：处理非文本文件时使用 `'b'` 模式（如 `'rb'`、`'wb'`）。

## 二、对代码中异常的处理

在 Python 中，异常处理通过 `try-except` 语句实现，用来捕获和处理在程序运行过程中可能发生的错误。异常处理可以防止程序因为错误而崩溃，并且允许开发者提供优雅的错误处理机制。

### 1. **常见异常**

Python 中有很多常见的异常类型，例如：

- `ZeroDivisionError`: 除零错误。
- `IndexError`: 索引超出范围。
- `KeyError`: 字典中查找不存在的键。
- `ValueError`: 传递给函数的参数类型不匹配。
- `FileNotFoundError`: 试图打开不存在的文件。
- `TypeError`: 操作或函数应用于不适合的对象类型。
- `IOError`: 输入/输出操作失败。

### 2. **`try-except` 基本语法**

`try-except` 语句用于捕获异常并进行相应的处理。基本结构如下：

```python
try:
    # 尝试执行的代码块
except ExceptionType:
    # 如果发生了 ExceptionType 类型的异常，执行此处代码
```

#### 示例：
```python
try:
    result = 10 / 0  # 这会引发 ZeroDivisionError 异常
except ZeroDivisionError:
    print("不能除以零！")
```

输出：
```
不能除以零！
```

### 3. **捕获多个异常**

可以通过多个 `except` 分支来捕获不同类型的异常：

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零！")
except TypeError:
    print("类型错误！")
```

如果程序可能引发多种类型的异常，你可以将不同的异常类型放在同一个 `except` 语句中：

```python
try:
    result = 10 / 0
except (ZeroDivisionError, TypeError):
    print("发生了除零错误或类型错误")
```

### 4. **捕获所有异常**

如果想捕获所有可能的异常，可以使用不指定异常类型的 `except` 块：

```python
try:
    result = 10 / 0
except:
    print("捕获到一个异常")
```

**注意**：使用不指定异常类型的 `except` 会捕获所有异常，不管具体是什么类型，但通常应避免这种做法，因为这可能隐藏真实的问题。最好只捕获你希望处理的特定异常类型。

### 5. **`else` 语句**

`try-except` 还可以结合 `else` 语句使用，当 `try` 代码块中没有发生异常时，`else` 中的代码会执行。

```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("不能除以零！")
else:
    print("除法成功，结果是:", result)
```

输出：
```
除法成功，结果是: 5.0
```

### 6. **`finally` 语句**

`finally` 块无论是否发生异常，都会执行，通常用于清理资源（如关闭文件或数据库连接）。

```python
try:
    file = open('example.txt', 'r')
    # 进行文件操作
except FileNotFoundError:
    print("文件未找到")
finally:
    file.close()  # 确保文件最终关闭
```

即使发生了异常，`finally` 块中的代码也会执行，用来释放资源或执行清理任务。

### 7. **自定义异常**

可以通过继承 `Exception` 类来定义自定义异常。

#### 示例：
```python
class MyCustomError(Exception):
    def __init__(self, message):
        self.message = message

# 引发自定义异常
try:
    raise MyCustomError("这是一个自定义错误")
except MyCustomError as e:
    print(e.message)
```

输出：
```
这是一个自定义错误
```

### 8. **主动引发异常**

可以通过 `raise` 关键字主动引发异常。

```python
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("除数不能为零")
    return a / b

try:
    result = divide(10, 0)
except ZeroDivisionError as e:
    print(e)
```

输出：
```
除数不能为零
```

### 9. **嵌套异常处理**

可以在 `try` 块中嵌套另一组 `try-except`，从而处理不同级别的异常。

#### 示例：
```python
try:
    try:
        result = 10 / 0
    except ZeroDivisionError:
        print("处理内部的除零错误")
        raise  # 重新引发异常
except:
    print("捕获到重新引发的异常")
```

输出：
```
处理内部的除零错误
捕获到重新引发的异常
```

### 10. **`assert` 语句**

`assert` 语句用于在程序中检查某个条件是否为 `True`，如果条件为 `False`，则引发 `AssertionError`。

```python
x = -1
assert x >= 0, "x 必须为非负数"  # 如果 x < 0，将引发 AssertionError
```

### 总结：

- **`try-except`**：用于捕获异常并处理。
- **`else`**：当 `try` 中的代码没有异常时执行。
- **`finally`**：无论是否发生异常，都会执行。
- **自定义异常**：通过继承 `Exception` 类来定义自己的异常类型。
- **`raise`**：主动引发异常。

## 三、Python中的类对象以及方法

在 Python 中，类和对象是面向对象编程（OOP）的核心概念。通过定义类和创建对象，可以使代码更加模块化和可重用。类定义了一类事物的属性和行为，而对象则是该类的具体实例。

### 1. **类和对象的定义**

#### 类的定义
类可以通过 `class` 关键字定义。类通常包含属性（变量）和方法（函数）。

```python
class MyClass:
    # 类的属性
    attribute = "我是类的属性"
    
    # 类的方法
    def my_method(self):
        print("我是类的方法")
```

#### 对象的创建
类定义完成后，可以通过调用类名来创建一个对象（实例）。

```python
# 创建对象
obj = MyClass()

# 访问属性
print(obj.attribute)

# 调用方法
obj.my_method()
```

### 2. **类的构造方法 (`__init__`)**

构造方法 `__init__` 是类的初始化方法，每当创建对象时，`__init__` 会自动执行。它通常用于初始化对象的属性。

```python
class Person:
    # 构造方法
    def __init__(self, name, age):
        self.name = name  # 实例属性
        self.age = age    # 实例属性
    
    # 方法
    def introduce(self):
        print(f"我的名字是 {self.name}，我 {self.age} 岁。")

# 创建对象
p1 = Person("张三", 25)
p1.introduce()
```

输出：
```
我的名字是 张三，我 25 岁。
```

在 `__init__` 中定义的参数，必须在实例化对象时传入。

### 3. **实例属性和类属性**

- **实例属性**：通过 `self` 关键字定义，每个对象都有独立的实例属性。对象之间互不影响。
- **类属性**：类属性属于类本身，所有对象共享同一个类属性。

```python
class MyClass:
    class_attribute = "我是类属性"  # 类属性
    
    def __init__(self, instance_attribute):
        self.instance_attribute = instance_attribute  # 实例属性

# 创建对象
obj1 = MyClass("我是 obj1 的实例属性")
obj2 = MyClass("我是 obj2 的实例属性")

# 访问类属性
print(obj1.class_attribute)  # 输出: 我是类属性
print(obj2.class_attribute)  # 输出: 我是类属性

# 访问实例属性
print(obj1.instance_attribute)  # 输出: 我是 obj1 的实例属性
print(obj2.instance_attribute)  # 输出: 我是 obj2 的实例属性
```

### 4. **方法的类型**

类中定义的方法可以分为三种类型：实例方法、类方法和静态方法。

#### 实例方法
实例方法是最常见的，定义时必须包含 `self` 参数，代表对象本身。

```python
class MyClass:
    def instance_method(self):
        print("这是一个实例方法")
```

#### 类方法
类方法使用 `@classmethod` 装饰器定义，第一个参数是 `cls`，表示类本身。类方法可以访问类属性，但不能访问实例属性。

```python
class MyClass:
    class_attribute = "我是类属性"

    @classmethod
    def class_method(cls):
        print(f"类方法：{cls.class_attribute}")

# 调用类方法
MyClass.class_method()
```

#### 静态方法
静态方法使用 `@staticmethod` 装饰器定义，它不需要 `self` 或 `cls` 参数。静态方法与类无直接关联，它们通常是与类逻辑相关的实用函数。

```python
class MyClass:
    @staticmethod
    def static_method():
        print("这是一个静态方法")

# 调用静态方法
MyClass.static_method()
```

### 5. **类的继承**

继承允许一个类继承另一个类的属性和方法，从而实现代码复用。子类可以继承父类，也可以重写父类的方法。

```python
# 定义父类
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print(f"{self.name} 发出声音")

# 定义子类
class Dog(Animal):
    def speak(self):
        print(f"{self.name} 说：汪汪！")

# 创建对象
dog = Dog("小黑")
dog.speak()
```

输出：
```
小黑 说：汪汪！
```

#### 调用父类方法
在子类中可以使用 `super()` 函数调用父类的方法。

```python
class Dog(Animal):
    def speak(self):
        super().speak()  # 调用父类的 speak 方法
        print(f"{self.name} 说：汪汪！")
```

### 6. **私有属性和私有方法**

通过在属性或方法前加两个下划线（`__`），可以将其声明为私有的。这意味着它们只能在类的内部访问。

```python
class MyClass:
    def __init__(self, name):
        self.__name = name  # 私有属性
    
    def __private_method(self):
        print("这是一个私有方法")

    def public_method(self):
        print(f"名字是 {self.__name}")
        self.__private_method()

# 创建对象
obj = MyClass("张三")
obj.public_method()

# 尝试直接访问私有属性或方法会报错
# print(obj.__name)  # AttributeError
# obj.__private_method()  # AttributeError
```

虽然无法直接访问私有属性或方法，但可以通过类内部的公有方法间接访问它们。

### 7. **特殊方法**

Python 提供了一些特殊方法，通常以双下划线开头和结尾。常见的特殊方法有：

- `__init__(self)`：构造方法，用于初始化对象。
- `__str__(self)`：用于返回对象的字符串表示。
- `__repr__(self)`：用于返回对象的“官方”表示，通常用于调试。
- `__len__(self)`：允许我们使用 `len()` 函数获取对象的长度。

#### 示例：
```python
class MyClass:
    def __init__(self, name):
        self.name = name
    
    def __str__(self):
        return f"MyClass(name={self.name})"

# 创建对象
obj = MyClass("张三")
print(obj)  # 输出: MyClass(name=张三)
```

### 总结：

- **类** 是面向对象编程的基础，它定义了一组对象的属性和行为。
- **对象** 是类的具体实例，通过类定义创建。
- **方法** 分为实例方法、类方法和静态方法。
- **继承** 允许一个类继承另一个类的属性和方法，实现代码复用。
- **私有属性和方法** 用于限制访问，只能在类内部使用。
- **特殊方法** 使得类对象与 Python 内置的操作（如 `len()`、`str()`）更好地兼容。

通过类和对象，Python 能够实现强大的面向对象编程，增强代码的组织性和可维护性。

## 四、魔术方法

在 Python 中，**魔术方法**（也称为“特殊方法”或“dunder methods”，因为它们的名称前后都有双下划线）为类提供了特定功能的封装。这些方法可以重载某些内置的操作符或行为，例如对象的比较、字符串表示、长度获取等。魔术方法通过为类添加特殊的行为，使其更像内置类型，并且可以和 Python 的一些内置函数、运算符协同工作。

下面列出 Python 中常见的魔术方法及其用途：

### 1. **对象初始化与销毁**
- `__init__(self, ...)`：构造方法，当对象被实例化时调用，用于初始化对象的属性。
  ```python
  class MyClass:
      def __init__(self, name):
          self.name = name
  ```
  
- `__new__(cls, ...)`：创建实例的方法，负责控制对象的创建。通常很少直接使用，除非涉及不可变类型（如元组、字符串）时。
  ```python
  class MyClass:
      def __new__(cls):
          return super().__new__(cls)
  ```

- `__del__(self)`：析构方法，当对象被销毁时调用。用于进行资源清理。
  ```python
  class MyClass:
      def __del__(self):
          print("对象被销毁")
  ```

### 2. **对象的字符串表示**
- `__str__(self)`：定义对象的**可读**字符串表示，`print()` 或 `str()` 会调用该方法。
  ```python
  class MyClass:
      def __str__(self):
          return f"MyClass(name={self.name})"
  ```
  
- `__repr__(self)`：定义对象的**官方**字符串表示，`repr()` 或在交互式解释器中直接输入对象时调用。通常返回可以用来重新创建该对象的字符串。
  ```python
  class MyClass:
      def __repr__(self):
          return f"MyClass(name={self.name})"
  ```

### 3. **运算符重载**
通过重载魔术方法，可以让类对象支持像加减乘除这样的运算符操作。

- 算术运算符：
  - `__add__(self, other)`：重载加法运算符 `+`
  - `__sub__(self, other)`：重载减法运算符 `-`
  - `__mul__(self, other)`：重载乘法运算符 `*`
  - `__truediv__(self, other)`：重载除法运算符 `/`
  - `__floordiv__(self, other)`：重载地板除法运算符 `//`
  - `__mod__(self, other)`：重载取模运算符 `%`
  - `__pow__(self, other)`：重载幂运算符 `**`

  示例：
  ```python
  class Vector:
      def __init__(self, x, y):
          self.x = x
          self.y = y
      
      def __add__(self, other):
          return Vector(self.x + other.x, self.y + other.y)
      
      def __repr__(self):
          return f"Vector({self.x}, {self.y})"
  
  v1 = Vector(1, 2)
  v2 = Vector(3, 4)
  print(v1 + v2)  # 输出: Vector(4, 6)
  ```

- 比较运算符：
  - `__eq__(self, other)`：重载相等比较 `==`
  - `__ne__(self, other)`：重载不等比较 `!=`
  - `__lt__(self, other)`：重载小于 `<`
  - `__gt__(self, other)`：重载大于 `>`
  - `__le__(self, other)`：重载小于等于 `<=`
  - `__ge__(self, other)`：重载大于等于 `>=`

  示例：
  ```python
  class Person:
      def __init__(self, name, age):
          self.name = name
          self.age = age
      
      def __eq__(self, other):
          return self.age == other.age
      
  p1 = Person("张三", 25)
  p2 = Person("李四", 25)
  print(p1 == p2)  # 输出: True
  ```

### 4. **容器相关魔术方法**
这些方法使对象像容器一样工作，支持索引、长度和成员测试等操作。

- `__len__(self)`：返回对象的长度，`len()` 会调用这个方法。
  ```python
  class MyList:
      def __init__(self, items):
          self.items = items
      
      def __len__(self):
          return len(self.items)
  
  my_list = MyList([1, 2, 3])
  print(len(my_list))  # 输出: 3
  ```

- `__getitem__(self, key)`：通过索引获取元素，`[]` 操作会调用该方法。
  ```python
  class MyList:
      def __init__(self, items):
          self.items = items
      
      def __getitem__(self, index):
          return self.items[index]
  
  my_list = MyList([1, 2, 3])
  print(my_list[1])  # 输出: 2
  ```

- `__setitem__(self, key, value)`：通过索引设置元素。
  ```python
  class MyList:
      def __init__(self, items):
          self.items = items
      
      def __setitem__(self, index, value):
          self.items[index] = value
  
  my_list = MyList([1, 2, 3])
  my_list[1] = 10
  print(my_list.items)  # 输出: [1, 10, 3]
  ```

- `__delitem__(self, key)`：通过索引删除元素。
  ```python
  class MyList:
      def __init__(self, items):
          self.items = items
      
      def __delitem__(self, index):
          del self.items[index]
  
  my_list = MyList([1, 2, 3])
  del my_list[1]
  print(my_list.items)  # 输出: [1, 3]
  ```

- `__contains__(self, item)`：实现 `in` 运算符，检查成员是否在容器中。
  ```python
  class MyList:
      def __init__(self, items):
          self.items = items
      
      def __contains__(self, item):
          return item in self.items
  
  my_list = MyList([1, 2, 3])
  print(2 in my_list)  # 输出: True
  ```

### 5. **对象属性的魔术方法**
这些方法用于控制属性的访问、设置和删除。

- `__getattr__(self, name)`：当访问不存在的属性时调用。
  ```python
  class MyClass:
      def __getattr__(self, name):
          return f"属性 {name} 不存在"
  
  obj = MyClass()
  print(obj.some_attribute)  # 输出: 属性 some_attribute 不存在
  ```

- `__setattr__(self, name, value)`：为属性赋值时调用。
  ```python
  class MyClass:
      def __setattr__(self, name, value):
          print(f"设置属性 {name} 为 {value}")
          super().__setattr__(name, value)
  
  obj = MyClass()
  obj.attribute = 10  # 输出: 设置属性 attribute 为 10
  ```

- `__delattr__(self, name)`：删除属性时调用。
  ```python
  class MyClass:
      def __delattr__(self, name):
          print(f"删除属性 {name}")
          super().__delattr__(name)
  
  obj = MyClass()
  obj.attribute = 10
  del obj.attribute  # 输出: 删除属性 attribute
  ```

### 6. **上下文管理**
上下文管理协议允许对象使用 `with` 语句，通常用于资源管理，如文件处理、数据库连接等。

- `__enter__(self)`：在 `with` 语句块开始时调用。
- `__exit__(self, exc_type, exc_value, traceback)`：在 `with` 语句块结束时调用。

```python
class MyContextManager:
    def __enter__(self):
        print("进入上下文")
        return self
    
    def __exit__(self, exc_type, exc_value, traceback):
        print("退出上下文")

with MyContextManager():
    print("在上下文中")
```

输出：
```
进入上下文
在上下文中
退出上下文
```

### 7. **可调用对象**
- `__call__(self, *args, **kwargs)`：使对象像函数一样可调用。
  ```python
  class MyClass:
      def __call__(self, *args, **kwargs):
          print("对象被调用，参数：", args, kwargs)
  
  obj = MyClass()
  obj(1, 2, 3, key="value")  # 输出: 对象被调用，参数： (1, 2, 3) {'key': 'value'}
  ```

### 总结
魔术方法使得 Python 的类具有更灵活和自然的行为。通过重载这些方法，类可以与 Python 的内置操作符、函数、语法特性无缝集成，从而提高代码的可读性和可扩展性。这些方法广泛应用于自定义数据结构、运算符重载、上下文管理等高级场景。

## 五、变量类型的注解

在 Python 中，变量类型注解（**Type Hints**）是一种用于**指定变量类型**的机制。尽管 Python 是动态类型语言，类型注解不会改变 Python 的动态特性，它只是用于**代码提示**和**静态类型检查**。类型注解是 Python 3.5 引入的，在编写更具可读性和健壮性的代码时，能为开发者提供极大的帮助。

类型注解通常用于函数参数、函数返回值以及变量定义。

### 1. **变量的类型注解**

在定义变量时，可以使用 `:` 来为变量添加类型注解。语法格式为：`变量名: 类型`。这只是给出变量类型的提示，Python 本身不会强制进行类型检查。

```python
# 变量类型注解示例
age: int = 25
name: str = "张三"
height: float = 1.75
is_student: bool = True
```

虽然在上面我们指定了变量的类型，但 Python 仍然允许你为变量赋予其他类型的值（因为 Python 是动态类型语言）。然而，静态类型检查工具（如 `mypy`）会对此给出警告。

```python
age: int = "25"  # 这是不合法的类型注解，工具可能会发出警告
```

### 2. **函数的类型注解**

在函数的定义中，可以为**参数**和**返回值**添加类型注解，以提高函数的可读性和代码的健壮性。

#### 2.1 函数参数类型注解

通过在函数参数后使用冒号 `:` 来指定参数类型，格式如下：
```python
def 函数名(参数名: 类型, 参数名: 类型) -> 返回值类型:
    pass
```

示例：
```python
def greet(name: str) -> None:
    print(f"Hello, {name}!")
```

#### 2.2 函数返回值类型注解

可以使用 `->` 符号为函数的返回值指定类型。如果函数没有返回值，可以使用 `None`。

示例：
```python
def add(a: int, b: int) -> int:
    return a + b
```

#### 2.3 综合示例

为函数的多个参数和返回值进行类型注解：
```python
def calculate_area(length: float, width: float) -> float:
    return length * width
```

### 3. **常用类型注解**

- `int`：整数类型
- `float`：浮点数类型
- `str`：字符串类型
- `bool`：布尔类型
- `List[type]`：列表类型，`type` 指定列表中元素的类型
- `Dict[key_type, value_type]`：字典类型，`key_type` 和 `value_type` 指定键和值的类型
- `Tuple[type1, type2, ...]`：元组类型
- `Set[type]`：集合类型
- `Optional[type]`：表示该值可以为某种类型或者为 `None`
- `Union[type1, type2, ...]`：表示该值可以为多种类型之一
- `Any`：表示可以是任意类型

#### 3.1 列表、字典、元组和集合类型注解

```python
from typing import List, Dict, Tuple, Set

names: List[str] = ["张三", "李四"]
scores: Dict[str, int] = {"张三": 90, "李四": 85}
coordinates: Tuple[float, float] = (39.9, 116.3)
unique_numbers: Set[int] = {1, 2, 3}
```

#### 3.2 `Optional` 和 `Union`

- `Optional[type]`：表示该变量或返回值可以为指定类型或 `None`。
  
  ```python
  from typing import Optional
  
  def get_name(user_id: int) -> Optional[str]:
      if user_id == 1:
          return "张三"
      return None
  ```

- `Union[type1, type2, ...]`：表示可以是多种类型之一。

  ```python
  from typing import Union
  
  def get_data(value: Union[int, str]) -> str:
      if isinstance(value, int):
          return f"整数：{value}"
      return f"字符串：{value}"
  ```

### 4. **类型别名**

在某些情况下，复杂类型注解可能显得冗长。通过使用类型别名，可以简化复杂的类型表达。

```python
from typing import List

# 类型别名
Vector = List[float]

def scale(scalar: float, vector: Vector) -> Vector:
    return [scalar * num for num in vector]
```

### 5. **高级类型注解：泛型**

通过泛型（Generic），可以定义能够适用于多种类型的通用类或函数。常用的泛型类型包括 `List[T]`、`Dict[K, V]` 等。

```python
from typing import TypeVar, List

T = TypeVar('T')  # 声明一个类型变量 T

def reverse_list(items: List[T]) -> List[T]:
    return items[::-1]

print(reverse_list([1, 2, 3]))  # 输出: [3, 2, 1]
print(reverse_list(["a", "b", "c"]))  # 输出: ['c', 'b', 'a']
```

### 6. **类型检查工具：`mypy`**

为了验证类型注解是否正确，可以使用 `mypy` 这样的类型检查工具。它能够静态检查代码中的类型错误。例如，安装 `mypy` 后，可以在终端运行以下命令：

```bash
mypy script.py
```

`mypy` 会检查代码中的类型注解是否一致，如果有类型错误，将会给出提示。

### 总结

- **类型注解** 提高代码的可读性和可维护性，帮助 IDE 提供更好的代码补全和错误提示。
- 类型注解不会改变 Python 动态类型语言的本质，但可以通过工具（如 `mypy`）进行静态类型检查，提升代码的健壮性。
- 常见的类型注解包括：`int`、`str`、`List`、`Dict`、`Optional`、`Union` 等。
