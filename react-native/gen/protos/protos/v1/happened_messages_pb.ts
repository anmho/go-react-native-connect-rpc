// @generated by protoc-gen-es v2.2.1 with parameter "target=ts"
// @generated from file protos/v1/happened_messages.proto (package happened_messages, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file protos/v1/happened_messages.proto.
 */
export const file_protos_v1_happened_messages: GenFile = /*@__PURE__*/
  fileDesc("CiFwcm90b3MvdjEvaGFwcGVuZWRfbWVzc2FnZXMucHJvdG8SEWhhcHBlbmVkX21lc3NhZ2VzIhwKDEdyZWV0UmVxdWVzdBIMCgRuYW1lGAEgASgJIiEKDUdyZWV0UmVzcG9uc2USEAoIZ3JlZXRpbmcYASABKAkiFgoFRXZlbnQSDQoFdGl0bGUYASABKAkiRwoSQ3JlYXRlRXZlbnRSZXF1ZXN0Eg0KBXRpdGxlGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEg0KBXBsYWNlGAMgASgJIj4KE0NyZWF0ZUV2ZW50UmVzcG9uc2USJwoFZXZlbnQYASABKAsyGC5oYXBwZW5lZF9tZXNzYWdlcy5FdmVudCIaChhHZXRVcGxvYWRJbWFnZVVSTFJlcXVlc3QiMgoZR2V0VXBsb2FkSW1hZ2VVUkxSZXNwb25zZRIVCg1wcmVzaWduZWRfdXJsGAEgASgJQiZaJGhhcHBlbmVkYXBpL2dlbi9wcm90b3MvdjE7aGFwcGVuZWR2MWIGcHJvdG8z");

/**
 * @generated from message happened_messages.GreetRequest
 */
export type GreetRequest = Message<"happened_messages.GreetRequest"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message happened_messages.GreetRequest.
 * Use `create(GreetRequestSchema)` to create a new message.
 */
export const GreetRequestSchema: GenMessage<GreetRequest> = /*@__PURE__*/
  messageDesc(file_protos_v1_happened_messages, 0);

/**
 * @generated from message happened_messages.GreetResponse
 */
export type GreetResponse = Message<"happened_messages.GreetResponse"> & {
  /**
   * @generated from field: string greeting = 1;
   */
  greeting: string;
};

/**
 * Describes the message happened_messages.GreetResponse.
 * Use `create(GreetResponseSchema)` to create a new message.
 */
export const GreetResponseSchema: GenMessage<GreetResponse> = /*@__PURE__*/
  messageDesc(file_protos_v1_happened_messages, 1);

/**
 * @generated from message happened_messages.Event
 */
export type Event = Message<"happened_messages.Event"> & {
  /**
   * @generated from field: string title = 1;
   */
  title: string;
};

/**
 * Describes the message happened_messages.Event.
 * Use `create(EventSchema)` to create a new message.
 */
export const EventSchema: GenMessage<Event> = /*@__PURE__*/
  messageDesc(file_protos_v1_happened_messages, 2);

/**
 * @generated from message happened_messages.CreateEventRequest
 */
export type CreateEventRequest = Message<"happened_messages.CreateEventRequest"> & {
  /**
   * @generated from field: string title = 1;
   */
  title: string;

  /**
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * @generated from field: string place = 3;
   */
  place: string;
};

/**
 * Describes the message happened_messages.CreateEventRequest.
 * Use `create(CreateEventRequestSchema)` to create a new message.
 */
export const CreateEventRequestSchema: GenMessage<CreateEventRequest> = /*@__PURE__*/
  messageDesc(file_protos_v1_happened_messages, 3);

/**
 * @generated from message happened_messages.CreateEventResponse
 */
export type CreateEventResponse = Message<"happened_messages.CreateEventResponse"> & {
  /**
   * @generated from field: happened_messages.Event event = 1;
   */
  event?: Event;
};

/**
 * Describes the message happened_messages.CreateEventResponse.
 * Use `create(CreateEventResponseSchema)` to create a new message.
 */
export const CreateEventResponseSchema: GenMessage<CreateEventResponse> = /*@__PURE__*/
  messageDesc(file_protos_v1_happened_messages, 4);

/**
 * @generated from message happened_messages.GetUploadImageURLRequest
 */
export type GetUploadImageURLRequest = Message<"happened_messages.GetUploadImageURLRequest"> & {
};

/**
 * Describes the message happened_messages.GetUploadImageURLRequest.
 * Use `create(GetUploadImageURLRequestSchema)` to create a new message.
 */
export const GetUploadImageURLRequestSchema: GenMessage<GetUploadImageURLRequest> = /*@__PURE__*/
  messageDesc(file_protos_v1_happened_messages, 5);

/**
 * @generated from message happened_messages.GetUploadImageURLResponse
 */
export type GetUploadImageURLResponse = Message<"happened_messages.GetUploadImageURLResponse"> & {
  /**
   * @generated from field: string presigned_url = 1;
   */
  presignedUrl: string;
};

/**
 * Describes the message happened_messages.GetUploadImageURLResponse.
 * Use `create(GetUploadImageURLResponseSchema)` to create a new message.
 */
export const GetUploadImageURLResponseSchema: GenMessage<GetUploadImageURLResponse> = /*@__PURE__*/
  messageDesc(file_protos_v1_happened_messages, 6);

