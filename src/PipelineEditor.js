import React, { useState } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const PipelineComponent = () => {
  const [nodes, setNodes] = useState([
    { id: '1', type: 'input', data: { label: 'Input Node' }, position: { x: 100, y: 100 } },
    { id: '2', type: 'output', data: { label: 'Output Node' }, position: { x: 400, y: 100 } },
  ]);
  const [edges, setEdges] = useState([
    { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  ]);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default PipelineComponent;
