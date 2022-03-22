/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import config from '../../config/environment';

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  protected token: string | null;

  protected constructor() {
    this.instance = axios.create({
      baseURL: config.serverUrl,
    });
    this.token = null;
    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );

    this.instance.interceptors.request.use(configFromParams => {
      if (!this.token) return configFromParams;
      const axiosConfig = configFromParams;
      if (axiosConfig.headers) {
        axiosConfig.headers.Authorization = `Bearer ${this.token}`;
      }
      return axiosConfig;
    });
  };

  public setToken = (token: string | null): void => {
    this.token = token;
  };

  private handleResponse = ({ data }: AxiosResponse) => data;

  protected handleError = (err: unknown): Promise<never> => {
    return Promise.reject(err);
  };
}

export default HttpClient;
