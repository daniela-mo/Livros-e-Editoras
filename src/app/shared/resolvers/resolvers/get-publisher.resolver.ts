import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { PublishersService } from '../../services/publishers.service';


export const getPublisher = (route: ActivatedRouteSnapshot) => {
  const publishersService = inject(PublishersService);
  return publishersService.get(route.paramMap.get('id') as string);
};
