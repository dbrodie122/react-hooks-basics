import React from 'react';

export default function Products({ products, updateStock }) {
  return (
    <div className='row'>
      {products.map((product, i) => {
        const warningColor = product.numberInStock <= 3 ? 'alert-danger' : '';
        return (
          <div className='card' key={i}>
            <div className='card-body'>
              <h5 className={warningColor}>{product.name}</h5>
              <p>{product.numberInStock} in stock</p>
              <div className='row'>
                <button
                  onClick={() => updateStock(product, 'increment')}
                  className='btn btn-secondary'
                >
                  +
                </button>
                <button
                  onClick={() => updateStock(product, 'decrement')}
                  className='btn btn-secondary'
                >
                  -
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
