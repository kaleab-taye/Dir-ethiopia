import { HrmClient } from './Ping_pongServiceClientPb';
import { PingRequest, PingResponse } from './ping_pong_pb';

const GRPC_HOST: string =
  process.env.REACT_APP_GRPC_HOST !== undefined
    ? process.env.REACT_APP_GRPC_HOST
    : '';
const GRPC_PORT: string =
  process.env.REACT_APP_GRPC_PORT !== undefined
    ? process.env.REACT_APP_GRPC_PORT
    : '';

const client = new HrmClient(`${GRPC_HOST}:${GRPC_PORT}`, null, null);

export default class GrpcClient {
  async pingServer(): Promise<String> {
    const request = new PingRequest();
    request.setPingstring('HrmClient');
    const response: PingResponse = await client.pingServer(request, {});
    return response.getResult();
  }
}
