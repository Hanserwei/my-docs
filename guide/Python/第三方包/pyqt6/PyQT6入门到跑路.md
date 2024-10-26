# 前言
学洗完Python以及Python怎么操作数据库，现在系统地学习一些PyQt6，为后面的开发奠定基础。
# PyQt6的介绍
PySide / PyQt是C++的程序开发框架QT的Python实现。
:::details
在介绍`PyQt`框架之前，先介绍下什么是`QT`、`GUI`?

`Qt` 是跨平台`C++`图形用户界面应用程序开发框架。它既可以开发`GUI`程序，也可用于开发非`GUI`程序，比如控制台工具和服务器。`Qt`是面向对象的框架，使用特殊的代码生成扩展（称为元对象编译器(Meta Object Compiler, moc)）以及一些宏，`Qt`很容易扩展，并且允许真正的组件编程。

`GUI` 是图形用户界面（Graphical User Interface）的简称，是指采用图形方式显示的计算机操作用户界面。
:::
在Python中经常使用的GUI控件集有PyQt、Tkinter(ttkbootstrap)、wxPython、Kivy、PyGUI和Libavg，其中PyQt是Qt官方专门为Python提供的GUI扩展。
开源软件需要解决的最大问题是如何处理开发人员使用开源软件来完成个人或商业目标，其中包括版权收益问题。PyQt 6 选择了GPL(自由软件协议)，开发人员可以放心使用PyQt 6 开发软件。
# PySide 6/PyQt 6具有的特性
- 能跨平台运行在Windows、Linux和macOS等平台上。
- 对QT库进行完全封装，基于高性能的Qt的GUI控件集。
- 使用信号/槽机制进行通信。
- 提供了一整套种类繁多的窗口控件。
- 可以使用Qt成熟的IDE(如 Qt Designer)进行图形界面设计，并自动生成可执行的Python代码。
- 底层是Qt的dll文件，基于C++运行，所以运行效率上得到了一定的保证。
- PySide6：PySide6是Qt的另一个Python绑定，与PyQt类似，但使用了更宽松的许可证（LGPL）。它提供了与PyQt相似的功能和API，因此如果熟悉PyQt的使用，可以很容易地切换到PySide6。与PyQt相比，PySide6的社区支持可能相对较少，但它仍然是一个可行的选择。
# PyQt6的常用基本控件

## 文本类控件

### QLabel标签控件

下面是 `QLabel` 类的常用方法列表，按功能分类整理成表格：

| 方法                                        | 描述                                     |
| ------------------------------------------- | ---------------------------------------- |
| `setText(text: str)`                        | 设置标签显示的文本。                     |
| `text() -> str`                             | 获取当前显示的文本。                     |
| `setPixmap(pixmap: QPixmap)`                | 设置标签显示的图像。                     |
| `pixmap() -> QPixmap`                       | 获取当前显示的图像。                     |
| `setScaledContents(bool)`                   | 设置是否缩放内容以适应标签大小。         |
| `setAlignment(alignment: Qt.AlignmentFlag)` | 设置文本对齐方式。                       |
| `alignment() -> Qt.AlignmentFlag`           | 获取当前的文本对齐方式。                 |
| `setFont(font: QFont)`                      | 设置标签文本的字体。                     |
| `font() -> QFont`                           | 获取当前的字体设置。                     |
| `setWordWrap(bool)`                         | 设置是否自动换行。                       |
| `setOpenExternalLinks(bool)`                | 设置是否允许打开外部链接（HTML内容时）。 |
| `setTextFormat(format: Qt.TextFormat)`      | 设置文本格式（如纯文本或HTML）。         |
| `setIndentation(int)`                       | 设置文本缩进。                           |
| `setBuddy(buddy: QWidget)`                  | 设置伙伴控件，通常用于表单输入。         |
| `buddy() -> QWidget`                        | 获取与标签关联的伙伴控件。               |
| `mousePressEvent(event: QMouseEvent)`       | 处理鼠标点击事件（重载方法）。           |

这是 `QLabel` 类的一些常用方法。

### QLineEdit单行文本框控件

`QLineEdit` 是一个用于输入和编辑单行文本的控件。它常用于表单输入、搜索框等场景，允许用户输入字符串并提供多种文本操作功能。

### 常用方法

