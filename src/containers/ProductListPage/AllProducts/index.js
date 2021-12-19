

const AllProducts = () => {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>SKU Code</th>
            <th>Price</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.products.length > 0
            ? product.products.filter((pd, index)=>{
            if(searchTerm)  
            {
              return pd?.[searchBy]?.includes(searchTerm);
            }
            else{
              return true;
            }
           

            }).map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.skuCode}</td>
                  <td>{product.price}</td>
                  <td>{product.size}</td>
                  <td>{`${product.sizeSquantity}+${product.sizeMquantity}+${product.sizeXLquantity}`}</td>
                  {/* <td>{product.category.name}</td> */}
                  <td className="action-btn-container">
                    <button className="info-product" onClick={() => showProductDetailsModal(product)}>
                      info
                    </button>
                    <button className="del-product"
                      onClick={() => {
                        const payload = {
                          productId: product._id,
                        };
                        dispatch(deleteProductById(payload));
                        
                      }}
                    >
                      del
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    )
}