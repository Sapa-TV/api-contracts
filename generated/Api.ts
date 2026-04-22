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

import {
  DonaterRequest,
  DonatersResponse,
  HealthResponse,
  KingRequest,
  KingResponse,
  PushSubscriptionRequest,
  PushSubscriptionResponse,
  PushTestRequest,
  PushTestResponse,
  VapidPublicKeyResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Health
   * @name Health
   * @request GET:/api/health
   * @response `200` `HealthResponse` Health check
   */
  health = (params: RequestParams = {}) =>
    this.request<HealthResponse, any>({
      path: `/api/health`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags King
   * @name GetKing
   * @request GET:/api/king
   * @response `200` `KingResponse` Current king
   */
  getKing = (params: RequestParams = {}) =>
    this.request<KingResponse, any>({
      path: `/api/king`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags King
   * @name PostKing
   * @request POST:/api/king
   * @response `200` `KingResponse` Update king
   */
  postKing = (data: KingRequest, params: RequestParams = {}) =>
    this.request<KingResponse, any>({
      path: `/api/king`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donaters
   * @name GetLastDay
   * @request GET:/api/last-day
   * @response `200` `DonatersResponse` Donaters for last day
   */
  getLastDay = (params: RequestParams = {}) =>
    this.request<DonatersResponse, any>({
      path: `/api/last-day`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donaters
   * @name PostLastDay
   * @request POST:/api/last-day
   * @response `200` `DonatersResponse` Add last day donater
   */
  postLastDay = (data: DonaterRequest, params: RequestParams = {}) =>
    this.request<DonatersResponse, any>({
      path: `/api/last-day`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donaters
   * @name GetMonth
   * @request GET:/api/month
   * @response `200` `DonatersResponse` Donaters for current month
   */
  getMonth = (params: RequestParams = {}) =>
    this.request<DonatersResponse, any>({
      path: `/api/month`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Donaters
   * @name PostMonth
   * @request POST:/api/month
   * @response `200` `DonatersResponse` Add month donater
   */
  postMonth = (data: DonaterRequest, params: RequestParams = {}) =>
    this.request<DonatersResponse, any>({
      path: `/api/month`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Push
   * @name PostSubscription
   * @request POST:/api/push/subscription
   * @response `200` `PushSubscriptionResponse` Save push subscription
   */
  postSubscription = (
    data: PushSubscriptionRequest,
    params: RequestParams = {},
  ) =>
    this.request<PushSubscriptionResponse, any>({
      path: `/api/push/subscription`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Push
   * @name DeleteSubscription
   * @request DELETE:/api/push/subscription
   * @response `200` `PushSubscriptionResponse` Delete push subscription
   */
  deleteSubscription = (
    data: PushSubscriptionRequest,
    params: RequestParams = {},
  ) =>
    this.request<PushSubscriptionResponse, any>({
      path: `/api/push/subscription`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Push
   * @name TestPushAll
   * @request POST:/api/push/test-all
   * @response `200` `PushTestResponse` Send test push to all subscriptions
   */
  testPushAll = (data: PushTestRequest, params: RequestParams = {}) =>
    this.request<PushTestResponse, any>({
      path: `/api/push/test-all`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Push
   * @name GetVapidPublicKey
   * @request GET:/api/push/vapid-public-key
   * @response `200` `VapidPublicKeyResponse` VAPID public key for push notifications
   */
  getVapidPublicKey = (params: RequestParams = {}) =>
    this.request<VapidPublicKeyResponse, any>({
      path: `/api/push/vapid-public-key`,
      method: "GET",
      format: "json",
      ...params,
    });
}
