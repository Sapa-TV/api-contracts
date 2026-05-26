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

export interface HealthResponse {
  commit: string;
  status: string;
  version: string;
}

export interface OAuthCallbackResponse {
  message: string;
  success: boolean;
}

export interface OAuthUrlResponse {
  url: string;
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

export interface PushTestRequest {
  body: string;
  title: string;
}

export interface PushTestResponse {
  /**
   * @format int32
   * @min 0
   */
  sent: number;
}

export interface RouletteRequest {
  /**
   * @format int32
   * @example 3
   */
  card_type: number;
  /** @example "Rare card" */
  description: string;
  /** @example "Golden card" */
  name: string;
  /**
   * @format int32
   * @example 10
   */
  weight: number;
}

export interface SupporterRequest {
  name: string;
}

/** @example {"name":"Star"} */
export interface SupporterResponse {
  name: string;
}

/** @example ["Star","Echo"] */
export interface SupportersResponse {
  supporters: string[];
}

export interface VapidPublicKeyResponse {
  key: string;
}
