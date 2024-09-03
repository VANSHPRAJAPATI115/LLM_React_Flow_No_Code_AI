// src/nodes/TextNode.js
import React, { useState, useEffect } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    const variableMatches = currText.match(/{{\s*[\w]+\s*}}/g) || [];
    setVariables(variableMatches.map(v => v.replace(/[{}]/g, '').trim()));
  }, [currText]);

  return (
    <BaseNode id={id} title="Text Node" outputHandles={variables}>
      <label>
        Text:
        <input 
          type="text" 
          value={currText} 
          onChange={handleTextChange} 
          style={{ width: '100%' }}
        />
      </label>
    </BaseNode>
  );
};
