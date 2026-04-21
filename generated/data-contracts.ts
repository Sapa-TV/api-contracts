/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface DonaterRequest {
  name: string;
}

/** @example ["Star","Echo"] */
export interface DonatersResponse {
  donaters: string[];
}

export interface HealthResponse {
  status: string;
}

export interface KingRequest {
  name: string;
}

/** @example {"name":"Star"} */
export interface KingResponse {
  name: string;
}

export interface PushKeys {
  auth: string;
  p256dh: string;
}

export interface PushSubscriptionRequest {
  endpoint: string;
  keys: PushKeys;
  /** @example null */
  user_id?: string | null;
}

export interface PushSubscriptionResponse {
  success: boolean;
}
