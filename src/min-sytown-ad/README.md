# mip-sytown-ad

mip-sytown-ad 是尚一堂广告组件

标题|内容
----|----
类型|通用
支持布局|N/S
所需脚本|https://c.mipcdn.com/static/v1/mip-sytown-ad/mip-sytown-ad.js

## 示例

### 基本使用

```html
<mip-sytown-ad>
    自定义内容，可以嵌套其他组件
</mip-sytown-ad>
```

### 关闭悬浮元素的方法

1. 给 `<mip-sytown-ad>` 标签添加一个自定义的 `id=customid`。

2. 给需要点击关闭悬浮元素的标签添加属性 `on="tap:customid.close"`。

```html
<mip-fixed type="top" id="customid">
  <div class="btn_style" on="tap:customid.close">我是关闭按钮</div>
</mip-fixed>
```