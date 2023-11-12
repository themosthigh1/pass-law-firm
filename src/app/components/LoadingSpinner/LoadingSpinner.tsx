"use client";

import { RiseLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <section className={loadingSpinnerClasses.section}>
      <div>
        <div className="mb-40">
          <RiseLoader color="#99272D" loading />
        </div>
      </div>
    </section>
  );
};

export default LoadingSpinner;

const loadingSpinnerClasses = {
  section: "flex justify-center mt-56",
};
