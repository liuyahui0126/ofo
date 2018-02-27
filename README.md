# ofo
微信小程序模拟ofo

### 主要使用了简单的js语句和微信小程序的API，在过程中发现一些自己还不熟练的问题，在这里记录一下。         
## 详细界面可在screenPic中查看，这里就不放全部了

![index](/screenPic/index.jpg)
![my](/screenPic/my.jpg)
![scanCode](/screenPic/scanCode.jpg)
![warn](/screenPic/warn.jpg)

## 2018/2/27   

### switch-case 不写break -->丢失页面        

   switch-case在进行case的条件判断时，当第n个条件成立时，如果不加break（也就是不跳出），会把case n下面所有的case语句全部执行。
   在我做index页面的事件的时候，运用了controls这个控件，由于在case3和case4中未添加break。导致点击报障按钮的时候，会直接显示my页面
   导致了丢失warn页面的情况。     
![break](/questionPic/break.jpg)
   
123
