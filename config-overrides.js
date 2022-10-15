const { override, useBabelRc } = require("customize-cra");

module.exports = override(
    useBabelRc()
);

//đầu tiên khi nó chjay react-app-rewired nó sẽ đọc file này, và khi ó đọc thì nó nhận đc 1 cấu hình thư viện webpack để nó ghi đè cấu hình webpack đc ẩn đi bởi create-react-app
// thì ghi qua override nó sẽ nhận đc webpack nguyên bản bên trong đã ẩn đi bởi creare-react-app và nó export ra ngoài để nó chạy dự án
// => để override thì đưa cấu hifh vào trong override nó đc sự hỗ trợ của customize-cra.

//=> hỗ trợ babel nên mạng tìm useBabelRc: https://github.com/arackaf/customize-cra/blob/master/api.md
// nhưng phải import từ customize-cra