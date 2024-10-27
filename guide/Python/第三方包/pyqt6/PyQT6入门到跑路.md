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

`QTabWidget` 是一个用于管理多个选项卡的控件，允许用户在不同的页面之间切换。每个选项卡可以包含不同的控件和布局，常用于设置、文档浏览等场景。

### 常用方法

| 方法                                       | 描述                                               |
| ------------------------------------------ | -------------------------------------------------- |
| `addTab(widget: QWidget, text: str)`       | 添加一个新的选项卡，包含指定的控件和文本。         |
| `removeTab(index: int)`                    | 移除指定索引的选项卡。                             |
| `currentIndex() -> int`                    | 获取当前选中的选项卡的索引。                       |
| `setCurrentIndex(index: int)`              | 设置当前选中的选项卡的索引。                       |
| `tabText(index: int) -> str`               | 获取指定索引选项卡的文本。                         |
| `setTabText(index: int, text: str)`        | 设置指定索引选项卡的文本。                         |
| `count() -> int`                           | 获取选项卡的总数。                                 |
| `setTabEnabled(index: int, enabled: bool)` | 设置指定索引选项卡是否可用。                       |
| `isTabEnabled(index: int) -> bool`         | 检查指定索引选项卡是否可用。                       |
| `tabBar() -> QTabBar`                      | 获取选项卡的标签栏，允许对标签进行更细粒度的操作。 |
| `setTabIcon(index: int, icon: QIcon)`      | 设置指定索引选项卡的图标。                         |
| `tabIcon(index: int) -> QIcon`             | 获取指定索引选项卡的图标。                         |
| `clear()`                                  | 移除所有选项卡。                                   |
| `setDocumentMode(bool)`                    | 设置选项卡为文档模式，改变选项卡的外观。           |



### QToolBox工具盒控件

`QToolBox` 是一个用于管理多个工具页面的控件，允许用户通过标签切换不同的工具或功能区域。每个工具页面可以包含不同的控件，常用于设置面板、工具选项等场景。

### 常用方法

| 方法                                                         | 描述                                       |
| ------------------------------------------------------------ | ------------------------------------------ |
| `addItem(widget: QWidget, text: str)`                        | 添加一个新的工具项，包含指定的控件和文本。 |
| `removeItem(index: int)`                                     | 移除指定索引的工具项。                     |
| `currentIndex() -> int`                                      | 获取当前选中的工具项的索引。               |
| `setCurrentIndex(index: int)`                                | 设置当前选中的工具项的索引。               |
| `itemText(index: int) -> str`                                | 获取指定索引工具项的文本。                 |
| `setItemText(index: int, text: str)`                         | 设置指定索引工具项的文本。                 |
| `count() -> int`                                             | 获取工具项的总数。                         |
| `setItemEnabled(index: int, enabled: bool)`                  | 设置指定索引工具项是否可用。               |
| `isItemEnabled(index: int) -> bool`                          | 检查指定索引工具项是否可用。               |
| `itemAt(index: int) -> QWidget`                              | 获取指定索引的工具项对应的控件。           |
| `clear()`                                                    | 移除所有工具项。                           |
| `setSizePolicy(horizontalPolicy: QSizePolicy.Policy, verticalPolicy: QSizePolicy.Policy)` | 设置控件的大小策略。                       |



## 日期时间类控件

### QDateTimeEdit日期时间控件

`QDateTimeEdit` 是一个用于输入和编辑日期和时间的控件。它提供了一个方便的界面，用户可以通过文本框和下拉菜单选择日期和时间，常用于表单、设置和时间选择器等场景。

### 常用方法

| 方法                               | 描述                       |
| ---------------------------------- | -------------------------- |
| `setDateTime(dateTime: QDateTime)` | 设置控件的日期和时间。     |
| `dateTime() -> QDateTime`          | 获取控件当前的日期和时间。 |
| `setDate(date: QDate)`             | 设置控件的日期。           |
| `date() -> QDate`                  | 获取控件当前的日期。       |
| `setTime(time: QTime)`             | 设置控件的时间。           |
| `time() -> QTime`                  | 获取控件当前的时间。       |
| `setMinimumDate(date: QDate)`      | 设置可选择的最小日期。     |
| `setMaximumDate(date: QDate)`      | 设置可选择的最大日期。     |
| `setMinimumTime(time: QTime)`      | 设置可选择的最小时间。     |
| `setMaximumTime(time: QTime)`      | 设置可选择的最大时间。     |
| `setDisplayFormat(format: str)`    | 设置日期时间的显示格式。   |
| `displayFormat() -> str`           | 获取当前的显示格式。       |
| `setCalendarPopup(enable: bool)`   | 设置是否使用日历弹出窗口。 |
| `calendarPopup() -> bool`          | 检查是否启用日历弹出窗口。 |
| `setTimeSpec(spec: Qt.TimeSpec)`   | 设置时间的时区。           |
| `timeSpec() -> Qt.TimeSpec`        | 获取当前时间的时区。       |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QDateTimeEdit, QVBoxLayout, QWidget
import sys

app = QApplication(sys.argv)

window = QWidget()
layout = QVBoxLayout()

dateTimeEdit = QDateTimeEdit()
dateTimeEdit.setDateTime(QDateTime.currentDateTime())
dateTimeEdit.setDisplayFormat("yyyy-MM-dd HH:mm:ss")
layout.addWidget(dateTimeEdit)

window.setLayout(layout)
window.setWindowTitle("QDateTimeEdit 示例")
window.show()

sys.exit(app.exec())
```



### QDateEdit日期控件

`QDateEdit` 是一个用于输入和编辑日期的控件。与 `QDateTimeEdit` 类似，但 `QDateEdit` 只关注日期，不包括时间。它提供了一个方便的界面，用户可以通过文本框和下拉菜单选择日期，常用于表单、设置和日期选择器等场景。

### 常用方法

| 方法                                           | 描述                                    |
| ---------------------------------------------- | --------------------------------------- |
| `setDate(date: QDate)`                         | 设置控件的日期。                        |
| `date() -> QDate`                              | 获取控件当前的日期。                    |
| `setMinimumDate(date: QDate)`                  | 设置可选择的最小日期。                  |
| `setMaximumDate(date: QDate)`                  | 设置可选择的最大日期。                  |
| `setDisplayFormat(format: str)`                | 设置日期的显示格式。                    |
| `displayFormat() -> str`                       | 获取当前的显示格式。                    |
| `setCalendarPopup(enable: bool)`               | 设置是否使用日历弹出窗口。              |
| `calendarPopup() -> bool`                      | 检查是否启用日历弹出窗口。              |
| `setDateRange(minDate: QDate, maxDate: QDate)` | 设置可选择的日期范围。                  |
| `setTimeSpec(spec: Qt.TimeSpec)`               | 设置日期的时区（通常用于 UTC 或本地）。 |
| `timeSpec() -> Qt.TimeSpec`                    | 获取当前日期的时区。                    |
| `setReadOnly(readOnly: bool)`                  | 设置控件是否为只读。                    |
| `isReadOnly() -> bool`                         | 检查控件是否为只读。                    |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QDateEdit, QVBoxLayout, QWidget
from PyQt6.QtCore import QDate
import sys

app = QApplication(sys.argv)

window = QWidget()
layout = QVBoxLayout()

dateEdit = QDateEdit()
dateEdit.setDate(QDate.currentDate())
dateEdit.setDisplayFormat("yyyy-MM-dd")
layout.addWidget(dateEdit)

window.setLayout(layout)
window.setWindowTitle("QDateEdit 示例")
window.show()

sys.exit(app.exec())
```



### QTimeEdit时间控件

`QTimeEdit` 是一个用于输入和编辑时间的控件。它允许用户通过文本框和下拉菜单选择时间，常用于表单、设置和时间选择器等场景。

### 常用方法

| 方法                             | 描述                                    |
| -------------------------------- | --------------------------------------- |
| `setTime(time: QTime)`           | 设置控件的时间。                        |
| `time() -> QTime`                | 获取控件当前的时间。                    |
| `setMinimumTime(time: QTime)`    | 设置可选择的最小时间。                  |
| `setMaximumTime(time: QTime)`    | 设置可选择的最大时间。                  |
| `setDisplayFormat(format: str)`  | 设置时间的显示格式。                    |
| `displayFormat() -> str`         | 获取当前的显示格式。                    |
| `setTimeSpec(spec: Qt.TimeSpec)` | 设置时间的时区（通常用于 UTC 或本地）。 |
| `timeSpec() -> Qt.TimeSpec`      | 获取当前时间的时区。                    |
| `setReadOnly(readOnly: bool)`    | 设置控件是否为只读。                    |
| `isReadOnly() -> bool`           | 检查控件是否为只读。                    |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QTimeEdit, QVBoxLayout, QWidget
from PyQt6.QtCore import QTime
import sys

app = QApplication(sys.argv)

window = QWidget()
layout = QVBoxLayout()

timeEdit = QTimeEdit()
timeEdit.setTime(QTime.currentTime())
timeEdit.setDisplayFormat("HH:mm:ss")
layout.addWidget(timeEdit)

window.setLayout(layout)
window.setWindowTitle("QTimeEdit 示例")
window.show()

