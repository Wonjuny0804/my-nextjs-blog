'use client';

import { useEffect, useState } from "react";

const useImportScripts = (scriptSource: string) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = scriptSource;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
    setLoaded(true);
    return () => {
      document.body.removeChild(script);
      setLoaded(false);
    };
  }, [scriptSource]);

  return loaded;
};

export default useImportScripts;
