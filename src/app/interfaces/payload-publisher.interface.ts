import { Publisher } from "./publisher.interface";

export type PublisherPayload = Omit<Publisher, 'id'>;