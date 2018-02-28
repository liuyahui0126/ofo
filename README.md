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
## 2018/2/28
### checkbox-group  和  wx:for

微信有许多封装好的Api供大家使用，在做微信小程序之前最好多看看开发者文档，像轮播图swiper，控件按钮controls等会节省许多开发时间。    
这里简单介绍一下我踩过的坑，在写warn界面的时候，起初checkbox是一个一个写上去的，但是在后来看Api的时候发现可以使用checkbox-group这个标签，    
在里面直接使用wx:for遍历对象载入标签。    
![checkbox](/questionPic/checkbox.jpg)



