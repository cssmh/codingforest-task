import React, { Suspense } from "react";
const LazyComponent = React.lazy(() =>
  import("./Component/InfiniteScrollComponent")
);

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex h-screen justify-center items-center">
            Lazy Loading....
          </div>
        }
      >
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
