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
  HealthResponse,
  OAuthCallbackResponse,
  OAuthUrlResponse,
  PushSubscriptionRequest,
  PushSubscriptionResponse,
  PushTestRequest,
  PushTestResponse,
  SupporterRequest,
  SupporterResponse,
  SupportersResponse,
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
   * @name GetHealth
   * @request GET:/api/health
   * @response `200` `HealthResponse` Health check
   */
  getHealth = (params: RequestParams = {}) =>
    this.request<HealthResponse, any>({
      path: `/api/health`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags OAuth
   * @name OauthCallback
   * @request GET:/api/oauth/callback
   * @response `200` `OAuthCallbackResponse` OAuth callback result
   */
  oauthCallback = (
    code: string,
    state: string | null,
    params: RequestParams = {},
  ) =>
    this.request<OAuthCallbackResponse, any>({
      path: `/api/oauth/callback`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags OAuth
   * @name GetOauthUrl
   * @request GET:/api/oauth/url
   * @response `200` `OAuthUrlResponse` Twitch OAuth authorization URL
   */
  getOauthUrl = (params: RequestParams = {}) =>
    this.request<OAuthUrlResponse, any>({
      path: `/api/oauth/url`,
      method: "GET",
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
   * @response `500` `void` VAPID_PUBLIC_KEY not configured
   */
  getVapidPublicKey = (params: RequestParams = {}) =>
    this.request<VapidPublicKeyResponse, void>({
      path: `/api/push/vapid-public-key`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Supporters
   * @name GetDaySupporters
   * @request GET:/api/supporters/day
   * @response `200` `SupportersResponse` Supporters for last day
   */
  getDaySupporters = (params: RequestParams = {}) =>
    this.request<SupportersResponse, any>({
      path: `/api/supporters/day`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Supporters
   * @name PostDaySupporter
   * @request POST:/api/supporters/day
   * @response `200` `SupportersResponse` Add last day supporter
   */
  postDaySupporter = (data: SupporterRequest, params: RequestParams = {}) =>
    this.request<SupportersResponse, any>({
      path: `/api/supporters/day`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Supporters
   * @name GetKingSupporter
   * @request GET:/api/supporters/king
   * @response `200` `SupporterResponse` Current king supporter
   */
  getKingSupporter = (params: RequestParams = {}) =>
    this.request<SupporterResponse, any>({
      path: `/api/supporters/king`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Supporters
   * @name PostKingSupporter
   * @request POST:/api/supporters/king
   * @response `200` `SupporterResponse` Update king supporter
   */
  postKingSupporter = (data: SupporterRequest, params: RequestParams = {}) =>
    this.request<SupporterResponse, any>({
      path: `/api/supporters/king`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Supporters
   * @name GetMonthSupporters
   * @request GET:/api/supporters/month
   * @response `200` `SupportersResponse` Supporters for current month
   */
  getMonthSupporters = (params: RequestParams = {}) =>
    this.request<SupportersResponse, any>({
      path: `/api/supporters/month`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Supporters
   * @name PostMonthSupporter
   * @request POST:/api/supporters/month
   * @response `200` `SupportersResponse` Add month supporter
   */
  postMonthSupporter = (data: SupporterRequest, params: RequestParams = {}) =>
    this.request<SupportersResponse, any>({
      path: `/api/supporters/month`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