| 方法                                        | 描述                                                 |
| ------------------------------------------- | ---------------------------------------------------- |
| `setText(text: str)`                        | 设置文本框中的文本。                                 |
| `text() -> str`                             | 获取文本框中的当前文本。                             |
| `setPlaceholderText(text: str)`             | 设置占位符文本（提示用户输入的文本）。               |
| `setReadOnly(bool)`                         | 设置文本框为只读，禁止用户编辑。                     |
| `isReadOnly() -> bool`                      | 获取文本框是否为只读状态。                           |
| `setMaxLength(int)`                         | 设置文本框允许输入的最大字符数。                     |
| `maxLength() -> int`                        | 获取文本框的最大字符数限制。                         |
| `setEchoMode(mode: QLineEdit.EchoMode)`     | 设置回显模式（如密码输入时隐藏字符）。               |
| `echoMode() -> QLineEdit.EchoMode`          | 获取当前的回显模式。                                 |
| `selectAll()`                               | 选择文本框中的所有文本。                             |
| `clear()`                                   | 清空文本框中的文本。                                 |
| `setAlignment(alignment: Qt.AlignmentFlag)` | 设置文本的对齐方式。                                 |
| `alignment() -> Qt.AlignmentFlag`           | 获取当前文本的对齐方式。                             |
| `textChanged(callback: Callable)`           | 连接文本变化信号到指定的回调函数。                   |
| `editingFinished()`                         | 文本编辑完成信号（当用户按下回车或失去焦点时触发）。 |



### QTextEdit多行富文本框控件

`QTextEdit` 是一个用于输入和编辑多行文本的控件，支持富文本格式。它常用于文本编辑器、富文本输入和文档编辑等场景，可以处理各种文本格式和样式。

### 常用方法

| 方法                                        | 描述                                       |
| ------------------------------------------- | ------------------------------------------ |
| `setText(text: str)`                        | 设置文本框中的文本。                       |
| `toPlainText() -> str`                      | 获取文本框中的纯文本（去除格式）。         |
| `setHtml(html: str)`                        | 设置文本框中的HTML格式文本。               |
| `toHtml() -> str`                           | 获取文本框中的HTML格式文本。               |
| `append(text: str)`                         | 在文本框末尾添加文本。                     |
| `clear()`                                   | 清空文本框中的所有文本。                   |
| `setReadOnly(bool)`                         | 设置文本框为只读，禁止用户编辑。           |
| `isReadOnly() -> bool`                      | 获取文本框是否为只读状态。                 |
| `setFont(font: QFont)`                      | 设置文本框中默认字体。                     |
| `setAlignment(alignment: Qt.AlignmentFlag)` | 设置文本的对齐方式。                       |
| `setPlaceholderText(text: str)`             | 设置占位符文本。                           |
| `document() -> QTextDocument`               | 获取文本框的文档对象，允许更细粒度的操作。 |
| `textChanged(callback: Callable)`           | 连接文本变化信号到指定的回调函数。         |
| `cursorPositionChanged(callback: Callable)` | 连接光标位置变化信号到指定的回调函数。     |



### QPlainTextEdit纯文本控件

`QPlainTextEdit` 是一个用于输入和编辑纯文本的控件，不支持富文本格式。它常用于处理大量文本数据，如日志查看器、代码编辑器等，提供高效的文本处理能力。

### 常用方法

| 方法                                                 | 描述                                   |
| ---------------------------------------------------- | -------------------------------------- |
| `setPlainText(text: str)`                            | 设置文本框中的纯文本。                 |
| `toPlainText() -> str`                               | 获取文本框中的当前纯文本。             |
| `appendPlainText(text: str)`                         | 在文本框末尾添加纯文本。               |
| `clear()`                                            | 清空文本框中的所有文本。               |
| `setReadOnly(bool)`                                  | 设置文本框为只读，禁止用户编辑。       |
| `isReadOnly() -> bool`                               | 获取文本框是否为只读状态。             |
| `setLineWrapMode(mode: QPlainTextEdit.LineWrapMode)` | 设置文本换行模式。                     |
| `lineWrapMode() -> QPlainTextEdit.LineWrapMode`      | 获取当前的换行模式。                   |
| `setPlainTextCursor(cursor: QTextCursor)`            | 设置文本光标。                         |
| `textChanged(callback: Callable)`                    | 连接文本变化信号到指定的回调函数。     |
| `cursorPositionChanged(callback: Callable)`          | 连接光标位置变化信号到指定的回调函数。 |



### QSpinBox整数数字选择控件

`QSpinBox` 是一个用于选择整数值的控件，允许用户通过点击按钮或直接输入来选择一个数字。它常用于表单输入、设置数值等场景。

### 常用方法

