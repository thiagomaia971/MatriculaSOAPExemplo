import { createClient, Client } from 'soap'

export abstract class Repository<TEntity> {
  protected get url(): string { return `https://localhost:${this.port}/${this.service}.asmx?wsdl`; }
  protected port: string;
  protected service: string;
  protected client: Client;

  public abstract GetAll(): Promise<TEntity[]>;
  public abstract GetSingle(id: string): TEntity;

  constructor(port: string, service: string) {
    this.port = port;
    this.service = service;
    createClient(this.url, (error, client) => {
      this.client = client
    });
  }
}
