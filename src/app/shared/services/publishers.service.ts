import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Publisher } from '../../interfaces/publisher.interface';
import { PublisherPayload } from '../../interfaces/payload-publisher.interface';

@Injectable({
  providedIn: 'root',
})
export class PublishersService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Publisher[]>('/api/publishers');
  }

  get(id: string) {
    return this.httpClient.get<Publisher>(`/api/publishers/${id}`);
  }

  post(payload: PublisherPayload) {
    return this.httpClient.post('/api/publishers', payload);
  }

  put(id: string, payload: PublisherPayload) {
    return this.httpClient.put(`/api/publishers/${id}`, payload);
  }

  delete(id: string) {
    return this.httpClient.delete(`/api/publishers/${id}`);
  }
}
