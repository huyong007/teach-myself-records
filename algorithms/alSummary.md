### 第十五讲学习总结：
- 指数时间复杂度的算法在大规模数据面前是无效的。什么意思？
- 二分查找的思想，二分查找的实现代码（递归和循环），二分查找的适用范围
- 16节，变体一的代码理解，自己手动实现


# 中心思想
- 升维：增加指针；空间换时间；具体应用是跳表
- 增加索引：一级索引，二级索引······多级索引
- 简书上的一篇LRU文章，leetcode上面LRU题目
- 知乎上的关于REies的问答

### 个人反思
- 关于二叉树的题解我经常写不出来，第三遍了还是写不出来就是因为我不理解二叉树的结构到底是咋样的，不知道咋回事

## 具体知识点总结
> 二叉树的理解
> 每次都是操作节点的，节点node是一个数组，其中根结点的值是node.val,节点的左子树和右子树也是两个数组，用当前节点表示为node.left;node.right


> DFS 

递归写法
```python
visited = set() 
def dfs(node, visited):
if node in visited: # terminator
	# already visited 
	return 
	visited.add(node) 
	# process current node here. 
	...
	for next_node in node.children(): 
		if not next_node in visited: 
			dfs(next_node, visited)
```

非递归写法

```python
def DFS(self, tree): 

	if tree.root is None: 
		return [] 

	visited, stack = [], [tree.root]

	while stack: 
		node = stack.pop() 
		visited.add(node)

		process (node) 
		nodes = generate_related_nodes(node) 
		stack.push(nodes) 

	# other processing work 
	...
```
>贪心算法

贪心算法：简单的说，问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解。这种子问题最优解称为最优子结构。

*贪心算法*和*动态规划*的不同在于它对每个子问题的解决方案都作出选择，不能回退，动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。
## 二分查找的前提条件
1. 目标函数单调性（单调递增或者递减）
2. 存在上下界（bounded)
3. 能够通过索引访问（index accessible）
```python
left, right = 0, len(array) - 1 
while left <= right: 
	  mid = (left + right) / 2 
	  if array[mid] == target: 
		    # find the target!! 
		    break or return result 
	  elif array[mid] < target: 
		    left = mid + 1 
	  else: 
		    right = mid - 1
```
- 数据结构
  * 数组
  * 哈希表
  * 二叉树
  * 对象
- 算法