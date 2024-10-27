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

`QPushButton` 是一个用于创建可点击按钮的控件。它常用于用户界面中，以触发操作或事件。

### 常用方法

| 方法                          | 描述                           |
| ----------------------------- | ------------------------------ |
| `setText(text: str)`          | 设置按钮显示的文本。           |
| `text() -> str`               | 获取当前按钮显示的文本。       |
| `setIcon(icon: QIcon)`        | 设置按钮的图标。               |
| `icon() -> QIcon`             | 获取当前按钮的图标。           |
| `setCheckable(bool)`          | 设置按钮是否可选中。           |
| `isCheckable() -> bool`       | 获取按钮是否可选中。           |
| `setChecked(bool)`            | 设置按钮的选中状态。           |
| `isChecked() -> bool`         | 获取当前按钮的选中状态。       |
| `setEnabled(bool)`            | 设置按钮是否可用。             |
| `isEnabled() -> bool`         | 获取按钮是否可用。             |
| `setStyleSheet(style: str)`   | 设置按钮的样式表。             |
| `clicked(callback: Callable)` | 连接点击信号到指定的回调函数。 |



### QToolButton工具按钮控件

`QToolButton` 是一个用于创建工具按钮的控件，通常用于提供快速访问的工具或功能。它可以显示图标、文本或两者，并支持多种样式和行为。

### 常用方法

| 方法                                                  | 描述                         |
| ----------------------------------------------------- | ---------------------------- |
| `setIcon(icon: QIcon)`                                | 设置工具按钮的图标。         |
| `icon() -> QIcon`                                     | 获取当前工具按钮的图标。     |
| `setText(text: str)`                                  | 设置工具按钮显示的文本。     |
| `text() -> str`                                       | 获取当前工具按钮显示的文本。 |
| `setToolTip(tooltip: str)`                            | 设置工具按钮的提示文本。     |
| `toolTip() -> str`                                    | 获取当前工具按钮的提示文本。 |
| `setPopupMode(mode: QToolButton.ToolButtonPopupMode)` | 设置弹出模式。               |
| `popupMode() -> QToolButton.ToolButtonPopupMode`      | 获取当前的弹出模式。         |
| `setCheckable(bool)`                                  | 设置按钮是否可选中。         |
| `isCheckable() -> bool`                               | 获取按钮是否可选中。         |
| `setChecked(bool)`                                    | 设置按钮的选中状态。         |
| `isChecked() -> bool`                                 | 获取当前按钮的选中状态。     |
| `setEnabled(bool)`                                    | 设置按钮是否可用。           |
| `isEnabled() -> bool`                                 | 获取按钮是否可用。           |
| `setStyleSheet(style: str)`                           | 设置工具按钮的样式表。       |



### QCommandLinkButton命令链接按钮控件

`QCommandLinkButton` 是一个用于创建命令链接按钮的控件，通常用于提供简洁的操作选项。它通常显示较大文本或图标，适合在需要明确用户选择的情况下使用。

### 常用方法

| 方法                               | 描述                       |
| ---------------------------------- | -------------------------- |
| `setText(text: str)`               | 设置按钮显示的主文本。     |
| `text() -> str`                    | 获取当前按钮显示的主文本。 |
| `setDescription(description: str)` | 设置按钮的描述文本。       |
| `description() -> str`             | 获取当前按钮的描述文本。   |
| `setIcon(icon: QIcon)`             | 设置按钮的图标。           |
| `icon() -> QIcon`                  | 获取当前按钮的图标。       |
| `setEnabled(bool)`                 | 设置按钮是否可用。         |
| `isEnabled() -> bool`              | 获取按钮是否可用。         |
| `setStyleSheet(style: str)`        | 设置命令链接按钮的样式表。 |



### QRadioButton单选按钮控件

`QRadioButton` 是一个用于创建单选按钮的控件，允许用户在一组选项中选择一个。通常与其他单选按钮组合使用，以形成互斥的选择。

### 常用方法

