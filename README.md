# cartesian-product

A generator function for Cartesian product.

# Installation

```
npm install @anywhichway/cartesian-product
```

# Usage

```javascript
import cartesianProduct from '@anywhichway/cartesian-product';

const product = cartesianProduct([1,2,3],[4,5,6]);
console.log(product.length); // 9
for (let row of product) {
  console.log(row);
}
```

# Additional Information

Generator based Cartesian products are very fast for combinations that are early in the set of possible combinations. However, they are an 0(n) operation to access a combination at a random location in the set of possible combinations. This is because the generator must be iterated through to the desired combination. This is a very slow operation.

For a more powerful and faster implementation of Cartesian product, see [CXProduct](https://www.github.com/anywhichway/cxproduct). CXProduct is a virtual Cartesian product that can be iterated over or accessed at random locations in the set of possible combinations. It is O(1) to access a combination at a random location in the set of possible combinations. CXProduct also supports dynamic modification of the underlying arrays and the ability to add additional arrays to the product or even intersect Cartesian products.

# Performance

See the performance tests at  [CXProduct](https://www.github.com/anywhichway/cxproduct)

# License

MIT. See [LICENSE](LICENSE) for details.

# Release History (Reverse Chronological Order)

2023-02-06 v1.0.1 Updated browser build.

2023-02-06 v1.0.0 Initial release


