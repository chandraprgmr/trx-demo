import styles from "../styles/Marquee.module.css";
import Products from "../app/Products";
import { memo } from "react";

const Marquee = ({ products = [] }) => {
  if (!products || products.length === 0) return null;

  // duplicate array so the loop looks continuous
  const items = products.concat(products);

  return (
    <div className="mt-20">
      <h1 className="text-center text-secondary text-xl font-extrabold">
        You may also like
      </h1>

      <section className="mt-10 relative h-52 sm:h-96 w-full overflow-hidden">
        {/* use CSS module anim */}
        <div className={styles.anim}>
          {items.map((product, idx) => (
            // make sure each item does not shrink (flex-shrink-0) and has a right margin
            <div className="mr-5 flex-shrink-0" key={`${product._id}-${idx}`}>
              <Products products={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(Marquee);
