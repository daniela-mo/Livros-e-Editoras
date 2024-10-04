import { inject } from '@angular/core';
import { PublishersService } from '../../services/publishers.service';

export const getPublishers = () => {
  const publishersService = inject(PublishersService);
  return publishersService.getAll();
};