sys.exit(app.exec())
```

### 说明

- `QTimeEdit` 允许用户以多种格式输入时间，常用格式包括 24 小时制（`HH:mm:ss`）和 12 小时制（`hh:mm:ss AP`）。
- 你可以设置控件的最小和最大时间，以限制用户的选择范围。



### QCalendarWidget日历控件

`QCalendarWidget` 是一个用于显示和选择日期的日历控件。它提供了一个直观的界面，用户可以通过点击日历上的日期进行选择，常用于日期选择器、日历应用程序等场景。

### 常用方法

| 方法                                                         | 描述                                 |
| ------------------------------------------------------------ | ------------------------------------ |
| `setCurrentPage(year: int, month: int)`                      | 设置当前显示的页面（年和月）。       |
| `currentPage() -> (int, int)`                                | 获取当前显示的页面（年和月）。       |
| `setSelectedDate(date: QDate)`                               | 设置选中的日期。                     |
| `selectedDate() -> QDate`                                    | 获取当前选中的日期。                 |
| `setMinimumDate(date: QDate)`                                | 设置可选择的最小日期。               |
| `setMaximumDate(date: QDate)`                                | 设置可选择的最大日期。               |
| `setDateRange(minDate: QDate, maxDate: QDate)`               | 设置可选择的日期范围。               |
| `setFirstDayOfWeek(day: Qt.DayOfWeek)`                       | 设置每周的第一天（如周一、周日等）。 |
| `firstDayOfWeek() -> Qt.DayOfWeek`                           | 获取每周的第一天。                   |
| `setGridVisible(visible: bool)`                              | 设置是否显示网格线。                 |
| `isGridVisible() -> bool`                                    | 检查网格线是否可见。                 |
| `setHorizontalHeaderFormat(format: QCalendarWidget.HorizontalHeaderFormat)` | 设置水平头格式。                     |
| `setVerticalHeaderFormat(format: QCalendarWidget.VerticalHeaderFormat)` | 设置垂直头格式。                     |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QCalendarWidget, QVBoxLayout, QWidget
from PyQt6.QtCore import QDate
import sys

app = QApplication(sys.argv)

window = QWidget()
layout = QVBoxLayout()

calendar = QCalendarWidget()
calendar.setSelectedDate(QDate.currentDate())
layout.addWidget(calendar)

window.setLayout(layout)
window.setWindowTitle("QCalendarWidget 示例")
window.show()

sys.exit(app.exec())
```

### 说明

- `QCalendarWidget` 提供了多种自定义选项，例如设置每周的第一天、选择的日期范围等。
- 用户可以通过点击日期直接选择，控件会自动更新选中的日期。



# PyQt6的布局管理

## 垂直布局Vertical Layout（QVBoxLayout）

`QVBoxLayout` 是 PyQt6 中用于创建垂直布局的类。它允许将控件按垂直方向排列，使得控件的高度可以自动调整以适应内容。`QVBoxLayout` 是布局管理器的一种，能够帮助开发者更方便地组织和管理窗口中的控件。

### 常用方法

| 方法                                                         | 描述                           |
| ------------------------------------------------------------ | ------------------------------ |
| `addWidget(widget: QWidget, stretch: int = 0, alignment: Qt.Alignment = 0)` | 添加一个控件到布局中。         |
| `addLayout(layout: QLayout, stretch: int = 0)`               | 添加一个子布局到当前布局中。   |
| `addSpacing(size: int)`                                      | 在控件之间添加固定的空白空间。 |
| `addStretch(stretch: int = 0)`                               | 在控件之间添加可伸缩的空间。   |
| `insertWidget(index: int, widget: QWidget, stretch: int = 0, alignment: Qt.Alignment = 0)` | 在指定位置插入控件。           |
| `removeWidget(widget: QWidget)`                              | 从布局中移除指定控件。         |
| `setSpacing(spacing: int)`                                   | 设置控件之间的间距。           |
| `setContentsMargins(left: int, top: int, right: int, bottom: int)` | 设置布局的边距。               |
| `count() -> int`                                             | 返回布局中控件的数量。         |
| `itemAt(index: int) -> QLayoutItem`                          | 返回指定索引位置的布局项。     |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QWidget, QVBoxLayout, QPushButton
import sys

app = QApplication(sys.argv)

window = QWidget()
window.setWindowTitle("QVBoxLayout 示例")

layout = QVBoxLayout()

# 添加按钮到布局中
button1 = QPushButton("按钮 1")
button2 = QPushButton("按钮 2")
button3 = QPushButton("按钮 3")

layout.addWidget(button1)
layout.addWidget(button2)
layout.addWidget(button3)

# 设置布局
window.setLayout(layout)

window.show()
sys.exit(app.exec())
```

### 说明

- 在这个示例中，我们创建了一个简单的窗口，并使用 `QVBoxLayout` 将三个按钮垂直排列。
- 你可以使用 `addSpacing` 或 `addStretch` 方法来控制按钮之间的间距和伸缩性。

如果你有其他布局管理类或控件想了解，请继续告诉我！

## 水平布局Horizontal Layout（QHBoxLayout）

`QHBoxLayout` 是 PyQt6 中用于创建水平布局的类。它允许将控件按水平方向排列，使得控件的宽度可以自动调整以适应内容。`QHBoxLayout` 是布局管理器的一种，能够帮助开发者更方便地组织和管理窗口中的控件。

### 常用方法

| 方法                                                         | 描述                           |
| ------------------------------------------------------------ | ------------------------------ |
| `addWidget(widget: QWidget, stretch: int = 0, alignment: Qt.Alignment = 0)` | 添加一个控件到布局中。         |
| `addLayout(layout: QLayout, stretch: int = 0)`               | 添加一个子布局到当前布局中。   |
| `addSpacing(size: int)`                                      | 在控件之间添加固定的空白空间。 |
| `addStretch(stretch: int = 0)`                               | 在控件之间添加可伸缩的空间。   |
| `insertWidget(index: int, widget: QWidget, stretch: int = 0, alignment: Qt.Alignment = 0)` | 在指定位置插入控件。           |
| `removeWidget(widget: QWidget)`                              | 从布局中移除指定控件。         |
| `setSpacing(spacing: int)`                                   | 设置控件之间的间距。           |
| `setContentsMargins(left: int, top: int, right: int, bottom: int)` | 设置布局的边距。               |
| `count() -> int`                                             | 返回布局中控件的数量。         |
| `itemAt(index: int) -> QLayoutItem`                          | 返回指定索引位置的布局项。     |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QWidget, QHBoxLayout, QPushButton
import sys

app = QApplication(sys.argv)

window = QWidget()
window.setWindowTitle("QHBoxLayout 示例")

layout = QHBoxLayout()

# 添加按钮到布局中
button1 = QPushButton("按钮 1")
button2 = QPushButton("按钮 2")
button3 = QPushButton("按钮 3")

layout.addWidget(button1)
layout.addWidget(button2)
layout.addWidget(button3)

# 设置布局
window.setLayout(layout)

window.show()
sys.exit(app.exec())
```

### 说明

- 在这个示例中，我们创建了一个简单的窗口，并使用 `QHBoxLayout` 将三个按钮水平排列。
- 你可以使用 `addSpacing` 或 `addStretch` 方法来控制按钮之间的间距和伸缩性。



## 网格布局Grid Layout（QGridLayout）

`QGridLayout` 是 PyQt6 中用于创建网格布局的类。它允许将控件放置在一个网格中，开发者可以指定控件在网格中的位置（行和列），从而实现更复杂的布局。

### 常用方法

| 方法                                                         | 描述                         |
| ------------------------------------------------------------ | ---------------------------- |
| `addWidget(widget: QWidget, row: int, column: int, rowSpan: int = 1, columnSpan: int = 1, alignment: Qt.Alignment = 0)` | 在指定的行和列中添加控件。   |
| `addLayout(layout: QLayout, row: int, column: int, rowSpan: int = 1, columnSpan: int = 1)` | 在指定位置添加子布局。       |
| `setSpacing(spacing: int)`                                   | 设置控件之间的间距。         |
| `setContentsMargins(left: int, top: int, right: int, bottom: int)` | 设置布局的边距。             |
| `count() -> int`                                             | 返回布局中控件的数量。       |
| `itemAt(row: int, column: int) -> QLayoutItem`               | 返回指定行和列位置的布局项。 |
| `removeWidget(widget: QWidget)`                              | 从布局中移除指定控件。       |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QWidget, QGridLayout, QPushButton
import sys

app = QApplication(sys.argv)

window = QWidget()
window.setWindowTitle("QGridLayout 示例")

layout = QGridLayout()

# 添加按钮到布局中
button1 = QPushButton("按钮 1")
button2 = QPushButton("按钮 2")
button3 = QPushButton("按钮 3")
button4 = QPushButton("按钮 4")

# 将按钮放置在网格中
layout.addWidget(button1, 0, 0)  # 第1行第1列
layout.addWidget(button2, 0, 1)  # 第1行第2列
layout.addWidget(button3, 1, 0)  # 第2行第1列
layout.addWidget(button4, 1, 1)  # 第2行第2列

# 设置布局
window.setLayout(layout)

window.show()
sys.exit(app.exec())
```

### 说明

- 在这个示例中，我们创建了一个简单的窗口，并使用 `QGridLayout` 将四个按钮放置在一个 2x2 的网格中。
- `addWidget` 方法的参数可以指定控件在网格中的位置以及跨越的行数和列数。



## 表单布局Form Layout（QFormLayout）

`QFormLayout` 是 PyQt6 中用于创建表单布局的类，适合用于收集用户输入。它将控件（如文本框、下拉菜单等）以标签和控件的形式排列，通常用于创建设置或输入表单。

### 常用方法

| 方法                                                         | 描述                               |
| ------------------------------------------------------------ | ---------------------------------- |
| `addRow(label: str, field: QWidget)`                         | 添加一行，包含标签和控件。         |
| `addRow(field: QWidget)`                                     | 添加一行，仅包含控件。             |
| `insertRow(row: int, label: str, field: QWidget)`            | 在指定行插入一行，包含标签和控件。 |
| `insertRow(row: int, field: QWidget)`                        | 在指定行插入一行，仅包含控件。     |
| `setSpacing(spacing: int)`                                   | 设置控件之间的间距。               |
| `setContentsMargins(left: int, top: int, right: int, bottom: int)` | 设置布局的边距。                   |
| `removeRow(row: int)`                                        | 移除指定行。                       |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QWidget, QFormLayout, QLabel, QLineEdit, QPushButton
import sys

app = QApplication(sys.argv)

window = QWidget()
window.setWindowTitle("QFormLayout 示例")

layout = QFormLayout()

# 添加标签和输入框
layout.addRow(QLabel("姓名:"), QLineEdit())
layout.addRow(QLabel("邮箱:"), QLineEdit())
layout.addRow(QLabel("电话:"), QLineEdit())

# 添加提交按钮
submit_button = QPushButton("提交")
layout.addRow(submit_button)

# 设置布局
window.setLayout(layout)

window.show()
sys.exit(app.exec())
```

### 说明

- 在这个示例中，我们创建了一个简单的表单，包含姓名、邮箱和电话的输入框，每一行都有相应的标签。
- `addRow` 方法用于将标签和控件组合在一起，形成表单的结构。

# PyQt6高级控件

### QMenuBar菜单栏控件

