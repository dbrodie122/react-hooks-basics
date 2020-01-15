import React from 'react';

export default function Stats({ words }) {
  const nounCount = words.filter(word => word.type === 'noun').length;
  const adjCount = words.filter(word => word.type === 'adjective').length;
  return (
    <div>
      <p>
        You've generated {nounCount} nouns and {adjCount} adjectives
      </p>
    </div>
  );
}
