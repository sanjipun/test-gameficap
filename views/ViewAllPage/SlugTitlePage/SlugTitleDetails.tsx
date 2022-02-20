import React from 'react';

interface SlugTitleDetailsProps {}

const SlugTitleDetails: React.FC<SlugTitleDetailsProps> = () => {
  return (
    <div className="max-w-1440 mx-auto px-20 text-primary leading-6">
      <div className="w-full border border-C9D2D8 mt-14 rounded-xl h-96 flex items-center justify-center">
        <img src="/assets/image.svg" />
      </div>
      <p className="mt-12">
        The actual existence of the Xiaomi 12 Ultra is one of the most hotly-contended subjects on
        the tech leaks circuit as of late, with earlier hints of its being replaced, first by the
        Mix 5 Pro and more recently by an inaugural 12U variant. However, the latter has recently
        been countermanded by assertions that the fact is both are in the works, with a different
        internal code-name apiece.
      </p>
      <p className="mt-3">
        The 12 Ultra, also allegedly known as the "Xiaomi L1", has now been assigned additional
        putative features, courtesy of the reliable leaker Digital Chat Station. This tip focuses on
        its battery and charging tech rather than others such as its cameras, for a change.
      </p>
      <p className="mt-3">
        The supposed 12-series flagship is now slated to match its siblings, with their premium 120W
        wired charging technology. By contrast, their predecessor the Mi 11 Ultra launched amidst
        claims that the 67W standard Xiaomi settled on instead had been chosen to protect its
        generous 5,000mAh battery from excessive heat.
      </p>
      <p className="mt-3">
        Then again, the OEM did match this wired charging speed with 67W in wireless terms, whereas
        the "12 Ultra" apparently downgrades to 50W. In addition, the 12 Ultra is now projected to
        debut with a slightly smaller 4,860mAh battery - then again, this might be its rated
        capacity, a spec that might not stop Xiaomi from advertising a typical capacity of 5,000mAh
        again, should the phone truly be unveiled soon in this form and under this name.
      </p>
    </div>
  );
};

export default SlugTitleDetails;