`QMenuBar` 是 PyQt6 中用于创建菜单栏的控件。菜单栏通常位于窗口的顶部，包含多个下拉菜单，每个菜单可以包含多个操作项（`QAction`）。常见的菜单包括“文件”、“编辑”、“帮助”等。

### 基本使用步骤

1. 创建 `QMenuBar` 对象。
2. 在菜单栏中添加 `QMenu`（菜单）。
3. 在菜单中添加 `QAction`（操作项）。
4. 将 `QMenuBar` 设置为窗口的菜单栏。

### 常用方法

| 方法                             | 描述                                               |
| -------------------------------- | -------------------------------------------------- |
| `addMenu(menu: QMenu)`           | 在菜单栏中添加一个菜单。                           |
| `addAction(action: QAction)`     | 直接在菜单栏中添加一个操作（不在菜单中）。         |
| `clear()`                        | 清空菜单栏中的所有菜单。                           |
| `setNativeMenuBar(native: bool)` | 设置菜单栏是否使用本地菜单栏样式（适用于 macOS）。 |

### `QMenu` 常用方法

| 方法                         | 描述                     |
| ---------------------------- | ------------------------ |
| `addAction(action: QAction)` | 在菜单中添加一个操作项。 |
| `addSeparator()`             | 在菜单中添加一个分隔符。 |
| `addMenu(menu: QMenu)`       | 在菜单中添加子菜单。     |
| `clear()`                    | 清空菜单中的所有操作项。 |

### `QAction` 常用方法

| 方法                                  | 描述                                           |
| ------------------------------------- | ---------------------------------------------- |
| `setText(text: str)`                  | 设置操作项的文本。                             |
| `setShortcut(shortcut: QKeySequence)` | 设置操作项的快捷键。                           |
| `triggered.connect(function)`         | 连接操作项的信号到指定的槽函数，当点击时触发。 |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QMenuBar, QMenu, QAction
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QMenuBar 示例")
        self.resize(400, 300)

        # 创建菜单栏
        menu_bar = self.menuBar()

        # 创建菜单
        file_menu = menu_bar.addMenu("文件")
        edit_menu = menu_bar.addMenu("编辑")
        help_menu = menu_bar.addMenu("帮助")

        # 创建菜单项（动作）
        new_action = QAction("新建", self)
        new_action.setShortcut("Ctrl+N")
        new_action.triggered.connect(self.new_file)

        open_action = QAction("打开", self)
        open_action.setShortcut("Ctrl+O")
        open_action.triggered.connect(self.open_file)

        exit_action = QAction("退出", self)
        exit_action.setShortcut("Ctrl+Q")
        exit_action.triggered.connect(self.close)

        # 将动作添加到菜单中
        file_menu.addAction(new_action)
        file_menu.addAction(open_action)
        file_menu.addSeparator()  # 添加分隔符
        file_menu.addAction(exit_action)

        # 编辑菜单中的动作
        undo_action = QAction("撤销", self)
        undo_action.setShortcut("Ctrl+Z")
        redo_action = QAction("重做", self)
        redo_action.setShortcut("Ctrl+Y")

        edit_menu.addAction(undo_action)
        edit_menu.addAction(redo_action)

        # 帮助菜单中的动作
        about_action = QAction("关于", self)
        about_action.triggered.connect(self.show_about)

        help_menu.addAction(about_action)

    def new_file(self):
        print("新建文件")

    def open_file(self):
        print("打开文件")

    def show_about(self):
        print("关于我们")

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **菜单栏**：通过 `self.menuBar()` 创建菜单栏，并使用 `addMenu` 方法添加菜单（如“文件”、“编辑”、“帮助”）。
2. **菜单项**：使用 `QAction` 创建具体的菜单项，并通过 `addAction` 添加到菜单中。我们还可以为菜单项设置快捷键（如 `Ctrl+N`）和连接槽函数。
3. **分隔符**：使用 `addSeparator()` 方法可以在菜单中添加分隔符，方便将菜单项分组。
4. **信号与槽**：通过 `triggered.connect()` 将菜单项的点击事件与槽函数（如 `new_file`、`open_file`）连接。

### 常见场景

- **文件操作**：如“新建”、“打开”、“保存”、“退出”等文件操作通常放在“文件”菜单中。
- **编辑操作**：如“撤销”、“重做”、“复制”、“粘贴”等操作通常放在“编辑”菜单中。
- **帮助菜单**：如“关于我们”、“帮助文档”等信息通常放在“帮助”菜单中。

### 小结

`QMenuBar` 是创建应用程序菜单栏的标准方式，结合 `QMenu` 和 `QAction`，可以轻松实现复杂的菜单结构。

### QToolBar工具栏控件

`QToolBar` 是 PyQt6 中用于创建工具栏的控件。工具栏通常位于窗口的顶部或侧边，包含一系列的快捷操作按钮或工具，用户可以通过这些按钮快速访问常用功能。工具栏通常与菜单栏配合使用，提供更直观的操作方式。

### 基本使用步骤

1. 创建 `QToolBar` 对象。
2. 在工具栏中添加 `QAction`（操作项）或其他控件（如按钮、下拉框等）。
3. 将 `QToolBar` 添加到 `QMainWindow` 中。

### 常用方法

| 方法                         | 描述                                             |
| ---------------------------- | ------------------------------------------------ |
| `addAction(action: QAction)` | 在工具栏中添加一个操作（按钮）。                 |
| `addSeparator()`             | 在工具栏中添加一个分隔符。                       |
| `addWidget(widget: QWidget)` | 在工具栏中添加一个控件（如按钮、文本框等）。     |
| `setMovable(movable: bool)`  | 设置工具栏是否可以拖动。                         |
| `setIconSize(size: QSize)`   | 设置工具栏图标的大小。                           |
| `toggleViewAction()`         | 返回一个 `QAction`，用于控制工具栏的显示或隐藏。 |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QToolBar, QAction, QStatusBar
from PyQt6.QtGui import QIcon
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QToolBar 示例")
        self.resize(400, 300)

        # 创建工具栏
        toolbar = QToolBar("主工具栏")
        self.addToolBar(toolbar)

        # 设置工具栏是否可移动
        toolbar.setMovable(True)

        # 创建工具栏动作（按钮）
        new_action = QAction(QIcon("icons/new.png"), "新建", self)
        new_action.setStatusTip("新建文件")
        new_action.triggered.connect(self.new_file)

        open_action = QAction(QIcon("icons/open.png"), "打开", self)
        open_action.setStatusTip("打开文件")
        open_action.triggered.connect(self.open_file)

        save_action = QAction(QIcon("icons/save.png"), "保存", self)
        save_action.setStatusTip("保存文件")
        save_action.triggered.connect(self.save_file)

        # 将动作添加到工具栏
        toolbar.addAction(new_action)
        toolbar.addAction(open_action)
        toolbar.addAction(save_action)

        # 添加分隔符
        toolbar.addSeparator()

        # 添加退出按钮
        exit_action = QAction(QIcon("icons/exit.png"), "退出", self)
        exit_action.setStatusTip("退出应用")
        exit_action.triggered.connect(self.close)
        toolbar.addAction(exit_action)

        # 创建状态栏
        self.setStatusBar(QStatusBar(self))

    def new_file(self):
        print("新建文件")

    def open_file(self):
        print("打开文件")

    def save_file(self):
        print("保存文件")

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **创建工具栏**：使用 `QToolBar` 创建工具栏，并通过 `addToolBar()` 将其添加到 `QMainWindow` 中。
2. **添加动作**：使用 `QAction` 创建工具栏上的按钮，并通过 `addAction()` 将其添加到工具栏中。每个按钮可以设置图标、提示信息（`setStatusTip`），并连接槽函数处理点击事件。
3. **分隔符**：使用 `addSeparator()` 可以在工具栏中添加分隔符，以便将相关操作分组。
4. **可移动性**：工具栏默认是可拖动的，可以通过 `setMovable()` 方法控制是否允许用户拖动工具栏。
5. **状态栏**：`QMainWindow` 中可以通过 `setStatusBar()` 设置状态栏，显示工具栏按钮的提示信息。

### 常见场景

- **文件操作**：如“新建”、“打开”、“保存”等文件操作按钮通常放在工具栏中，方便用户快速访问。
- **编辑操作**：如“剪切”、“复制”、“粘贴”等编辑操作按钮可以放在工具栏中，提供快捷操作。
- **工具栏自定义**：用户可以通过拖动工具栏来调整其位置，甚至可以将其从窗口中分离出来。

### 工具栏的显示与隐藏

工具栏可以通过菜单项进行显示或隐藏，通常我们会在菜单栏中提供一个选项来控制工具栏的可见性。可以使用 `toggleViewAction()` 方法来创建一个 `QAction`，用于控制工具栏的显示或隐藏。

```python
# 创建一个菜单项来控制工具栏的显示/隐藏
view_menu = self.menuBar().addMenu("视图")
view_menu.addAction(toolbar.toggleViewAction())
```

### 添加其他控件到工具栏

除了 `QAction` 以外，工具栏还可以添加其他控件（如按钮、下拉框、文本框等）。例如，添加一个文本框到工具栏：

```python
from PyQt6.QtWidgets import QLineEdit

search_box = QLineEdit()
search_box.setPlaceholderText("搜索")
toolbar.addWidget(search_box)
```

### 小结

- `QToolBar` 提供了一种方便的方式来创建工具栏，允许用户快速访问常用功能。
- 工具栏可以包含按钮、分隔符、以及其他自定义控件，并且支持拖动、显示/隐藏等功能。
- 与菜单栏配合使用，工具栏可以极大提高用户的操作效率。

### QStatusBar状态栏控件

`QStatusBar` 是 PyQt6 中用于显示状态信息的控件，通常位于应用程序窗口的底部。状态栏可以用于显示临时的消息、永久的控件（如进度条、标签等），以及一些其他状态信息（如鼠标位置、网络状态等）。

### 基本使用步骤

1. 创建 `QStatusBar` 对象。
2. 将 `QStatusBar` 设置为 `QMainWindow` 的状态栏。
3. 使用 `showMessage()` 方法显示临时消息，或者使用 `addWidget()` 方法添加永久控件。

### 常用方法

