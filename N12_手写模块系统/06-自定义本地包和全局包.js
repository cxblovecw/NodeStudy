
// 1.包的规范(了解)
// - package.json必须在包的顶层目录下
// - 二进制文件应该在bin目录下
// - JavaScript代码应该在lib目录下
// - 文档应该在doc目录下
// - 单元测试应该在test目录下

// 2.package.json字段分析(了解)
// - name：包的名称，必须是唯一的，由小写英文字母、数字和下划线组成，不能包含空格
// - description：包的简要说明
// - version：符合语义化版本识别规范的版本字符串
//     + 主版本号：当你做了不兼容的 API 修改
//     + 子版本号：当你做了向下兼容的功能性新增
//     + 修订号：当你做了向下兼容的问题修正
// - keywords：关键字数组，通常用于搜索
// - maintainers：维护者数组，每个元素要包含name、email（可选）、web（可选）字段
// - contributors：贡献者数组，格式与maintainers相同。包的作者应该是贡献者数组的第一- 个元素
// - bugs：提交bug的地址，可以是网站或者电子邮件地址
// - licenses：许可证数组，每个元素要包含type（许可证名称）和url（链接到许可证文本的- 地址）字段
// - repositories：仓库托管地址数组，每个元素要包含type（仓库类型，如git）、url（仓- 库的地址）和path（相对于仓库的路径，可选）字段
// - dependencies：生产环境包的依赖，一个关联数组，由包的名称和版本号组成
// - devDependencies：开发环境包的依赖，一个关联数组，由包的名称和版本号组成

// 3.自定义包实现步骤
// 1.创建一个包文件夹
// 2.初始化一个package.json文件
// 3.初始化一个包入口js文件
//   注意点: 如果没有配置main, 默认会将index.js作为入口
//           如果包中没有index.js, 那么就必须配置main
// 4.根据包信息配置package.json文件
//   注意点: 通过scripts可以帮我们记住指令, 然后通过npm run xxx方式就可以执行该指令
//           如果指令的名称叫做start或者test, 那么执行的时候可以不加run
// 5.给package.json添加bin属性, 告诉系统执行全局命令时需要执行哪一个JS文件
// 6.在全局命令执行的JS文件中添加 #! /usr/bin/env node
// 7.通过npm link 将本地包放到全局方便我们调试

// 4.将自定义包发布到官网
// 1.在https://www.npmjs.com/注册账号
// 2.在终端输入npm addUser
// 3.进入包所在目录, 在终端输入npm publish
