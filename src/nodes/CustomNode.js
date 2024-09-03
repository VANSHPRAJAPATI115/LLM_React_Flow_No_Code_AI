// src/nodes/CustomNode.js
import React from 'react';
import BaseNode from './BaseNode';

export const CustomNode = ({ id, data }) => {
  return (
    <BaseNode id={id} title="Custom Node" inputHandles={['input1', 'input2']} outputHandles={['output1']}>
      <div>
        <span>Custom content here.</span>
      </div>
    </BaseNode>
  );
};
