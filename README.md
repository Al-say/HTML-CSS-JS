import java.util.*;

class Graph {
    private int V; // 顶点数
    private int[][] adjMatrix; // 邻接矩阵
    private LinkedList<Integer>[] adjList; // 邻接表

    // 构造函数
    public Graph(int v) {
        V = v;
        // 初始化邻接矩阵
        adjMatrix = new int[V][V];
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                adjMatrix[i][j] = 0;
            }
        }
        
        // 初始化邻接表
        adjList = new LinkedList[V];
        for (int i = 0; i < V; i++) {
            adjList[i] = new LinkedList<>();
        }
    }

    // 添加边到邻接矩阵和邻接表
    public void addEdge(int src, int dest, int weight) {
        // 邻接矩阵
        adjMatrix[src][dest] = weight;
        
        // 邻接表
        adjList[src].add(dest);
    }

    // 输出邻接矩阵
    public void printAdjMatrix() {
        System.out.println("邻接矩阵:");
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                System.out.print(adjMatrix[i][j] + "\t");
            }
            System.out.println();
        }
    }

    // 输出邻接表
    public void printAdjList() {
        System.out.println("邻接表:");
        for (int i = 0; i < V; i++) {
            System.out.print("顶点 " + i + ": ");
            for (int j : adjList[i]) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }

    // 深度优先遍历辅助函数
    private void DFSUtil(int v, boolean[] visited) {
        // 标记当前节点为已访问并输出
        visited[v] = true;
        System.out.print(v + " ");
        
        // 递归访问所有邻接顶点
        Iterator<Integer> i = adjList[v].listIterator();
        while (i.hasNext()) {
            int n = i.next();
            if (!visited[n]) {
                DFSUtil(n, visited);
            }
        }
    }

    // 深度优先遍历
    public void DFS(int v) {
        System.out.print("深度优先遍历序列: ");
        // 标记所有顶点为未访问
        boolean[] visited = new boolean[V];
        
        // 调用递归辅助函数
        DFSUtil(v, visited);
        System.out.println();
    }

    // 广度优先遍历
    public void BFS(int v) {
        System.out.print("广度优先遍历序列: ");
        // 标记所有顶点为未访问
        boolean[] visited = new boolean[V];
        
        // 创建队列用于BFS
        LinkedList<Integer> queue = new LinkedList<>();
        
        // 标记当前节点为已访问并加入队列
        visited[v] = true;
        queue.add(v);
        
        while (queue.size() != 0) {
            // 出队并打印
            v = queue.poll();
            System.out.print(v + " ");
            
            // 获取所有邻接顶点
            Iterator<Integer> i = adjList[v].listIterator();
            while (i.hasNext()) {
                int n = i.next();
                if (!visited[n]) {
                    visited[n] = true;
                    queue.add(n);
                }
            }
        }
        System.out.println();
    }

    public static void main(String[] args) {
        // 创建有6个顶点的图
        Graph g = new Graph(6);
        
        // 添加边
        g.addEdge(0, 1, 5);
        g.addEdge(0, 2, 8);
        g.addEdge(1, 2, 4);
        g.addEdge(2, 3, 5);
        g.addEdge(2, 5, 9);
        g.addEdge(3, 0, 7);
        g.addEdge(3, 5, 6);
        g.addEdge(4, 3, 5);
        g.addEdge(5, 0, 3);
        g.addEdge(5, 4, 1);
        
        // 输出邻接矩阵
        g.printAdjMatrix();
        
        // 输出邻接表
        g.printAdjList();
        
        // 深度优先遍历
        g.DFS(0);
        
        // 广度优先遍历
        g.BFS(0);
    }
}# HTML-CSS-JS