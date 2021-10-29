import { useEffect, useState } from 'react';

export interface ScriptConfig {
  src: string;
  timeout?: number;
  attributes?: {
    name: string;
    value: string;
  }[];
}

const cached: { [key: string]: ScriptConfig } = {};

export const useScript = (config: ScriptConfig) => {
  const [state, setState] = useState({
    loaded: false,
    error: false,
  });

  const removeCachedItem = () => {
    if (cached[config.src]) {
      delete cached[config.src];
    }
  };

  useEffect(() => {
    if (cached[config.src]) {
      setState({
        loaded: true,
        error: false,
      });
    } else {
      cached[config.src] = config;

      const script = document.createElement('script');
      script.src = config.src;
      script.async = true;

      if (config.attributes !== undefined) {
        config.attributes.forEach(attr => {
          script.setAttribute(attr.name, attr.value);
        });
      }

      const onScriptLoad = () =>
        setState({
          loaded: true,
          error: false,
        });

      const onScriptError = () => {
        removeCachedItem();
        script.remove();

        setState({
          loaded: true,
          error: true,
        });
      };

      const appendScript = () => {
        document.head.appendChild(script);
      };

      script.addEventListener('load', onScriptLoad);
      script.addEventListener('error', onScriptError);

      const timer = config.timeout
        ? setTimeout(appendScript, config.timeout)
        : null;

      if (!config.timeout) {
        appendScript();
      }

      return () => {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);

        if (timer) {
          clearTimeout(timer);
        }

        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }

        removeCachedItem();
        script.remove();
      };
    }
  }, [config.src]);

  return [state.loaded, state.error];
};