| 方法                                       | 描述                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| `showMessage(message: str, timeout: int)`  | 显示一条临时消息，`timeout` 参数指定消息显示的时间（毫秒）。 |
| `clearMessage()`                           | 清除当前显示的临时消息。                                     |
| `addWidget(widget: QWidget, stretch: int)` | 在状态栏中添加永久控件，`stretch` 参数指定控件的伸展系数。   |
| `removeWidget(widget: QWidget)`            | 从状态栏中移除某个控件。                                     |
| `currentMessage()`                         | 返回当前显示的临时消息。                                     |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QStatusBar, QLabel, QPushButton
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QStatusBar 示例")
        self.resize(400, 300)

        # 创建状态栏
        self.status_bar = QStatusBar()
        self.setStatusBar(self.status_bar)

        # 显示临时消息（显示 5 秒）
        self.status_bar.showMessage("欢迎使用应用程序！", 5000)

        # 添加永久控件
        self.permanent_label = QLabel("状态: 就绪")
        self.status_bar.addPermanentWidget(self.permanent_label)

        # 添加按钮来显示消息
        button = QPushButton("点击显示消息")
        button.clicked.connect(self.show_custom_message)
        self.setCentralWidget(button)

    def show_custom_message(self):
        # 显示自定义消息
        self.status_bar.showMessage("按钮被点击了！", 3000)

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **创建状态栏**：使用 `QStatusBar()` 创建状态栏对象，并通过 `setStatusBar()` 将其设置为 `QMainWindow` 的状态栏。
2. **显示临时消息**：使用 `showMessage()` 方法可以在状态栏中显示一条临时消息，`timeout` 参数指定消息显示的时间（毫秒）。例如，`showMessage("欢迎使用应用程序！", 5000)` 将显示一条 5 秒的消息。
3. **添加永久控件**：状态栏不仅可以显示文本消息，还可以通过 `addPermanentWidget()` 方法添加永久控件。例如，添加一个 `QLabel` 来显示状态信息。
4. **清除消息**：临时消息会在指定时间后自动消失，也可以通过 `clearMessage()` 手动清除消息。

### 状态栏中的永久控件

永久控件是状态栏中不会自动消失的控件，常用于显示持续的状态信息（如网络状态、当前模式等）。可以添加任何 `QWidget` 派生的控件到状态栏中，如 `QLabel`、`QProgressBar` 等。

#### 示例：在状态栏中添加进度条

```python
from PyQt6.QtWidgets import QProgressBar

# 创建进度条
progress_bar = QProgressBar()
progress_bar.setValue(50)  # 设置当前进度为50%

# 将进度条添加到状态栏
self.status_bar.addPermanentWidget(progress_bar)
```

### 状态栏的布局与伸展

状态栏中的控件可以通过 `stretch` 参数来控制其布局。`stretch` 参数类似于布局中的伸展因子，决定了控件在状态栏中所占的空间比例。

- 如果 `stretch` 值较大，控件会占据更多的空间。
- 如果 `stretch` 值为 0，控件会根据其自身大小显示。

例如：

```python
# 添加两个控件到状态栏，设置不同的伸展因子
self.status_bar.addPermanentWidget(QLabel("状态: 就绪"), 1)
self.status_bar.addPermanentWidget(QLabel("网络状态: 正常"), 2)
```

### 状态栏与其他控件的配合

状态栏通常与 `QToolBar`、`QMenuBar` 等其他控件配合使用。在工具栏或菜单栏的动作触发时，可以通过状态栏显示相应的状态信息。例如，在工具栏按钮被点击时，状态栏可以显示对应的提示信息。

```python
# 在工具栏按钮点击时，显示状态栏消息
new_action.triggered.connect(lambda: self.status_bar.showMessage("新建文件", 2000))
```

### 小结

- `QStatusBar` 是用于显示状态信息的控件，支持临时消息和永久控件。
- 通过 `showMessage()` 可以显示临时消息，`addPermanentWidget()` 可以添加永久控件。
- 状态栏与 `QToolBar`、`QMenuBar` 等控件配合使用，可以为用户提供丰富的状态反馈。

## 进度条类控件

### QProgressBar进度条控件

`QProgressBar` 是 PyQt6 中用于显示任务进度的控件，通常用于向用户反馈程序正在处理的任务的进度。进度条可以显示一个从 0 到 100 的数值范围，也可以根据需要自定义范围。它支持两种模式：**确定模式** 和 **不确定模式**。

### 基本使用步骤

1. 创建 `QProgressBar` 对象。
2. 设置进度条的最小值和最大值（默认是 0 到 100）。
3. 使用 `setValue()` 方法更新进度条的当前进度。
4. 将进度条添加到布局或窗口中。

### 常用方法

| 方法                                          | 描述                                           |
| --------------------------------------------- | ---------------------------------------------- |
| `setValue(value: int)`                        | 设置进度条的当前值。                           |
| `setRange(minimum: int, maximum: int)`        | 设置进度条的值范围（最小值和最大值）。         |
| `reset()`                                     | 重置进度条，将其值设为最小值。                 |
| `value()`                                     | 返回进度条的当前值。                           |
| `setMinimum(minimum: int)`                    | 设置进度条的最小值。                           |
| `setMaximum(maximum: int)`                    | 设置进度条的最大值。                           |
| `setTextVisible(visible: bool)`               | 设置是否显示进度条上的文本。                   |
| `setFormat(format: str)`                      | 设置进度条显示的文本格式。                     |
| `setOrientation(orientation: Qt.Orientation)` | 设置进度条的方向（水平或垂直）。               |
| `setInvertedAppearance(inverted: bool)`       | 设置进度条是否反向显示（从右到左或从下到上）。 |
| `setAlignment(alignment: Qt.Alignment)`       | 设置进度条文本的对齐方式（如居中、左对齐等）。 |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QProgressBar, QPushButton, QVBoxLayout, QWidget
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QProgressBar 示例")
        self.resize(300, 200)

        # 创建进度条
        self.progress_bar = QProgressBar()
        self.progress_bar.setRange(0, 100)  # 设置进度条范围
        self.progress_bar.setValue(0)       # 初始值为 0

        # 创建按钮来增加进度
        self.button = QPushButton("增加进度")
        self.button.clicked.connect(self.increase_progress)

        # 布局
        layout = QVBoxLayout()
        layout.addWidget(self.progress_bar)
        layout.addWidget(self.button)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

    def increase_progress(self):
        # 增加进度条的值
        current_value = self.progress_bar.value()
        if current_value < 100:
            self.progress_bar.setValue(current_value + 10)
        else:
            self.progress_bar.setValue(0)  # 重置进度条

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **创建进度条**：使用 `QProgressBar()` 创建进度条对象，并通过 `setRange()` 设置进度条的最小值和最大值。默认范围是 0 到 100。
2. **设置值**：使用 `setValue()` 方法设置进度条的当前值，进度条会根据当前值更新显示。如果当前值等于最大值，进度条会显示为满。
3. **按钮控制进度**：点击按钮时，通过 `value()` 获取当前进度条的值，并通过 `setValue()` 增加进度。如果进度达到 100，则重置为 0。

### 不确定模式（Indeterminate Mode）

在某些情况下，任务的进度是未知的，例如在等待某个操作完成时。此时可以使用 **不确定模式**（Indeterminate Mode），进度条会以动画的形式显示一个循环的效果，表示任务正在进行，但不知道何时结束。

要启用不确定模式，只需将进度条的最大值设置为 **0** 或 **-1**：

```python
self.progress_bar.setRange(0, 0)  # 启用不确定模式
```

在这种模式下，进度条不会显示具体的进度值，而是显示一个循环的动画，直到你手动关闭或改变进度条的状态。

### 自定义进度条显示文本

默认情况下，进度条会在内部显示百分比（如 "50%"）。你可以通过 `setFormat()` 方法自定义显示的文本格式。例如：

```python
self.progress_bar.setFormat("进度: %p%")  # 显示 "进度: 50%"
```

其中，`%p%` 代表百分比值。如果不希望显示文本，可以使用 `setTextVisible(False)` 隐藏文本：

```python
self.progress_bar.setTextVisible(False)  # 隐藏文本
```

### 垂直进度条

默认情况下，`QProgressBar` 是水平显示的。如果你需要垂直方向的进度条，可以使用 `setOrientation()` 方法设置方向：

```python
from PyQt6.QtCore import Qt

self.progress_bar.setOrientation(Qt.Orientation.Vertical)  # 设置为垂直方向
```

### 进度条的对齐方式

你可以通过 `setAlignment()` 方法来设置进度条文本的对齐方式。例如，设置文本居中：

```python
from PyQt6.QtCore import Qt

self.progress_bar.setAlignment(Qt.AlignmentFlag.AlignCenter)  # 文本居中
```

### 进度条与状态栏结合使用

在某些应用中，你可能希望将进度条放在状态栏中，以显示任务的进度。例如：

```python
# 创建进度条
progress_bar = QProgressBar()
progress_bar.setRange(0, 100)

# 将进度条添加到状态栏
self.statusBar().addPermanentWidget(progress_bar)
```

### 小结

- `QProgressBar` 是用于显示任务进度的控件，支持确定和不确定模式。
- 通过 `setValue()` 更新进度条的当前值，使用 `setRange()` 设置进度条的最小值和最大值。
- 进度条可以显示自定义的文本，也可以设置为垂直方向显示。
- 在不确定模式下，进度条会以循环动画的形式显示，表示任务正在进行中。

### QSlider滑块控件

`QSlider` 是 PyQt6 中一个常用的控件，允许用户通过拖动滑块来选择一个值。滑块可以是水平的或垂直的，通常用于调节音量、亮度等需要范围选择的场景。

### 基本使用步骤

1. 创建 `QSlider` 对象。
2. 设置滑块的方向（水平或垂直）。
3. 设置滑块的最小值和最大值。
4. 使用 `valueChanged` 信号来捕获用户改变滑块值的事件。

### 常用方法

