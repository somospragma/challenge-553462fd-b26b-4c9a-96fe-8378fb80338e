import { WebClientConfig } from '@nestjs/common';

export const webClientConfig: WebClientConfig = {
  errorHandler: (error) => {
    return error.onErrorResume();
  },
};