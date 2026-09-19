import { Resilience4jConfig } from '@nestjs/common';

export const resilience4jConfig: Resilience4jConfig = {
  circuitBreaker: {
    name: 'taskService',
    fallback: (error) => {
      return { status: 'failed', message: 'Circuit breaker opened' };
    }
  },
  retry: {
    maxAttempts: 3,
    delay: 1000
  },
  bulkhead: {
    maxConcurrentCalls: 10,
    maxQueueSize: 10
  }
};