| 方法                                              | 描述                                         |
| ------------------------------------------------- | -------------------------------------------- |
| `setValue(value: int)`                            | 设置滑块的当前值。                           |
| `value()`                                         | 返回滑块的当前值。                           |
| `setMinimum(minimum: int)`                        | 设置滑块的最小值。                           |
| `setMaximum(maximum: int)`                        | 设置滑块的最大值。                           |
| `setRange(minimum: int, maximum: int)`            | 设置滑块的最小值和最大值。                   |
| `setOrientation(orientation: Qt.Orientation)`     | 设置滑块的方向（水平或垂直）。               |
| `setTickPosition(position: QSlider.TickPosition)` | 设置刻度线的位置。                           |
| `setTickInterval(interval: int)`                  | 设置刻度线的间隔。                           |
| `setSingleStep(step: int)`                        | 设置滑块每次移动的步长。                     |
| `setPageStep(step: int)`                          | 设置滑块使用 Page Up/Down 键时的步长。       |
| `setInvertedAppearance(inverted: bool)`           | 设置滑块是否反向显示（从右到左或从下到上）。 |

### 常用信号

| 信号                | 描述                                       |
| ------------------- | ------------------------------------------ |
| `valueChanged(int)` | 当滑块的值改变时发出该信号，传递当前的值。 |
| `sliderMoved(int)`  | 当用户通过拖动滑块改变值时发出该信号。     |
| `sliderPressed()`   | 当滑块被按下时发出该信号。                 |
| `sliderReleased()`  | 当滑块被释放时发出该信号。                 |

### 示例代码

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QSlider, QLabel, QVBoxLayout, QWidget
from PyQt6.QtCore import Qt
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QSlider 示例")
        self.resize(300, 200)

        # 创建一个标签来显示滑块的值
        self.label = QLabel("滑块值: 0")
        self.label.setAlignment(Qt.AlignmentFlag.AlignCenter)

        # 创建一个水平滑块
        self.slider = QSlider(Qt.Orientation.Horizontal)
        self.slider.setRange(0, 100)  # 设置滑块的范围
        self.slider.setValue(0)       # 设置初始值
        self.slider.setTickPosition(QSlider.TickPosition.TicksBelow)  # 显示刻度线
        self.slider.setTickInterval(10)  # 设置刻度线间隔为 10
        
        # 连接滑块值改变的信号到槽函数
        self.slider.valueChanged.connect(self.update_label)

        # 布局
        layout = QVBoxLayout()
        layout.addWidget(self.label)
        layout.addWidget(self.slider)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

    def update_label(self, value):
        # 更新标签显示滑块的当前值
        self.label.setText(f"滑块值: {value}")

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **创建滑块**：使用 `QSlider(Qt.Orientation.Horizontal)` 创建一个水平滑块。你也可以创建垂直滑块，使用 `Qt.Orientation.Vertical`。
2. **设置范围**：通过 `setRange(minimum, maximum)` 设置滑块的最小值和最大值。
3. **刻度线**：使用 `setTickPosition()` 和 `setTickInterval()` 设置刻度线的位置和间隔。刻度线可以显示在滑块的上方/下方（水平）或左侧/右侧（垂直）。
4. **信号与槽**：滑块的 `valueChanged` 信号在滑块值改变时触发，连接到自定义槽函数 `update_label()`，该函数更新标签显示滑块的当前值。

### 垂直滑块

如果你想创建一个垂直滑块，只需将 `QSlider` 的方向设置为 `Qt.Orientation.Vertical`：

```python
self.slider = QSlider(Qt.Orientation.Vertical)
```

### 设置滑块的步长

- **单步移动**：通过 `setSingleStep(step)` 设置滑块每次移动的步长。例如，设置步长为 5：

  ```python
  self.slider.setSingleStep(5)
  ```

- **页面移动**：通过 `setPageStep(step)` 设置当用户按 Page Up/Down 键时滑块移动的步长。例如，设置页面步长为 10：

  ```python
  self.slider.setPageStep(10)
  ```

### 刻度线的位置

你可以使用 `setTickPosition()` 设置刻度线的位置，`QSlider` 提供了以下几种刻度线的位置选项：

- `NoTicks`：不显示刻度线。
- `TicksAbove`：在滑块上方显示刻度线（仅适用于水平滑块）。
- `TicksBelow`：在滑块下方显示刻度线（仅适用于水平滑块）。
- `TicksLeft`：在滑块左侧显示刻度线（仅适用于垂直滑块）。
- `TicksRight`：在滑块右侧显示刻度线（仅适用于垂直滑块）。

例如，设置刻度线显示在滑块下方：

```python
self.slider.setTickPosition(QSlider.TickPosition.TicksBelow)
```

### 滑块的反向显示

如果你希望滑块的值从右到左（水平滑块）或从下到上（垂直滑块）显示，可以使用 `setInvertedAppearance(True)`：

```python
self.slider.setInvertedAppearance(True)
```

### 滑块的信号

- `valueChanged(int)`：当滑块的值改变时触发，传递当前的值。
- `sliderMoved(int)`：当用户通过拖动滑块改变值时触发。
- `sliderPressed()`：当滑块被按下时触发。
- `sliderReleased()`：当滑块被释放时触发。

例如：

```python
self.slider.sliderPressed.connect(lambda: print("滑块被按下"))
self.slider.sliderReleased.connect(lambda: print("滑块被释放"))
```

### 示例：滑块控制音量

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QSlider, QLabel, QVBoxLayout, QWidget
from PyQt6.QtCore import Qt
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("音量控制")

        # 创建标签显示音量值
        self.label = QLabel("音量: 50%")
        self.label.setAlignment(Qt.AlignmentFlag.AlignCenter)

        # 创建一个垂直滑块用于控制音量
        self.slider = QSlider(Qt.Orientation.Vertical)
        self.slider.setRange(0, 100)
        self.slider.setValue(50)  # 初始音量为50%
        self.slider.setTickPosition(QSlider.TickPosition.TicksRight)
        self.slider.setTickInterval(10)

        # 连接滑块值改变信号到槽函数
        self.slider.valueChanged.connect(self.update_volume)

        # 布局
        layout = QVBoxLayout()
        layout.addWidget(self.label)
        layout.addWidget(self.slider)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

    def update_volume(self, value):
        # 更新音量标签
        self.label.setText(f"音量: {value}%")

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 小结

- `QSlider` 是滑块控件，允许用户通过拖动滑块选择一个值。
- 可以设置滑块的方向（水平或垂直）、刻度线位置、步长等。
- 通过信号 `valueChanged` 可以捕获滑块值的变化并更新界面。
- 滑块可以与其他控件（如标签）结合使用，提供直观的用户交互。

## 树类控件

### QTreeView树视图

`QTreeView` 是 PyQt6 中的一个强大的控件，用于显示层次结构的数据。它可以用来展示树状结构的数据，例如文件系统、XML 文档、目录树等。`QTreeView` 通常与数据模型（如 `QStandardItemModel` 或 `QFileSystemModel`）结合使用，以实现对树形数据的展示和操作。

### 基本概念

- **模型-视图框架**：`QTreeView` 是 PyQt6 的模型-视图框架的一部分，它是一个视图类，负责显示模型中的数据。模型提供数据，而视图负责展示这些数据。
- **层次结构**：`QTreeView` 可以显示多级嵌套的数据，每个节点可以有子节点，这样就形成了树状结构。
- **可展开/折叠**：`QTreeView` 的节点可以展开和折叠，用户可以通过点击节点前的箭头来展开或折叠子节点。

### 常用类

- `QTreeView`：树视图控件，用于显示树状数据。
- `QStandardItemModel`：标准数据模型，常用于与 `QTreeView` 结合使用。
- `QStandardItem`：表示树中的单个项（节点）。

### 基本使用步骤

1. 创建 `QTreeView` 对象。
2. 创建数据模型（如 `QStandardItemModel`）。
3. 将模型设置到 `QTreeView` 中。
4. 向模型中添加项（节点）。
5. 将 `QTreeView` 添加到布局或窗口中。

### 常用方法

| 方法                                                       | 描述                               |
| ---------------------------------------------------------- | ---------------------------------- |
| `setModel(model: QAbstractItemModel)`                      | 设置视图的模型。                   |
| `expand(index: QModelIndex)`                               | 展开指定索引处的节点。             |
| `collapse(index: QModelIndex)`                             | 折叠指定索引处的节点。             |
| `expandAll()`                                              | 展开所有节点。                     |
| `collapseAll()`                                            | 折叠所有节点。                     |
| `setHeaderHidden(hidden: bool)`                            | 设置是否隐藏标题头。               |
| `setSelectionMode(mode: QAbstractItemView.SelectionMode)`  | 设置选择模式（单选、多选等）。     |
| `setEditTriggers(triggers: QAbstractItemView.EditTrigger)` | 设置编辑触发方式（如双击编辑等）。 |
| `setSortingEnabled(enabled: bool)`                         | 设置是否启用排序功能。             |
| `selectedIndexes()`                                        | 返回当前选中的索引列表。           |

### 示例代码

下面是一个简单的 `QTreeView` 示例，展示如何创建树状结构并显示在窗口中：

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QTreeView, QVBoxLayout, QWidget, QStandardItemModel, QStandardItem
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QTreeView 示例")
        self.resize(400, 300)

        # 创建 QTreeView
        self.tree_view = QTreeView()

        # 创建数据模型
        self.model = QStandardItemModel()
        self.model.setHorizontalHeaderLabels(["名称", "描述"])

        # 创建根节点
        root_node = self.model.invisibleRootItem()

        # 创建树的第一级
        item1 = QStandardItem("父节点 1")
        item1_desc = QStandardItem("父节点 1 的描述")
        root_node.appendRow([item1, item1_desc])

        # 创建子节点
        child1 = QStandardItem("子节点 1")
        child1_desc = QStandardItem("子节点 1 的描述")
        item1.appendRow([child1, child1_desc])

        child2 = QStandardItem("子节点 2")
        child2_desc = QStandardItem("子节点 2 的描述")
        item1.appendRow([child2, child2_desc])

        # 创建另一个父节点
        item2 = QStandardItem("父节点 2")
        item2_desc = QStandardItem("父节点 2 的描述")
        root_node.appendRow([item2, item2_desc])

        # 将模型设置到 QTreeView
        self.tree_view.setModel(self.model)

        # 展开所有节点
        self.tree_view.expandAll()

        # 布局
        layout = QVBoxLayout()
        layout.addWidget(self.tree_view)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **创建 `QTreeView`**：使用 `QTreeView()` 创建树视图控件。