| 方法                        | 描述                                                       |
| --------------------------- | ---------------------------------------------------------- |
| `setText(text: str)`        | 设置单选按钮显示的文本。                                   |
| `text() -> str`             | 获取当前单选按钮显示的文本。                               |
| `setChecked(bool)`          | 设置单选按钮的选中状态。                                   |
| `isChecked() -> bool`       | 获取当前单选按钮的选中状态。                               |
| `setEnabled(bool)`          | 设置单选按钮是否可用。                                     |
| `isEnabled() -> bool`       | 获取单选按钮是否可用。                                     |
| `setAutoExclusive(bool)`    | 设置是否为自动互斥，默认情况下同一组中的单选按钮是互斥的。 |
| `isAutoExclusive() -> bool` | 获取是否为自动互斥状态。                                   |
| `setStyleSheet(style: str)` | 设置单选按钮的样式表。                                     |



### QCheckBox复选框按钮控件

`QCheckBox` 是一个用于创建复选框的控件，允许用户选择或取消选择某个选项。它可以用于单独的选项或与其他复选框组合使用，适合多重选择的场景。

### 常用方法

| 方法                        | 描述                                                 |
| --------------------------- | ---------------------------------------------------- |
| `setText(text: str)`        | 设置复选框显示的文本。                               |
| `text() -> str`             | 获取当前复选框显示的文本。                           |
| `setChecked(bool)`          | 设置复选框的选中状态。                               |
| `isChecked() -> bool`       | 获取当前复选框的选中状态。                           |
| `setTristate(bool)`         | 设置复选框是否为三态模式（选中、未选中、部分选中）。 |
| `isTristate() -> bool`      | 获取复选框是否为三态模式。                           |
| `setEnabled(bool)`          | 设置复选框是否可用。                                 |
| `isEnabled() -> bool`       | 获取复选框是否可用。                                 |
| `setStyleSheet(style: str)` | 设置复选框的样式表。                                 |



### QDialogButtonBox组合按钮控件

`QDialogButtonBox` 是一个用于管理对话框中按钮的控件，通常用于显示一组标准按钮（如“确定”、“取消”、“应用”等）。它可以自动管理按钮的排列和行为。

### 常用方法

| 方法                                                         | 描述                                     |
| ------------------------------------------------------------ | ---------------------------------------- |
| `addButton(button: QAbstractButton, role: QDialogButtonBox.ButtonRole)` | 添加自定义按钮。                         |
| `button(role: QDialogButtonBox.ButtonRole) -> QAbstractButton` | 获取指定角色的按钮。                     |
| `setStandardButtons(buttons: QDialogButtonBox.StandardButton)` | 设置标准按钮（如确定、取消）。           |
| `standardButtons() -> QDialogButtonBox.StandardButton`       | 获取当前的标准按钮。                     |
| `setCenterButtons(bool)`                                     | 设置是否将按钮居中排列。                 |
| `isCenterButtons() -> bool`                                  | 获取按钮是否居中排列。                   |
| `accepted()`                                                 | 接受信号（当用户点击“确定”按钮时触发）。 |
| `rejected()`                                                 | 拒绝信号（当用户点击“取消”按钮时触发）。 |



## 选择列表类控件

### QComboBox下拉组合框控件

`QComboBox` 是一个用于创建下拉组合框的控件，允许用户从预定义的选项中选择一个或输入自定义值。它在用户界面中常用于提供可选择的列表。

### 常用方法

| 方法                                                      | 描述                             |
| --------------------------------------------------------- | -------------------------------- |
| `addItem(text: str, userData: Any = None)`                | 添加一个项目到组合框。           |
| `addItems(items: List[str])`                              | 添加多个项目到组合框。           |
| `insertItem(index: int, text: str, userData: Any = None)` | 在指定索引插入一个项目。         |
| `removeItem(index: int)`                                  | 移除指定索引的项目。             |
| `clear()`                                                 | 清空组合框中的所有项目。         |
| `setCurrentIndex(index: int)`                             | 设置当前选中的项目索引。         |
| `currentIndex() -> int`                                   | 获取当前选中的项目索引。         |
| `currentText() -> str`                                    | 获取当前选中的项目文本。         |
| `setEditable(bool)`                                       | 设置组合框是否可编辑。           |
| `isEditable() -> bool`                                    | 获取组合框是否可编辑状态。       |
| `setMaxVisibleItems(count: int)`                          | 设置下拉列表中可见的最大项目数。 |
| `setPlaceholderText(text: str)`                           | 设置占位符文本。                 |
| `activated(callback: Callable)`                           | 连接激活信号到指定的回调函数。   |



