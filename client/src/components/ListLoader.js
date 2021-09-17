import React from 'react';
import useAxiosOnMount from '../hooks/useAxiosOnMount';
import SemanticLoadError from './Error';
import SemanticLoader from './SemanticLoader';

const ListLoader = ({url , renderData, header , errorMessage}) => {
  const { data, loading, error } = useAxiosOnMount(url);

  const renderList = () => {
    if (loading) return <SemanticLoader />;
    if (error) return (
      <SemanticLoadError
        header={errorMessage ? errorMessage : "Error Occurred"}
        error={error.message}
        />
       ) 
    return data.map(renderData)
  };

  return (
    <div>
      <h1>{header}</h1>
      {renderList()}
    </div>
  );
};

export default ListLoader;