2. **创建数据模型**：使用 `QStandardItemModel()` 创建标准数据模型，并通过 `setHorizontalHeaderLabels()` 设置列标题。
3. **添加数据**：使用 `QStandardItem()` 创建树中的每个节点，并通过 `appendRow()` 方法将子节点添加到父节点中。
4. **设置模型**：通过 `setModel()` 将数据模型设置到 `QTreeView` 中。
5. **展开节点**：通过 `expandAll()` 方法展开所有节点。

### 模型与视图的关系

`QTreeView` 只是一个视图，它本身不存储数据。数据存储在模型中，常用的模型包括：

- **`QStandardItemModel`**：适合展示一般的树状数据。
- **`QFileSystemModel`**：适合展示文件系统的目录结构。
- **自定义模型**：你可以继承 `QAbstractItemModel` 来创建自定义模型。

### `QStandardItemModel` 和 `QStandardItem`

- **`QStandardItemModel`**：这是一个标准的数据模型，支持树状结构。每个节点（项）可以包含子项。
- **`QStandardItem`**：代表树中的一个节点。一个 `QStandardItem` 可以包含文本、图标等属性，并且可以有子项。

### 选择模式

`QTreeView` 支持多种选择模式，使用 `setSelectionMode()` 方法可以设置：

- `QAbstractItemView.SelectionMode.SingleSelection`：单选模式（默认）。
- `QAbstractItemView.SelectionMode.MultiSelection`：多选模式。
- `QAbstractItemView.SelectionMode.ExtendedSelection`：可以通过 Shift 或 Ctrl 键进行扩展选择。
- `QAbstractItemView.SelectionMode.NoSelection`：不允许选择。

例如，设置为多选模式：

```python
self.tree_view.setSelectionMode(QAbstractItemView.SelectionMode.MultiSelection)
```

### 编辑模式

默认情况下，`QTreeView` 的项是不可编辑的。如果你希望允许用户编辑树中的项，可以使用 `setEditTriggers()` 方法设置编辑触发方式。例如，允许双击编辑：

```python
from PyQt6.QtWidgets import QAbstractItemView

self.tree_view.setEditTriggers(QAbstractItemView.EditTrigger.DoubleClicked)
```

### 排序功能

`QTreeView` 支持对树状结构进行排序。通过 `setSortingEnabled(True)` 可以启用排序功能。用户可以点击列标题来排序数据。

```python
self.tree_view.setSortingEnabled(True)
```

### 文件系统模型示例

`QTreeView` 可以与 `QFileSystemModel` 结合使用，以展示文件系统的目录结构。以下是一个简单的文件系统浏览器示例：

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QTreeView, QFileSystemModel, QVBoxLayout, QWidget
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("文件系统浏览器")
        self.resize(600, 400)

        # 创建 QTreeView
        self.tree_view = QTreeView()

        # 创建文件系统模型
        self.model = QFileSystemModel()
        self.model.setRootPath("")  # 设置根目录

        # 将模型设置到 QTreeView
        self.tree_view.setModel(self.model)

        # 设置根目录
        self.tree_view.setRootIndex(self.model.index("C:/"))  # 你可以根据操作系统设置路径

        # 布局
        layout = QVBoxLayout()
        layout.addWidget(self.tree_view)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **`QFileSystemModel`**：这是一个专门用于展示文件系统的模型。它会自动加载目录和文件的结构。
2. **`setRootPath()`**：设置模型的根目录。
3. **`setRootIndex()`**：设置视图的根节点（即从哪个目录开始展示）。

### 小结

- `QTreeView` 是一个用于展示树状结构数据的视图控件，通常与 `QStandardItemModel` 或 `QFileSystemModel` 结合使用。
- 你可以通过 `QStandardItemModel` 来创建和管理树状数据，使用 `QStandardItem` 来表示树中的每个节点。
- `QTreeView` 支持展开/折叠节点、选择模式、编辑模式和排序功能。
- 你也可以使用 `QFileSystemModel` 来展示文件系统的目录结构。

### QTreeWidget树控件

`QTreeWidget` 是 PyQt6 中的一个常用控件，它提供了一个树形结构的显示界面，类似于 `QTreeView`，但 `QTreeWidget` 是一个更高级的控件，带有内置的项管理功能。与 `QTreeView` 需要手动设置模型不同，`QTreeWidget` 使用内部的 `QTreeWidgetItem` 来直接管理树中的节点。

### 基本概念

- **`QTreeWidget`**：树控件，用于显示树状结构的数据。与 `QTreeView` 类似，但不需要单独设置数据模型。
- **`QTreeWidgetItem`**：树控件中的每个节点（项）。可以包含文本、图标等，并且可以有子项。

### `QTreeView` vs `QTreeWidget`

- **`QTreeView`**：需要模型（如 `QStandardItemModel`）来管理数据，适合复杂的模型-视图分离架构。
- **`QTreeWidget`**：自带项管理功能，使用更简单，适合需要快速实现的树状结构。

### 基本使用步骤

1. 创建 `QTreeWidget` 对象。
2. 设置列数和列标题。
3. 使用 `QTreeWidgetItem` 添加根节点和子节点。
4. 将 `QTreeWidget` 添加到布局或窗口中。

### 常用方法

| 方法                                                      | 描述                           |
| --------------------------------------------------------- | ------------------------------ |
| `setColumnCount(count: int)`                              | 设置列数。                     |
| `setHeaderLabels(labels: list)`                           | 设置列标题。                   |
| `addTopLevelItem(item: QTreeWidgetItem)`                  | 添加根节点（顶级项）。         |
| `addTopLevelItems(items: list)`                           | 添加多个根节点。               |
| `clear()`                                                 | 清除所有项。                   |
| `currentItem()`                                           | 返回当前选中的项。             |
| `selectedItems()`                                         | 返回当前选中的所有项。         |
| `expandItem(item: QTreeWidgetItem)`                       | 展开指定的项。                 |
| `collapseItem(item: QTreeWidgetItem)`                     | 折叠指定的项。                 |
| `expandAll()`                                             | 展开所有项。                   |
| `collapseAll()`                                           | 折叠所有项。                   |
| `setSortingEnabled(enabled: bool)`                        | 设置是否启用排序功能。         |
| `setSelectionMode(mode: QAbstractItemView.SelectionMode)` | 设置选择模式（单选、多选等）。 |

### `QTreeWidgetItem` 常用方法

| 方法                                               | 描述                             |
| -------------------------------------------------- | -------------------------------- |
| `setText(column: int, text: str)`                  | 设置指定列的文本。               |
| `setIcon(column: int, icon: QIcon)`                | 设置指定列的图标。               |
| `addChild(child: QTreeWidgetItem)`                 | 向当前项添加子项。               |
| `takeChild(index: int)`                            | 移除指定索引的子项并返回该子项。 |
| `childCount()`                                     | 返回子项的数量。                 |
| `child(index: int)`                                | 返回指定索引的子项。             |
| `setCheckState(column: int, state: Qt.CheckState)` | 设置复选框状态。                 |
| `checkState(column: int)`                          | 返回复选框状态。                 |
| `setSelected(selected: bool)`                      | 设置是否选中该项。               |

### 示例代码

下面是一个简单的 `QTreeWidget` 示例，展示如何创建树状结构并显示在窗口中：

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QTreeWidget, QTreeWidgetItem, QVBoxLayout, QWidget
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QTreeWidget 示例")
        self.resize(400, 300)

        # 创建 QTreeWidget
        self.tree_widget = QTreeWidget()

        # 设置列数和列标题
        self.tree_widget.setColumnCount(2)
        self.tree_widget.setHeaderLabels(["名称", "描述"])

        # 创建根节点
        parent1 = QTreeWidgetItem(self.tree_widget)
        parent1.setText(0, "父节点 1")
        parent1.setText(1, "父节点 1 的描述")

        # 创建子节点
        child1 = QTreeWidgetItem(parent1)
        child1.setText(0, "子节点 1")
        child1.setText(1, "子节点 1 的描述")

        child2 = QTreeWidgetItem(parent1)
        child2.setText(0, "子节点 2")
        child2.setText(1, "子节点 2 的描述")

        # 创建另一个父节点
        parent2 = QTreeWidgetItem(self.tree_widget)
        parent2.setText(0, "父节点 2")
        parent2.setText(1, "父节点 2 的描述")

        # 展开所有节点
        self.tree_widget.expandAll()

        # 布局
        layout = QVBoxLayout()
        layout.addWidget(self.tree_widget)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **创建 `QTreeWidget`**：使用 `QTreeWidget()` 创建树控件。
2. **设置列数和标题**：通过 `setColumnCount()` 设置列数，使用 `setHeaderLabels()` 设置列标题。
3. **创建根节点和子节点**：使用 `QTreeWidgetItem()` 创建根节点和子节点，并通过 `addChild()` 方法将子节点添加到父节点。
4. **展开节点**：使用 `expandAll()` 展开所有节点。

### 选择模式

与 `QTreeView` 类似，`QTreeWidget` 也支持多种选择模式，使用 `setSelectionMode()` 方法可以设置：

- `QAbstractItemView.SelectionMode.SingleSelection`：单选模式（默认）。
- `QAbstractItemView.SelectionMode.MultiSelection`：多选模式。
- `QAbstractItemView.SelectionMode.ExtendedSelection`：可以通过 Shift 或 Ctrl 键进行扩展选择。
- `QAbstractItemView.SelectionMode.NoSelection`：不允许选择。

例如，设置为多选模式：

```python
self.tree_widget.setSelectionMode(QAbstractItemView.SelectionMode.MultiSelection)
```

### 复选框

`QTreeWidgetItem` 还支持复选框，可以使用 `setCheckState()` 方法为某一列添加复选框：

```python
from PyQt6.QtCore import Qt

# 为第 0 列设置复选框
parent1.setCheckState(0, Qt.CheckState.Checked)
```

你可以使用 `checkState()` 方法获取复选框的状态：

```python
state = parent1.checkState(0)
if state == Qt.CheckState.Checked:
    print("复选框已选中")
```

### 排序功能

`QTreeWidget` 支持对树形结构进行排序。通过 `setSortingEnabled(True)` 可以启用排序功能，用户可以点击列标题来排序数据：

```python
self.tree_widget.setSortingEnabled(True)
```

### 编辑功能

