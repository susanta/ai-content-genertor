'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('9aca64ea-5a88-403e-8fee-f59481b48d57');
  }, []);

  return null;
};
