import React, { useState } from 'react';

function StupidButton() {
  const [show, setShow] = useState(false);

  return (
      <div>
        <button type="button" onClick={() => setShow(!show)} style={{
          border: '1px solid green', color: 'white', padding: '0.5rem 0.25rem', background: 'green', marginBottom: '1vh'
        }}>Click It</button>
        {show ? <div style={{
          padding: '20px', backgroundColor: 'tomato'
        }}>
  <h3>This is JSX</h3>
</div> : null}
        </div>
  );
}

export default StupidButton;