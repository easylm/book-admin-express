### mac brew mongodb install
```shell

# brew更新
(base) fausto@192 ~ % brew update
Error: Another active Homebrew update process is already in progress.
Please wait for it to finish or terminate it to continue.
# 删除 brew locks
(base) fausto@192 ~ % rm -rf $(brew --prefix)/var/homebrew/locks
(base) fausto@192 ~ % brew update 
# 下载适用于mongodb官方的homebrew公式和数据库工具
(base) fausto@192 ~ % brew tap mongodb/brew

# 下载mongodb的稳定版本
(base) fausto@192 ~ % brew install mongodb-community@5.0
```

### typescript set
```shell
# 全局安装typescript
sudo npm install -g typescript

# 初始化typescript
(base) fausto@192 book-admin-express % tsc --init

Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
(base) fausto@192 book-admin-express % git init



```