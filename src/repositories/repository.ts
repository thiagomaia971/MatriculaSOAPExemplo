export abstract class Repository<TEntity> {
  public abstract GetAll(): TEntity[];
  public abstract GetSingle(id: string): TEntity;
}
