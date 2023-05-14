import { useMemo } from '@nebula.js/stardust';
import { createRoot } from 'react-dom/client';

const useReactRoot = (rootElement: HTMLElement) => useMemo(() => createRoot(rootElement), [rootElement]);

export default useReactRoot;
