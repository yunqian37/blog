# Git

打开ssh文件夹：open ~/.ssh 



生成ssh key： ssh-keygen -t rsa -C [your_mail]



验证ssh是否配置成功： ssh -T git@github.com



查看当前账户： ssh-add -l



ssh-add -K ~/.ssh/id_rsa_github



```javascript
配置多个ssh config设置

Host github
HostName github.com
User github
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github
```

# 终端操作