### QFontComboBox字体组合框控件

`QFontComboBox` 是一个用于选择字体的下拉组合框控件，允许用户从可用字体中选择一种。它自动显示系统中安装的字体，适用于字体选择器的场景。

### 常用方法

| 方法                                                | 描述                           |
| --------------------------------------------------- | ------------------------------ |
| `currentFont() -> QFont`                            | 获取当前选择的字体。           |
| `setCurrentFont(font: QFont)`                       | 设置当前选择的字体。           |
| `setEditable(bool)`                                 | 设置组合框是否可编辑。         |
| `isEditable() -> bool`                              | 获取组合框是否可编辑状态。     |
| `setFontFilters(filters: QFontDatabase.FontFilter)` | 设置字体过滤器。               |
| `addItems(items: List[str])`                        | 添加多个项目到组合框。         |
| `clear()`                                           | 清空组合框中的所有项目。       |
| `activated(callback: Callable)`                     | 连接激活信号到指定的回调函数。 |



### QListWidget列表控件

`QListWidget` 是一个用于显示和管理可选择项的列表控件。它支持单选和多选，可以显示文本、图像等，适合用于文件选择、列表浏览等场景。

### 常用方法

| 方法                                                      | 描述                         |
| --------------------------------------------------------- | ---------------------------- |
| `addItem(item: QListWidgetItem)`                          | 向列表中添加一个项目。       |
| `addItems(items: List[str])`                              | 向列表中添加多个项目。       |
| `insertItem(row: int, item: QListWidgetItem)`             | 在指定行插入一个项目。       |
| `removeItem(row: int)`                                    | 移除指定行的项目。           |
| `takeItem(row: int) -> QListWidgetItem`                   | 移除并返回指定行的项目。     |
| `clear()`                                                 | 清空列表中的所有项目。       |
| `count() -> int`                                          | 获取当前列表中的项目数量。   |
| `currentItem() -> QListWidgetItem`                        | 获取当前选中的项目。         |
| `setCurrentItem(item: QListWidgetItem)`                   | 设置当前选中的项目。         |
| `setSelectionMode(mode: QAbstractItemView.SelectionMode)` | 设置选择模式。               |
| `selectionMode() -> QAbstractItemView.SelectionMode`      | 获取当前的选择模式。         |
| `selectedItems() -> List[QListWidgetItem]`                | 获取当前选中的所有项目。     |
| `item(row: int) -> QListWidgetItem`                       | 获取指定行的项目。           |
| `setDragEnabled(bool)`                                    | 设置是否启用拖放功能。       |
| `setDropIndicatorShown(bool)`                             | 设置是否在拖放时显示指示器。 |



## 容器控件

### QGroupBox分组框控件

`QGroupBox` 是一个用于将相关控件分组的容器控件，通常用于在用户界面中组织和区分功能区域。它可以包含标题，帮助用户理解组内控件的关系。

### 常用方法

| 方法                         | 描述                       |
| ---------------------------- | -------------------------- |
| `setTitle(title: str)`       | 设置分组框的标题。         |
| `title() -> str`             | 获取当前分组框的标题。     |
| `setCheckable(bool)`         | 设置分组框是否可选中。     |
| `isCheckable() -> bool`      | 获取分组框是否可选中。     |
| `setChecked(bool)`           | 设置分组框的选中状态。     |
| `isChecked() -> bool`        | 获取当前分组框的选中状态。 |
| `setLayout(layout: QLayout)` | 设置分组框的布局。         |
| `layout() -> QLayout`        | 获取分组框的布局。         |
| `setEnabled(bool)`           | 设置分组框是否可用。       |
| `isEnabled() -> bool`        | 获取分组框是否可用。       |
| `setStyleSheet(style: str)`  | 设置分组框的样式表。       |



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