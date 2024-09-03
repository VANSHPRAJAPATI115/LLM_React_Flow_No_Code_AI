import axios from 'axios';

const submitPipeline = async (nodes, edges) => {
  try {
    const response = await axios.post('http://localhost:8000/pipelines/parse', {
      nodes,
      edges
    });

    const { num_nodes, num_edges, is_dag } = response.data;
    alert(`Nodes: ${num_nodes}, Edges: ${num_edges}, Is DAG: ${is_dag}`);
  } catch (error) {
    console.error('Error submitting pipeline:', error);

    // Check if the error is related to the network request
    if (error.response) {
      // Server responded with a status other than 200 range
      alert(`Pipeline submission failed with status code: ${error.response.status}`);
    } else if (error.request) {
      // Request was made but no response received
      alert('Pipeline submission failed. No response received from the server.');
    } else {
      // Something else happened during the request setup
      alert('Pipeline submission failed due to a request setup error.');
    }
  }
};

export default submitPipeline;
