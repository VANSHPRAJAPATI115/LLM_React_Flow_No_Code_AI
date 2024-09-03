// src/nodes/LLMNode.js
import React from 'react';
import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode id={id} title="LLM Node" inputHandles={['system', 'prompt']} outputHandles={['response']}>
      <div>
        <span>This is an LLM Node.</span>
      </div>
    </BaseNode>
  );
};
