import axiosInstance from './axios'; // Adjust the import based on your file structure

describe('axios instance', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set baseURL and withCredentials', () => {
    expect(axiosInstance.defaults.baseURL).toBe('');
    expect(axiosInstance.defaults.withCredentials).toBe(true);
  });

  it('should add auth headers on request if token exists in localStorage', () => {
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue(JSON.stringify({ state: { authentication: { tokenObject: 'mockToken' } } })),
    };
    global.localStorage = localStorageMock;

    const config = {
      headers: {},
    };
    const updatedConfig = axiosInstance.interceptors.request.handlers[0].fulfilled(config);
    
    expect(updatedConfig.headers.authorization).toBe('Bearer mockToken');
    expect(updatedConfig.headers.Accept).toBe('application/json');
  });

  it('should not add auth headers on request if token does not exist in localStorage', () => {
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue(null),
    };
    global.localStorage = localStorageMock;

    const config = {
      headers: {},
    };
    const updatedConfig = axiosInstance.interceptors.request.handlers[0].fulfilled(config);
    
    expect(updatedConfig.headers.authorization).toBeUndefined();
    expect(updatedConfig.headers.Accept).toBe('application/json');
  });

  it('should return response data on successful response', async () => {
    const responseData = { data: 'mockData' };
    const response = await axiosInstance.interceptors.response.handlers[0].fulfilled({ data: responseData });
    
    expect(response).toEqual(responseData);
  });

  it('should return empty object on error response', async () => {
    const error = { message: 'mockError' };
    const response = await axiosInstance.interceptors.response.handlers[1].rejected(error);
    
    expect(response).toEqual({ formData: [], error });
  });
});