默认情况下，`QTreeWidget` 的项是不可编辑的。如果你希望允许用户编辑树中的项，可以使用 `setEditTriggers()` 方法设置编辑触发方式。例如，允许双击编辑：

```python
from PyQt6.QtWidgets import QAbstractItemView

self.tree_widget.setEditTriggers(QAbstractItemView.EditTrigger.DoubleClicked)
```

### 获取选中的项

你可以使用 `selectedItems()` 方法获取当前选中的项：

```python
selected_items = self.tree_widget.selectedItems()
for item in selected_items:
    print(item.text(0))  # 打印选中的项的第 0 列的文本
```

### 添加图标

你可以为 `QTreeWidgetItem` 的某一列添加图标，使用 `setIcon()` 方法：

```python
from PyQt6.QtGui import QIcon

icon = QIcon("path/to/icon.png")
parent1.setIcon(0, icon)  # 为第 0 列设置图标
```

### 动态添加和删除项

你可以动态地向 `QTreeWidget` 添加或删除项。例如，动态添加一个子节点：

```python
new_child = QTreeWidgetItem(parent1)
new_child.setText(0, "动态添加的子节点")
```

删除某个子节点：

```python
parent1.takeChild(0)  # 删除第一个子节点
```

### 示例：带复选框的树控件

下面是一个带复选框的 `QTreeWidget` 示例：

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QTreeWidget, QTreeWidgetItem, QVBoxLayout, QWidget
from PyQt6.QtCore import Qt
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("带复选框的 QTreeWidget")
        self.resize(400, 300)

        # 创建 QTreeWidget
        self.tree_widget = QTreeWidget()
        self.tree_widget.setColumnCount(1)
        self.tree_widget.setHeaderLabels(["选项"])

        # 创建根节点
        parent1 = QTreeWidgetItem(self.tree_widget)
        parent1.setText(0, "父节点 1")
        parent1.setCheckState(0, Qt.CheckState.Unchecked)  # 添加复选框

        # 创建子节点
        child1 = QTreeWidgetItem(parent1)
        child1.setText(0, "子节点 1")
        child1.setCheckState(0, Qt.CheckState.Unchecked)  # 添加复选框

        child2 = QTreeWidgetItem(parent1)
        child2.setText(0, "子节点 2")
        child2.setCheckState(0, Qt.CheckState.Unchecked)  # 添加复选框

        # 展开所有节点
        self.tree_widget.expandAll()

        # 布局
        layout = QVBoxLayout()
        layout.addWidget(self.tree_widget)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(layout)
        self.setCentralWidget(container)

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 小结

- `QTreeWidget` 是一个用于展示树状结构的高级控件，使用 `QTreeWidgetItem` 来管理树中的节点。
- 与 `QTreeView` 需要模型不同，`QTreeWidget` 自带项管理功能，使用更简单。
- 支持多列、复选框、排序、编辑、图标等功能。
- 通过 `QTreeWidgetItem` 可以轻松地添加、删除、修改树中的节点。

## 分割类控件

### QFrame分割线控件

`QFrame` 是 PyQt6 中一个常用的控件，用于创建具有不同边框样式的框架。它可以用来分隔布局中的不同区域，也可以作为其他控件的容器。通过设置 `QFrame` 的样式属性，可以将其用作分割线。

### `QFrame` 的分割线功能

`QFrame` 可以通过设置 `frameShape` 和 `frameShadow` 属性来实现分割线的效果。通常情况下，我们使用 `QFrame` 来创建水平或垂直的分割线。

#### 常用属性

- **`frameShape`**：定义 `QFrame` 的形状。常用的形状包括：
  - `QFrame.Shape.NoFrame`：无边框。
  - `QFrame.Shape.Box`：盒子形状。
  - `QFrame.Shape.Panel`：面板形状。
  - `QFrame.Shape.HLine`：水平线。
  - `QFrame.Shape.VLine`：垂直线。

- **`frameShadow`**：定义 `QFrame` 的阴影效果。常用的阴影效果包括：
  - `QFrame.Shadow.Plain`：无阴影。
  - `QFrame.Shadow.Raised`：凸起效果。
  - `QFrame.Shadow.Sunken`：凹陷效果。

- **`lineWidth`**：定义线条的宽度。
- **`midLineWidth`**：定义中间线条的宽度（当使用 Raised 或 Sunken 阴影时）。

### 示例代码：创建水平和垂直分割线

下面是一个简单的示例，展示如何使用 `QFrame` 创建水平和垂直的分割线：

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QFrame, QVBoxLayout, QHBoxLayout, QWidget
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QFrame 分割线示例")
        self.resize(400, 300)

        # 创建主布局
        main_layout = QVBoxLayout()

        # 创建水平分割线
        hline = QFrame()
        hline.setFrameShape(QFrame.Shape.HLine)  # 设置为水平线
        hline.setFrameShadow(QFrame.Shadow.Sunken)  # 设置阴影效果
        hline.setLineWidth(2)  # 设置线条宽度

        # 创建垂直分割线
        vline = QFrame()
        vline.setFrameShape(QFrame.Shape.VLine)  # 设置为垂直线
        vline.setFrameShadow(QFrame.Shadow.Sunken)  # 设置阴影效果
        vline.setLineWidth(2)  # 设置线条宽度

        # 将分割线添加到布局中
        main_layout.addWidget(hline)  # 添加水平分割线

        # 创建一个水平布局，并在其中添加垂直分割线
        h_layout = QHBoxLayout()
        h_layout.addWidget(vline)  # 添加垂直分割线

        # 将水平布局添加到主布局
        main_layout.addLayout(h_layout)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(main_layout)
        self.setCentralWidget(container)

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **水平分割线**：通过设置 `QFrame.Shape.HLine` 来创建水平线，并通过 `QFrame.Shadow.Sunken` 设置凹陷效果。
2. **垂直分割线**：通过设置 `QFrame.Shape.VLine` 来创建垂直线，同样使用 `QFrame.Shadow.Sunken` 设置阴影效果。
3. **线条宽度**：通过 `setLineWidth()` 方法设置线条的宽度。

### `QFrame` 的其他形状

除了分割线，`QFrame` 还可以设置其他形状，比如盒子、面板等。下面是一些常见的形状设置：

- **盒子形状**：

```python
frame = QFrame()
frame.setFrameShape(QFrame.Shape.Box)
frame.setFrameShadow(QFrame.Shadow.Raised)
frame.setLineWidth(2)
```

- **面板形状**：

```python
frame = QFrame()
frame.setFrameShape(QFrame.Shape.Panel)
frame.setFrameShadow(QFrame.Shadow.Sunken)
frame.setLineWidth(2)
```

### 小结

- `QFrame` 是一个非常灵活的控件，可以用来创建分割线或其他具有边框的框架。
- 通过设置 `frameShape` 和 `frameShadow`，你可以创建水平线、垂直线、面板、盒子等不同形状的框架。
- `QFrame` 常用于在布局中分隔不同区域，或者作为容器控件的边框。

### QSpacerItem弹簧控件

`QSpacerItem` 是 PyQt 中的一个布局项（layout item），它通常用于在布局中创建“弹簧”效果，帮助控件之间保持间距并自动调整大小。`QSpacerItem` 不直接显示在界面上，而是通过占用空间来调整布局中的控件排列。

### `QSpacerItem` 的作用

`QSpacerItem` 可以在布局中创建空白的占位空间，类似于弹簧的效果。当窗口大小改变时，`QSpacerItem` 会根据设定的大小策略（`sizePolicy`）自动调整其占用的空间。它通常与布局管理器（如 `QHBoxLayout`、`QVBoxLayout` 等）一起使用，用于在控件之间创建灵活的间距。

### 常用构造函数

```python
QSpacerItem(width, height, hPolicy, vPolicy)
```

- **`width`**：初始宽度。
- **`height`**：初始高度。
- **`hPolicy`**：水平大小策略，常用值有：
  - `QSizePolicy.Policy.Expanding`：可以扩展以占据多余的水平空间。
  - `QSizePolicy.Policy.Fixed`：固定大小，不会随窗口大小变化。
- **`vPolicy`**：垂直大小策略，常用值有：
  - `QSizePolicy.Policy.Expanding`：可以扩展以占据多余的垂直空间。
  - `QSizePolicy.Policy.Fixed`：固定大小。

### 常用大小策略

`QSizePolicy` 定义了控件在布局中的大小策略，常用的策略包括：

- **`QSizePolicy.Policy.Fixed`**：控件有固定的大小，不会随着窗口大小的变化而调整。
- **`QSizePolicy.Policy.Minimum`**：控件有最小大小，但可以增长。
- **`QSizePolicy.Policy.Maximum`**：控件有最大大小，但可以缩小。
- **`QSizePolicy.Policy.Expanding`**：控件可以扩展以填充额外的空间。
- **`QSizePolicy.Policy.MinimumExpanding`**：控件有最小大小，但可以扩展。
- **`QSizePolicy.Policy.Ignored`**：控件的大小策略被忽略。

### 示例代码：使用 `QSpacerItem` 创建弹簧效果

以下是一个简单的示例，展示如何使用 `QSpacerItem` 在水平布局中创建弹簧效果，使按钮在布局中自动调整位置：

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QHBoxLayout, QVBoxLayout, QPushButton, QSpacerItem, QSizePolicy, QWidget
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QSpacerItem 弹簧控件示例")
        self.resize(400, 200)

        # 创建主布局
        main_layout = QVBoxLayout()

        # 创建水平布局
        h_layout = QHBoxLayout()

        # 创建按钮
        button1 = QPushButton("按钮 1")
        button2 = QPushButton("按钮 2")

        # 创建 QSpacerItem，水平扩展
        spacer = QSpacerItem(40, 20, QSizePolicy.Policy.Expanding, QSizePolicy.Policy.Minimum)

        # 将第一个按钮添加到水平布局
        h_layout.addWidget(button1)

        # 添加弹簧（QSpacerItem）
        h_layout.addItem(spacer)

        # 将第二个按钮添加到水平布局
        h_layout.addWidget(button2)

        # 将水平布局添加到主布局
        main_layout.addLayout(h_layout)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(main_layout)
        self.setCentralWidget(container)

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **创建按钮**：我们创建了两个按钮 `button1` 和 `button2`。
2. **创建 `QSpacerItem`**：我们创建了一个 `QSpacerItem`，其宽度为 40 像素，高度为 20 像素，水平策略为 `QSizePolicy.Policy.Expanding`，垂直策略为 `QSizePolicy.Policy.Minimum`。这意味着 `QSpacerItem` 会在水平方向上扩展，占据多余的空间。
3. **添加到布局中**：我们将按钮和 `QSpacerItem` 添加到水平布局中。由于 `QSpacerItem` 的水平扩展策略，两个按钮之间会有一个可扩展的空白区域。当窗口大小变化时，`QSpacerItem` 会占据多余的空间，从而使按钮保持在布局的两端。

