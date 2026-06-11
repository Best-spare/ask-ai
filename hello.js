const os = require('os');

const asciiArt = `
   █████╗ ███████╗██╗  ██╗      █████╗ ██╗
  ██╔══██╗██╔════╝██║ ██╔╝     ██╔══██╗██║
  ███████║███████╗█████╔╝      ███████║██║
  ██╔══██║╚════██║██╔═██╗      ██╔══██║██║
  ██║  ██║███████║██║  ██╗     ██║  ██║██║
  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝     ╚═╝  ╚═╝╚═╝
`;

console.log(asciiArt);
console.log('='.repeat(50));
console.log('欢迎来到 AI 编程时代！');
console.log('='.repeat(50));
console.log(`当前日期和时间: ${new Date().toLocaleString('zh-CN')}`);
console.log(`Node.js 版本号: ${process.version}`);
console.log(`操作系统: ${os.type()} ${os.release()}`);
console.log(`平台: ${os.platform()}`);
console.log('='.repeat(50));
console.log('你不需要写代码，你是架构师！');
