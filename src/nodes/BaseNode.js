// src/nodes/BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';
import './NodeStyles.css';

const BaseNode = ({ id, title, inputHandles = [], outputHandles = [], children }) => {
  return (
    <div className="base-node">
      <h3>{title}</h3>
      <div className="handles">
        {inputHandles.map((handle, index) => (
          <Handle
            key={index}
            type="target"
            position={Position.Left}
            id={`${id}-${handle}`}
            style={{ top: `${(index + 1) * 20}px` }}
          />
        ))}
        {outputHandles.map((handle, index) => (
          <Handle
            key={index}
            type="source"
            position={Position.Right}
            id={`${id}-${handle}`}
            style={{ top: `${(index + 1) * 20}px` }}
          />
        ))}
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default BaseNode;