| 方法                               | 描述                                             |
| ---------------------------------- | ------------------------------------------------ |
| `setValue(value: int)`             | 设置当前的整数值。                               |
| `value() -> int`                   | 获取当前选择的整数值。                           |
| `setMinimum(value: int)`           | 设置可选择的最小值。                             |
| `minimum() -> int`                 | 获取当前的最小值。                               |
| `setMaximum(value: int)`           | 设置可选择的最大值。                             |
| `maximum() -> int`                 | 获取当前的最大值。                               |
| `setSingleStep(step: int)`         | 设置每次增加或减少的步长。                       |
| `singleStep() -> int`              | 获取当前的步长。                                 |
| `setPrefix(prefix: str)`           | 设置值前的前缀文本。                             |
| `setSuffix(suffix: str)`           | 设置值后的后缀文本。                             |
| `textFromValue(value: int) -> str` | 将整数值转换为字符串表示。                       |
| `valueFromText(text: str) -> int`  | 将字符串表示转换为整数值。                       |
| `editingFinished()`                | 编辑完成信号（当用户按下回车或失去焦点时触发）。 |
| `valueChanged(callback: Callable)` | 连接值变化信号到指定的回调函数。                 |



### QDoubleSpinBox小数数字选择控件

`QDoubleSpinBox` 是一个用于选择小数值的控件，允许用户通过点击按钮或直接输入来选择一个浮点数。它常用于表单输入、设置精确数值等场景。

### 常用方法

| 方法                                 | 描述                                             |
| ------------------------------------ | ------------------------------------------------ |
| `setValue(value: float)`             | 设置当前的小数值。                               |
| `value() -> float`                   | 获取当前选择的小数值。                           |
| `setMinimum(value: float)`           | 设置可选择的最小值。                             |
| `minimum() -> float`                 | 获取当前的最小值。                               |
| `setMaximum(value: float)`           | 设置可选择的最大值。                             |
| `maximum() -> float`                 | 获取当前的最大值。                               |
| `setSingleStep(step: float)`         | 设置每次增加或减少的步长。                       |
| `singleStep() -> float`              | 获取当前的步长。                                 |
| `setDecimals(decimals: int)`         | 设置小数位数。                                   |
| `decimals() -> int`                  | 获取当前的小数位数。                             |
| `setPrefix(prefix: str)`             | 设置值前的前缀文本。                             |
| `setSuffix(suffix: str)`             | 设置值后的后缀文本。                             |
| `textFromValue(value: float) -> str` | 将小数值转换为字符串表示。                       |
| `valueFromText(text: str) -> float`  | 将字符串表示转换为小数值。                       |
| `editingFinished()`                  | 编辑完成信号（当用户按下回车或失去焦点时触发）。 |
| `valueChanged(callback: Callable)`   | 连接值变化信号到指定的回调函数。                 |



### QLCDNumber液晶数字显示控件

`QLCDNumber` 是一个用于显示整数值的液晶数字显示控件。它常用于显示计数器、时间、分数等，提供直观的数字输出。

### 常用方法

| 方法                                              | 描述                     |
| ------------------------------------------------- | ------------------------ |
| `display(value: int)`                             | 显示指定的整数值。       |
| `value() -> int`                                  | 获取当前显示的整数值。   |
| `setDigitCount(digits: int)`                      | 设置显示的数字位数。     |
| `digitCount() -> int`                             | 获取当前设置的数字位数。 |
| `setSegmentStyle(style: QLCDNumber.SegmentStyle)` | 设置数字的显示样式。     |
| `segmentStyle() -> QLCDNumber.SegmentStyle`       | 获取当前的显示样式。     |
| `setStyleSheet(style: str)`                       | 设置控件的样式表。       |



## 按钮类控件

### QPushButton按钮控件

### QToolButton工具按钮控件

### QCommandLinkButton命令链接按钮控件

### QRadioButton单选按钮控件

### QCheckBox复选框按钮控件

### QDialogButtonBox组合按钮控件

## 选择列表类控件

### QComboBox下拉组合框控件

### QFontComboBox字体组合框控件

### QListWidget列表控件

## 容器控件

### QGroupBox分组框控件

### QTabWidget选项卡控件

### QToolBox工具盒控件

## 日期时间类控件

### QDateTimeEdit日期时间控件

### QDateEdit日期控件

### QTimeEdit时间控件

### QCalendarWidget日历控件

# PyQt6的布局管理

## 垂直布局Vertical Layout（QVBoxLayout）

## 水平布局Horizontal Layout（QHBoxLayout）

## 网格布局Grid Layout（QGridLayout）

## 表单布局Form Layout（QFormLayout）