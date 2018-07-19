# Introduction

### gaga

### 代码演示

::: demo
#### 基本
* React-Inspire-Tree, High performance
* react-tree

``` jsx
import data from 'data/baseData';
import Tree from 'react-inspire-tree';

const callback = tree => {
  tree.expand();
};

const onSelected = (event, aa) => {
  console.log(event, aa);
}

ReactDOM.render(
<div>
  <Tree
    data={data}
    config={{ dragAndDrop: true, selection: { mode: 'checkbox' }, showCheckboxes: false, editable: true }}
    callback={callback}
    onSelected={onSelected}
    onDeselected={onSelected}
  />
</div>
, mountNode
)

```
:::