### `QSpacerItem` 的其他用法

你可以通过设置不同的大小策略来控制 `QSpacerItem` 的行为。例如，如果你想在垂直方向上创建一个弹簧效果，可以将 `QSpacerItem` 添加到垂直布局中，并设置垂直扩展策略：

```python
# 创建 QSpacerItem，垂直扩展
spacer = QSpacerItem(20, 40, QSizePolicy.Policy.Minimum, QSizePolicy.Policy.Expanding)
```

### 示例代码：垂直布局中的弹簧效果

下面是一个示例，展示如何在垂直布局中使用 `QSpacerItem`，使按钮位于窗口的顶部，而底部有一个可扩展的弹簧效果：

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QVBoxLayout, QPushButton, QSpacerItem, QSizePolicy, QWidget
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QSpacerItem 垂直弹簧示例")
        self.resize(400, 200)

        # 创建主布局
        main_layout = QVBoxLayout()

        # 创建按钮
        button = QPushButton("按钮")

        # 将按钮添加到布局
        main_layout.addWidget(button)

        # 创建 QSpacerItem，垂直扩展
        spacer = QSpacerItem(20, 40, QSizePolicy.Policy.Minimum, QSizePolicy.Policy.Expanding)

        # 将弹簧（QSpacerItem）添加到布局
        main_layout.addItem(spacer)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(main_layout)
        self.setCentralWidget(container)

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **垂直布局**：我们使用 `QVBoxLayout` 来垂直排列控件。
2. **按钮和弹簧**：按钮位于布局的顶部，而 `QSpacerItem` 通过 `QSizePolicy.Policy.Expanding` 在垂直方向上扩展，占据多余的空间。
3. **效果**：当窗口大小变化时，按钮保持在顶部，而底部的空白区域会自动扩展。

### 小结

- `QSpacerItem` 是一个用于在布局中创建弹簧效果的控件，它可以在布局中占据空白空间，并根据窗口大小自动调整。
- 通过设置 `QSizePolicy`，你可以控制 `QSpacerItem` 在水平方向或垂直方向上的扩展行为。
- `QSpacerItem` 通常与布局管理器（如 `QHBoxLayout` 或 `QVBoxLayout`）一起使用，帮助调整控件之间的间距和对齐方式。

## QScrollBar滚动条控件

`QScrollBar` 是 PyQt6 中的一个滚动条控件，通常用于在需要滚动的区域（如文本编辑器、图片查看器等）中提供滚动功能。它可以是水平的或垂直的，用户可以拖动滚动条或点击箭头按钮来滚动内容。

### `QScrollBar` 的基本用法

`QScrollBar` 是一个独立的控件，也可以与其他控件（如 `QTextEdit`、`QListWidget` 等）一起使用。它提供了水平滚动条和垂直滚动条的功能。

### `QScrollBar` 的常用方法和属性

- **`setOrientation(Qt.Orientation)`**：设置滚动条的方向。可以是水平 (`Qt.Orientation.Horizontal`) 或垂直 (`Qt.Orientation.Vertical`)。
- **`setMinimum(int)`**：设置滚动条的最小值。
- **`setMaximum(int)`**：设置滚动条的最大值。
- **`setValue(int)`**：设置滚动条的当前值。
- **`value()`**：获取当前滚动条的值。
- **`setPageStep(int)`**：设置页面步长，即点击滚动条空白区域时滚动的距离。
- **`setSingleStep(int)`**：设置单步步长，即点击滚动条箭头按钮时滚动的距离。
- **`valueChanged.connect()`**：连接信号，当滚动条的值发生变化时触发。

### 示例代码：创建一个简单的 `QScrollBar`

下面是一个简单的示例，展示如何创建一个垂直 `QScrollBar`，并连接其 `valueChanged` 信号来监控滚动条的值变化：

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QVBoxLayout, QLabel, QScrollBar, QWidget
from PyQt6.QtCore import Qt
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QScrollBar 滚动条示例")
        self.resize(300, 200)

        # 创建主布局
        main_layout = QVBoxLayout()

        # 创建标签用于显示滚动条的值
        self.label = QLabel("当前值: 0")
        main_layout.addWidget(self.label)

        # 创建垂直滚动条
        self.scrollbar = QScrollBar(Qt.Orientation.Vertical)
        self.scrollbar.setMinimum(0)  # 设置最小值
        self.scrollbar.setMaximum(100)  # 设置最大值
        self.scrollbar.setValue(0)  # 设置初始值
        self.scrollbar.setSingleStep(1)  # 设置单步步长
        self.scrollbar.setPageStep(10)  # 设置页面步长

        # 连接滚动条的值变化信号到槽函数
        self.scrollbar.valueChanged.connect(self.on_value_changed)

        # 将滚动条添加到布局
        main_layout.addWidget(self.scrollbar)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(main_layout)
        self.setCentralWidget(container)

    def on_value_changed(self, value):
        # 当滚动条的值发生变化时更新标签
        self.label.setText(f"当前值: {value}")

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **`QScrollBar` 的创建**：我们创建了一个垂直的滚动条，设置了最小值为 0，最大值为 100，初始值为 0。
2. **步长设置**：
   - `setSingleStep(1)`：点击滚动条箭头时，值会增加或减少 1。
   - `setPageStep(10)`：点击滚动条的空白区域时，值会增加或减少 10。
3. **信号连接**：`valueChanged` 信号连接到 `on_value_changed` 槽函数，当滚动条的值发生变化时，标签的文本会更新。

### 水平滚动条

如果你想创建一个水平滚动条，只需将 `QScrollBar` 的方向设置为 `Qt.Orientation.Horizontal`：

```python
self.scrollbar = QScrollBar(Qt.Orientation.Horizontal)
```

### 示例代码：水平和垂直滚动条

下面的示例展示了如何同时创建水平和垂直滚动条，并分别监控它们的值变化：

```python
from PyQt6.QtWidgets import QApplication, QMainWindow, QVBoxLayout, QHBoxLayout, QLabel, QScrollBar, QWidget
from PyQt6.QtCore import Qt
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("QScrollBar 水平和垂直滚动条示例")
        self.resize(400, 200)

        # 创建主布局
        main_layout = QVBoxLayout()

        # 创建标签用于显示滚动条的值
        self.label = QLabel("垂直值: 0, 水平值: 0")
        main_layout.addWidget(self.label)

        # 创建水平布局用于放置滚动条
        h_layout = QHBoxLayout()

        # 创建垂直滚动条
        self.v_scrollbar = QScrollBar(Qt.Orientation.Vertical)
        self.v_scrollbar.setMinimum(0)
        self.v_scrollbar.setMaximum(100)
        self.v_scrollbar.setValue(0)
        self.v_scrollbar.setSingleStep(1)
        self.v_scrollbar.setPageStep(10)

        # 创建水平滚动条
        self.h_scrollbar = QScrollBar(Qt.Orientation.Horizontal)
        self.h_scrollbar.setMinimum(0)
        self.h_scrollbar.setMaximum(100)
        self.h_scrollbar.setValue(0)
        self.h_scrollbar.setSingleStep(1)
        self.h_scrollbar.setPageStep(10)

        # 连接滚动条的值变化信号到槽函数
        self.v_scrollbar.valueChanged.connect(self.on_value_changed)
        self.h_scrollbar.valueChanged.connect(self.on_value_changed)

        # 将滚动条添加到水平布局
        h_layout.addWidget(self.h_scrollbar)

        # 将垂直滚动条和水平布局添加到主布局
        main_layout.addLayout(h_layout)
        main_layout.addWidget(self.v_scrollbar)

        # 设置中心窗口部件
        container = QWidget()
        container.setLayout(main_layout)
        self.setCentralWidget(container)

    def on_value_changed(self):
        # 更新标签，显示垂直和水平滚动条的值
        v_value = self.v_scrollbar.value()
        h_value = self.h_scrollbar.value()
        self.label.setText(f"垂直值: {v_value}, 水平值: {h_value}")

app = QApplication(sys.argv)

window = MainWindow()
window.show()

sys.exit(app.exec())
```

### 说明

1. **水平和垂直滚动条**：我们创建了两个滚动条，一个是垂直滚动条，另一个是水平滚动条。
2. **信号连接**：两个滚动条的 `valueChanged` 信号都连接到同一个槽函数 `on_value_changed`，并根据滚动条的当前值更新标签的文本。

### 自定义滚动条的外观

你可以通过设置样式表 (`QSS`) 来自定义 `QScrollBar` 的外观。例如，以下是一个简单的样式表，可以改变滚动条的颜色和尺寸：

```python
scrollbar.setStyleSheet("""
    QScrollBar:vertical {
        border: 2px solid grey;
        background: #32CC99;
        width: 15px;
        margin: 22px 0 22px 0;
    }
    QScrollBar::handle:vertical {
        background: #FF0000;
        min-height: 20px;
    }
    QScrollBar::add-line:vertical {
        background: #32CC99;
        height: 20px;
        subcontrol-position: bottom;
        subcontrol-origin: margin;
    }
    QScrollBar::sub-line:vertical {
        background: #32CC99;
        height: 20px;
        subcontrol-position: top;
        subcontrol-origin: margin;
    }
""")
```

### 小结

- `QScrollBar` 是 PyQt 中用于提供滚动功能的控件。它可以是水平或垂直的，常用于需要滚动的区域。
- 你可以通过设置 `setMinimum()`、`setMaximum()`、`setValue()` 等方法来控制滚动条的范围和当前值。
- `QScrollBar` 的 `valueChanged` 信号可以用来监控滚动条的值变化，并做出相应的响应。
- 你可以使用样式表自定义滚动条的外观。

