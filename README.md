# 纯静态版作品集（2026-11-06）

## 最简单：直接上传
使用 liuzhixi-static-pages-upload-20261106.zip。
Cloudflare -> Workers 和 Pages -> 创建应用 -> Pages -> 上传资产（直接上传）。
上传 ZIP 后部署即可。不需要 GitHub、不需要构建命令、不需要 Workers 部署命令。
也可以解压后上传整个文件夹；确保 index.html 位于上传目录根部。

## 从源码通过 GitHub 构建
使用 liuzhixi-static-source-20261106.zip，解压后上传文件到 GitHub 仓库根目录。
Cloudflare Pages 连接仓库，框架选 None，构建命令 pnpm run build，输出目录 dist/client，根目录保持默认。
不要上传 node_modules、dist/server、.wrangler。

本项目已启用 output: export，移除 Cloudflare 服务端构建插件；首页、案例页、404 页均生成静态 HTML。所有源图片及交互代码保留。
静态部署不保证中国内地各运营商都能稳定访问 pages.dev，请另行测试。