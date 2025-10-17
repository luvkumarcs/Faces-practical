import { useState, useEffect } from "react";

import '@fancyapps/ui/dist/fancybox/fancybox.umd.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function useFancybox(options = {}) {
  const [root, setRoot] = useState(null);

  useEffect(() => {
    if (root) {
      Fancybox.bind(root, "[data-fancybox]", options);
      return () => Fancybox.unbind(root);
    }
  }, [root, options]);

  return [setRoot];
}