import { createClient, Client } from 'soap'

export abstract class Repository<TEntity> {
  protected get url(): string { return `http://localhost:${this.port}/wsdl?wsdl`; }
  protected port: string;
  protected client: Client;

  public abstract GetAll(): TEntity[];
  public abstract GetSingle(id: string): TEntity;

  constructor(port: string) {
    this.port = port;
    createClient(this.url, (error, client) => {
      console.log(error, client);
      this.client = client
    });
  }
}
