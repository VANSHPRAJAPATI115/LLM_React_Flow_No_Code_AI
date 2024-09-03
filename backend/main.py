# src/backend/main.py
from fastapi import FastAPI
from pydantic import BaseModel
from collections import defaultdict, deque


from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to be more restrictive if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: list
    edges: list

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)
    
    is_dag = check_if_dag(data.nodes, data.edges)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }

def check_if_dag(nodes, edges):
    graph = defaultdict(list)
    in_degree = defaultdict(int)

    for edge in edges:
        graph[edge['source']].append(edge['target'])
        in_degree[edge['target']] += 1

    queue = deque([node['id'] for node in nodes if in_degree[node['id']] == 0])

    visited_count = 0
    while queue:
        node = queue.popleft()
        visited_count += 1

        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return visited_count == len(nodes)
