import Express from "express";
import { Query } from "express-serve-static-core";

export interface TypedRequestBody<T> extends Express.Request {
    body: T;
}

export interface TypedRequestParams<T extends Query> extends Express.Request {
    query: T
}

export interface TypedRequest<T extends Query, U> extends Express.Request {
    query: T,
    body: U,
}