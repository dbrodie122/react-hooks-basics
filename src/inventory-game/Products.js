import React from 'react';

export default function Products({ products, updateStock }) {
  return (
    <div className='row'>
      {products.map((product, i) => {
        const warningColor = product.numberInStock <= 3 ? 'alert-danger' : '';
        return (
          <div className='card m-3' key={i} style={{ width: '15rem' }}>
            <div className='card-body'>
              <h5 className={warningColor}>{product.name}</h5>
              <p>{product.numberInStock} in stock</p>
              <div className='row align-flex-end'>
                <div className='col align-self-center text-center'>
                  <button
                    onClick={() => updateStock(product, 'increment')}
                    className='btn btn-secondary m-1'
                  >
                    +
                  </button>
                  <button
                    onClick={() => updateStock(product, 'decrement')}
                    className='btn btn-secondary m-1'
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
