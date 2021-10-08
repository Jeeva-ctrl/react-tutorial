import React from 'react';

const ButtonSpinner = () => {
  const [loading, setLoading] = React.useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div style={{marginTop:'10px'}}>
      <button className="button" onClick={handleClick} disabled={loading}>
      {loading &&  <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />}
        {loading && 'Fetching from Server'}
        {!loading && 'Fetch data from Server'}
      </button>
    </div>
  );
};

export default ButtonSpinner;
